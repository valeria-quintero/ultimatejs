// Con funciones factory se usa camelCase

// Para evitar se repetitivos 
function crearUsuario (name, email) {
    return {
        email, //es lo mismo que tener email: email,
        name,
        activo: true,
        recuperarClave: function(){ //función ANÓNIMA
            console.log('Recuperando clave...');
        }
    }
};

let user1 = crearUsuario('Peri', 'perisinita@gmail.com');
let user2 = crearUsuario('Kanika', 'kanika@gmail.com');

console.log(user1, user2);