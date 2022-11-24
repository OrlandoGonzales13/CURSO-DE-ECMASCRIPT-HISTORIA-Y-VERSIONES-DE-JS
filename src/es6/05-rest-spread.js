//arrays destructuring 

let fruits = ['apple', 'banana','pera'];
let [a,b] = fruits;
console.log(a,b); // =>imprime apple y banana
console.log(a, fruits[1]);

//COMENTARIO PLATZI
// arrays destructuring
let perfumes = ['edt', 'edp', 'aqua de gio', 'pulso'];
let [,,gio] = perfumes;

console.log(gio); /*arroja "gio"*/

//OBJECT DESTRUCTURING 

let user = { username: 'Oscar', age: 34, nickname: 'xuxu'};
let {username , age} = user;
console.log(username, user.age); //podemo poner tambien user.age o age

//---------------- SPREAD OPERATOR -------------------------

let person = {name:'Orlando', age:'28'};
let country = 'PE';

let data = {id:1, ...person, country};
console.log(data);



//REST

function sum (num, ...values){ //...seguiremos pasando parametros 
    console.log(values); //values sera los valores que asignaremos
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3,6);


//revisa en la consola del navegador
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)