// ---- String padding
//El método padStart completa un string con otro string en el inicio hasta tener un total de caracteres especificado.
//El método padEnd completa un string con otro string en el final hasta tener un total de caracteres especificado.

const string = "Hola";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(7, "hi"));