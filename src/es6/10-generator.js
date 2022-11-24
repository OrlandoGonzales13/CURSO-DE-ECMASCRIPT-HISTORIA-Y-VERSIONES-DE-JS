function* iterate(array)  {
    for (let value of array) {
        yield value; //palabra reservada para devolver los valores
    }
}

const it = iterate(["Oscar", "Alexa", "David", "Gerlis", "Orlando"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); 
console.log(it.next().value);
console.log(it.next().value); 
console.log(it.next().value); 