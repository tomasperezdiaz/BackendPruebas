const Contador = require("./app");

const contador1 = new Contador('Tomas Perez Diaz');

contador1.contar();
console.log(contador1.getCuentaIndividual());
contador1.contar();
console.log(contador1.getCuentaGlobal());
console.log(contador1.getResponsable());