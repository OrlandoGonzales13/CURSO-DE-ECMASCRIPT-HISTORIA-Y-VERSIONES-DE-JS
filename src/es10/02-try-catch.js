//El parámetro opcional de catch permite omitir el error si es necesario.
try {
    hello ();
} catch (error) {
    console.log(error);
}

try {
    onotherFn();
} catch {
    console.log("esto es un error")
}

//Aunque siempre es recomendable manejar el error como parámetro, ya que tiene más información del problema.