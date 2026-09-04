// Formas de crear objetos
let obj = {};
let obj1 = new Object();

/**
 * También se pueden crear:
 * 
 * new Array();
 * new String ();
 * new Number();
 * new Boolean();
 */

function Usuario() {
    this.name = "Melissa";
}
let user = new Usuario();
console.log(user.constructor);