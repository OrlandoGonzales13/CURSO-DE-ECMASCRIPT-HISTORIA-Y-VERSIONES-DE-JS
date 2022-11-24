const user = { username: "orlando", age: 26, coutry: "PE" };
const { username, ...values } = user;
console.log(username);
console.log(values);

//Las propiedades de propagación consisten en expandir las propiedades de un objeto utilizando el spread operator. 
//Sirve para crear nuevos objetos a partir de otros.

const objeto = {
    nombre: "Orlando",
    age: 26,
}

const usuario = {
    ...objeto,
    plataforma: "Platzi"
}

console.log(usuario)
