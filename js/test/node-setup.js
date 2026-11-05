// Auxiliar para medir cobertura en Node (el runner del navegador no se modifica).
// Carga js/script.js y simula window, prompt y alert para que script.spec.js corra igual.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

global.window = global;
global.prompt = () => null;
global.alert = () => {};

const archivo = path.join(__dirname, "..", "script.js");
vm.runInThisContext(fs.readFileSync(archivo, "utf8"), { filename: archivo });