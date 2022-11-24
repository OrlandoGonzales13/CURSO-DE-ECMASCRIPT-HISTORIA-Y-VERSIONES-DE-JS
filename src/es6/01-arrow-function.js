//funcion normal
function square(num){
    return num * num;
}

//arrow function 
//Es una alternativa compacta para declarar una function.
const square = (num) => {
    return num*num;
}

//return implicito, si son mas de dos lineas si se necesita return y {}
const square = num => num*num;