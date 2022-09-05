//----DECLARAR UNA CLASE---
class User {};

//genera una instancia
//const newUser = new User ();

class user {
    // metodos
    greeting() {
        return "hello";
    }
};  

const orlando = new user();
console.log(orlando.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());


//----constructor----
class user{
    //constructor  
    funcionConstructora(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const adriano = new user();

// this
class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user("Ana");
console.log(ana.greeting());

// setters getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user ("david", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);