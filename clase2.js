//ES7 ->
//Exponencial (**)
//Includes -> arrays

const valor1 = 5;

//console.log(5 * 5 * 5)
console.log(5 ** 3); //Es lo mismo que esta arriba

const nombres = ["Gabriel", "Isaac", "Joaquin"];

console.log(nombres.includes("isaac"));
console.log(nombres.includes("Isaac"));

//ES8
//Async - await
//Object.entries(), object.values(), object.keys

const estudiantes1 = {
  nombre: "Joaquin",
  apellido: "Capanegra",
};
console.log(Object.entries(estudiantes1));
console.log(Object.values(estudiantes1));
console.log(Object.keys(estudiantes1));

//ES9

const estudiantes2 = {
  nombre: "Joaquin",
  apellido: "Capanegra",
};

const direccionEstudiante1 = {
  ciudad: "Buenos Aires",
  barrio: "Palermo",
  altura: 3,
};

//Spread
const { apellido } = estudiantes1;
console.log(apellido);

const estudiantesUnificado = { ...estudiantes1, ...direccionEstudiante1 };
console.log(estudiantesUnificado);

//Operador rest -> restante o resto
const { altura, barrio, ...rest } = estudiantesUnificado;
console.log(rest);

//ES10
//.trim() -> valores de tipo string
//.flat() -> arrays
//Dynamic import

const cadena = "      Hola mundo";
const eliminarEspacios = cadena.trim(); //Elimina los espacios del incio y del fin
console.log({ eliminarEspacios });

const numeros = [300, 400, 5000, [3, 4, 5], 1200, 500];
console.log(numeros);
console.log(numeros.flat());

//ES11
//Nullish -> colocar un valor por defecto

let estaLloviendo;
const llueve = estaLloviendo || "La variable no tiene ningun valor";

console.log({ llueve });

//Map() Lo que hace es que reccorre el array y copia sus valores

const numeross = [1, 2, 3, 4, 5];
const numeros3 = [2, 4, 6, 8, 10];

//Se puede hacer asi tambien
const numerosDobles = numeross.map((values) => {
  return values * 2;
});

console.log(numerosDobles);

//Push() Agrega un valor al final del array

numeross.push(10);
console.log(numeross);

//Find() Busca un valor que esta dentro del array y lo imprime
const buscar = numeross.find((e) => {
  if (e === 3) return e;
});

console.log(buscar);

//Reduce()
const total = numeross.reduce((acumulador, value) => acumulador + value);

console.log(total);
