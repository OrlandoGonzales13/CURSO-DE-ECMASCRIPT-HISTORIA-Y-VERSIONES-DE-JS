// flat
//El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.
const array = [1,1,2,3,4, [1,3,5,6,[1,2,4]]];
console.log(array.flat(3));


const array2 = [1,2,[3,4],5,6]
const result = array2.flat() 
console.log(result)// [1,2,3,4,5,6]

const array3 = [1, 2, [3, 4, [5, 6]]];
const result2 = array3.flat() 
result2// [1, 2, 3, 4, [5, 6]]

const array4 = [1, 2, [3, 4, [5, 6]]]
const result3 = array4.flat(2) 
result3// [1, 2, 3, 4, 5, 6]

const array5 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array5.flat(Infinity) 
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// flatmap
//El método flatMap es una combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), 
//y después los aplana en una sola profundidad (como si fuera flat).
const array6 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v *2]));


const strings = ["Nunca pares", "de Aprender"]
strings.map(string => string.split(" ")) 
// [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ] 
strings.flatMap(string => string.split(" ")) 
// [ 'Nunca', 'pares', 'de', 'Aprender' ]

const numbers = [1,2, 3, 4]
numbers.map(number => [number * 2]) 
// [[2], [4], [6], [8]]
numbers.flatMap(number => [number *2]) 
// [2, 4, 6, 8]

// Cuidado, primero hace el map y luego el flat
const numbers2 = [1,[2,3], 4, 5]
numbers2.flatMap(number => [number *2]) 
// [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = No a Number