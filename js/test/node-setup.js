// Auxiliar para medir cobertura en Node (el runner del navegador no se modifica).
// Carga js/script.js y simula window, prompt y alert para que los specs corran igual.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const directorio = path.dirname(fileURLToPath(import.meta.url));

if (typeof globalThis.localStorage === "undefined") {
  class Storage {
    #datos = new Map();

    get length() {
      return this.#datos.size;
    }

    key(indice) {
      return [...this.#datos.keys()][indice] ?? null;
    }

    getItem(clave) {
      const claveNormalizada = String(clave);
      return this.#datos.has(claveNormalizada)
        ? this.#datos.get(claveNormalizada)
        : null;
    }

    setItem(clave, valor) {
      this.#datos.set(String(clave), String(valor));
    }

    removeItem(clave) {
      this.#datos.delete(String(clave));
    }

    clear() {
      this.#datos.clear();
    }
  }

  globalThis.Storage = Storage;
  const almacenamientoLocal = new Storage();
  const almacenamientoSesion = new Storage();
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    enumerable: true,
    get() {
      return almacenamientoLocal;
    },
  });
  Object.defineProperty(globalThis, "sessionStorage", {
    configurable: true,
    enumerable: true,
    get() {
      return almacenamientoSesion;
    },
  });
}

globalThis.window = globalThis;
globalThis.prompt = () => null;
globalThis.alert = () => {};

const archivo = path.join(directorio, "..", "script.js");
vm.runInThisContext(fs.readFileSync(archivo, "utf8"), { filename: archivo });