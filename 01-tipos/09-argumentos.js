//Parámetro - valores que referencian dentro de la función
function suma(a, b) {
    //Para acceder a todos los valores de los parámetros de una función
    //console.log(arguments);
    return a + b;
}
 //Argumento - valores que se pasan a las funciones al ser llamadas
let resultado = suma(5, 6, 5, 7, 5);

console.log(resultado);
console.log(typeof suma);
