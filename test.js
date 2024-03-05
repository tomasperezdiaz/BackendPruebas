/* const Contador = require("./app");
const { default: Calculadora } = require("./calculadora.js");

const contador1 = new Contador("Tomas Perez Diaz");

/* contador1.contar();
console.log(contador1.getCuentaIndividual());
contador1.contar();
console.log(contador1.getCuentaGlobal());
console.log(contador1.getResponsable());

 */

const mode = "calculo";
const ejemlpoImport = async () => {
  if (mode === "calcylo") {
    const { default: Calculadora } = await import("./calculadora.js");
    const c1 = new Calculadora();
    c1.sumar(3, 3);
    c1.restar(1, 2);
  }
};

ejemlpoImport();

