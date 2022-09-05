//Acá estamos declarando y asignando el valor
var lastname = 'David';
// Acá reasignamos el valor de la variable lastName
lastname = 'Oscar';
console.log(lastname);


let fruit = 'Apple';
fruit = 'kiwi';
console.log(fruit);


const animal = 'Dog';
animal = 'cat'; //no se puede cambiar el valor con const
console.log(animal);


const fruits = () => {
    if(true){
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2); //error: variable let funciona en block por lo cual no esta definida fuera de las llaves
    console.log(fruit3);
}

fruits();

// Let permite la reasignación de valores de una variable, con la particularidad de que solo tiene un alcance de bloque, mientras que var tiene un alcance global.
// Sin embargo con const el valor no puede ser reasignado y también tiene alcance de bloque.
// Todo lo que sea un bloque es lo que está entre llaves {}