// Con funciones constructoras se usa UpperCamelCase

// {id: 1, recuperarClave: function(){} }
function Usuario() {
    this.id = 1;
    this.recuperarClave = function() { // MÉTODO
        console.log('Recuperando clave...');
    }
}

//Un método es una función que fue asignada a una propiedad de un objeto

let usuario = new Usuario();

console.log(usuario);