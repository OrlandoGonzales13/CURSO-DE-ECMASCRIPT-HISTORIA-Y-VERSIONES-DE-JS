//El nuevo dato primitivo bigint permite manejar números enteros muy grandes. 
//Existen dos formas de crear un bigint: el número entero seguido de n o mediante la función BigInt

const aBigNumber = 8907245920742093847n;
const anotherBigNumber = BigInt(8907245920742093847);
console.log(aBigNumber);
console.log(anotherBigNumber);