// Auxiliar para medir cobertura en Node (el runner del navegador no se modifica).
// Carga js/script.js y simula window, prompt y alert para que los specs corran igual.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const directorio = path.dirname(fileURLToPath(import.meta.url));

globalThis.window = globalThis;
globalThis.prompt = () => null;
globalThis.alert = () => {};

const archivo = path.join(directorio, "..", "script.js");
vm.runInThisContext(fs.readFileSync(archivo, "utf8"), { filename: archivo });