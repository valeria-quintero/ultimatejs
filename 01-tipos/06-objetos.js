let nombre = "Akaza";
let anime = "Demon Slayer";
let edad = 18;

//Objeto literal
let personaje = {
    //par llave-valor = PROPIEDAD
    nombre: "Akaza",
    anime: "Demon Slayer",
    edad: 18,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

//Acceder a una propiedad
//Si conoces el nombre...
personaje.edad = 16;

//Si no conoces el nombre...
let llave='edad';
personaje['llave'] = 17;

//Eliminar propiedad
delete personaje.anime;

console.log(personaje);