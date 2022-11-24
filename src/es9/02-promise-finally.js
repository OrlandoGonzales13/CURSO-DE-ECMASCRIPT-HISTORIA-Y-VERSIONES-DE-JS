//El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.

const anotherFunction = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey!!');
        }
        else{
            reject('Whoooops!');
        }
    })
}
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log('catch...' + err))
    .finally(() => console.log('Finally'));