//--------------enahced OBJECT LITERALS----------

function newUser(user, age, country, uID){
    return{
        user: user,
        age,
        country,
        id: uID
    }
}

console.log(newUser("gndx", 34, "MX",1));


//ejemplo comentario platzi

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.barking = function() { return `${this.name} says WOOF`}
}
const Kira = new Dog("Kira", 3)
console.log(Kira.barking());