const { chromium } = require('playwright');
const fs = require('fs');

const URL = 'http://localhost:3000';
const DEVICES = [
  { name: 'iphone-14-pro', w: 393, h: 852, dpr: 3 },
  { name: 'galaxy-s23', w: 360, h: 780, dpr: 3 },
  { name: 'ipad-air', w: 820, h: 1180, dpr: 2 },
];
const out = [];
const log = (device, comp, prueba, esperado, real, ok) => {
  out.push({ device, comp, prueba, esperado, real: String(real), estado: ok ? 'OK' : 'FALLA' });
};
const activeIdx = (page) => page.evaluate(() =>
  [...document.querySelectorAll('#carouselDestacados .carousel-item')].findIndex(e => e.classList.contains('active')));

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  for (const d of DEVICES) {
    const ctx = await browser.newContext({ viewport: { width: d.w, height: d.h }, deviceScaleFactor: d.dpr, isMobile: d.w < 600, hasTouch: d.w < 900 });
    const page = await ctx.newPage();
    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.evaluate(() => { const el = document.querySelector('#carouselDestacados'); if (el && window.bootstrap) bootstrap.Carousel.getOrCreateInstance(el).pause(); });

    // ---- CAROUSEL ----
    const n = await page.locator('#carouselDestacados .carousel-item').count();
    log(d.name, 'Carousel', 'Cantidad de diapositivas', 3, n, n === 3);
    const car = page.locator('#carouselDestacados');
    await car.scrollIntoViewIfNeeded();
    const a0 = await activeIdx(page);
    await car.locator('.carousel-control-next').click(); await page.waitForTimeout(900);
    const a1 = await activeIdx(page);
    log(d.name, 'Carousel', 'Boton siguiente', `${a0} -> ${(a0 + 1) % 3}`, `${a0} -> ${a1}`, a1 === (a0 + 1) % 3);
    await car.locator('.carousel-control-prev').click(); await page.waitForTimeout(900);
    const a2 = await activeIdx(page);
    log(d.name, 'Carousel', 'Boton anterior', `vuelve a ${a0}`, `queda en ${a2}`, a2 === a0);
    const ind = car.locator('.carousel-indicators [data-bs-slide-to]');
    const nInd = await ind.count();
    if (nInd >= 3) {
      await ind.nth(2).click(); await page.waitForTimeout(900);
      const a3 = await activeIdx(page);
      log(d.name, 'Carousel', 'Indicador 3', 2, a3, a3 === 2);
    } else log(d.name, 'Carousel', 'Indicadores', 3, nInd, false);
    const imgs = await page.evaluate(() => [...document.querySelectorAll('#carouselDestacados img')].map(i => {
      const r = i.getBoundingClientRect(); const fit = getComputedStyle(i).objectFit;
      const nat = i.naturalWidth / i.naturalHeight; const ren = r.width / r.height;
      return { src: i.getAttribute('src'), fit, distorsion: fit === 'fill' && Math.abs(nat - ren) / nat > 0.05 };
    }));
    const bad = imgs.filter(i => i.distorsion);
    log(d.name, 'Carousel', 'Imagenes sin deformar', 'ninguna deformada', bad.length ? JSON.stringify(bad) : 'ok', bad.length === 0);
    const sx = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
    log(d.name, 'Carousel', 'Sin scroll horizontal', 'scrollWidth <= clientWidth', `${sx[0]} vs ${sx[1]}`, sx[0] <= sx[1]);
    await page.screenshot({ path: `docs/04-testing/capturas/carousel-${d.name}.png`, fullPage: true });

    // ---- MODAL ----
    await page.evaluate(() => window.scrollTo(0, 0));
    const btns = page.locator('[data-bs-target="#modalProducto"]');
    const nb = await btns.count();
    log(d.name, 'Modal', 'Botones "Ver detalle"', 3, nb, nb === 3);
    const modal = page.locator('#modalProducto');
    const visible = async () => modal.evaluate(m => m.classList.contains('show'));
    const waitClosed = async () => { await page.waitForTimeout(700); return !(await visible()); };
    for (let i = 0; i < nb; i++) {
      const b = btns.nth(i);
      await b.scrollIntoViewIfNeeded(); await b.click(); await page.waitForTimeout(700);
      const info = await modal.evaluate(m => {
        const body = m.querySelector('.modal-body');
        return {
          titulo: (m.querySelector('.modal-title') || {}).textContent?.trim(),
          img: m.querySelector('img') ? m.querySelector('img').getAttribute('src') : null,
          texto: body ? body.innerText.replace(/\s+/g, ' ').trim().slice(0, 140) : null,
          sx: body ? body.scrollWidth > body.clientWidth : null,
        };
      });
      log(d.name, 'Modal', `Abre tarjeta ${i + 1}`, 'modal visible con datos del producto', JSON.stringify(info), (await visible()) && !!info.titulo);
      log(d.name, 'Modal', `Sin scroll horizontal tarjeta ${i + 1}`, 'sin scroll', info.sx, info.sx === false);
      if (i === 0) await page.screenshot({ path: `docs/04-testing/capturas/modal-${d.name}.png` });
      await modal.locator('.btn-close').first().click();
      const c1 = await waitClosed();
      const foco = await page.evaluate(() => document.activeElement ? document.activeElement.getAttribute('data-bs-target') : null);
      if (i === 0) {
        log(d.name, 'Modal', 'Cierra con X', 'cerrado', c1 ? 'cerrado' : 'abierto', c1);
        log(d.name, 'Modal', 'Foco vuelve al boton', '#modalProducto', foco, foco === '#modalProducto');
        await b.click(); await page.waitForTimeout(700);
        await page.mouse.click(5, 5);
        const c2 = await waitClosed();
        log(d.name, 'Modal', 'Cierra con clic en fondo', 'cerrado', c2 ? 'cerrado' : 'abierto', c2);
        await b.click(); await page.waitForTimeout(700);
        await page.keyboard.press('Escape');
        const c3 = await waitClosed();
        log(d.name, 'Modal', 'Cierra con Escape', 'cerrado', c3 ? 'cerrado' : 'abierto', c3);
      }
    }
    await ctx.close();
  }
  await browser.close();
  fs.writeFileSync('docs/04-testing/resultados.json', JSON.stringify(out, null, 2));
  console.table(out.map(r => ({ dispositivo: r.device, comp: r.comp, prueba: r.prueba, estado: r.estado })));
  console.log('\nFALLAS:');
  out.filter(r => r.estado === 'FALLA').forEach(r => console.log(r));
})();