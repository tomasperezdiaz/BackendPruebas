//Variables

//Var, let, const
//Como ya vimos ver no se usa. Let es cuando la variable cambia. const cuando se mantiene.

//Comentarios. Se pueden hacer asi con barras
/* o Asi 
que es mas de una linea 
*/

//String(Texto), number(numero), booleans(true/false)
//null, undefined (estos no los use tanto, forman parte de los primitivos)

//Array, objects
const numeros = [1, 2, 3, 4]; //Esto es un array
const personas = { persona1: "Tomas", edad: 23, educacion: "coderhouse" }; //Esto es un objeto

//Funciones. Bloque de codigo que nos sirve para reutilizar

function saludar() {
  console.log("Saludar"); //Funcion declarada de la manera tradicional
}

const chau = () => {
  console.log("Chau");
}; //Funcion declarada de manera flecha

chau();
saludar();

//Ejemmplo

const sumar = (a, b) => {
  return a + b;
};
const restar = (a, b) => {
  return a - b;
};
const dividir = (a, b) => {
  return a / b;
};
const multiplicar = (a, b) => {
  return a * b;
};

console.log(sumar(3, 4));
console.log(restar(3, 4));
console.log(dividir(3, 4));
console.log(multiplicar(3, 4));

//Variables combinando cosas

const nombres = "Tomass";
const apellido = "Perez Diaz";

const valor1 = 8;
const valor2 = 9;

const resultado = `El resultado de la operacion del valor1 mas el valor2 es = ${
  valor1 + valor2
}`;

const nombreYapellido = nombres + " " + apellido;
console.log(resultado);
console.log(nombreYapellido);

//Clases en JS

class Contador {
  static CONTADOR_GLOBAL = 0;

  constructor(responsable) {
    this.responsable = responsable;
    this.contadorResponsable = 0;
  }

  getResponsable() {
    return this.responsable;
  }
  contar() {
    this.contadorResponsable++;
    Contador.CONTADOR_GLOBAL++;
  }
  getCuentaIndividual() {
    return this.contadorResponsable;
  }
  getCuentaGlobal() {
    return Contador.CONTADOR_GLOBAL;
  }
}

module.exports = Contador

