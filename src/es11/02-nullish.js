//El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para asignarle un valor.
//si es nulo se le puede dar un valor con ?? 


const anotherNumber = null;
const validate = anotherNumber ?? 5;
console.log(validate);