// Cómo utilizar el método at
// La utilidad más importante de este método es para manejar índices negativos. Algo que no se puede con la notación de corchetes.

const array = ["one", "two", "three", "four", "five", "six"];

console.log(array[array.length - 1]);
console.log(array.at(-1));