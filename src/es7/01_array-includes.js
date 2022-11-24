let numbers = [1, 3, 4, 6, 7, 8];
console.log(numbers.includes(9))

const list = ["oscar", "David", "Ana"]
console.log(list.includes("Oscar")) //mayusculas y minisculas no son iguales. 
//si agregamos to.lowercase podemos manejarlo de una manera mejor


//revisa
let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(
	familyEmoji.includes("👨"),
	familyEmoji.includes("👩"),
	familyEmoji.includes("👦")
);