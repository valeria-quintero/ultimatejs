// Las funciones también son objetos, objetos de primera clase
function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name); // Devuelve el nombre de la f
console.log(Usuario.length); // Indica la cantidad de argumentos que recibe una f

//* no entendí
const U = Usuario;
let user = new U("Valeria");

console.log(user);

// Pasar función como argumento
//* tampoco entendí
function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Peri');
console.log(user1);

// Retornar una función dentro de otra
function returned() {
    return function() {
        console.log('Hola');
    }
};

let saludo = returned();
saludo();