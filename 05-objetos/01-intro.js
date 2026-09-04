// let email = 'perisinita@gmail.com';
// let name = 'Peri';
// //Objeto literal
// let direccion = {
//     calle: 'Wisteria Lane',
//     numero: 115,
// }

//Objeto dentro de objeto. Todas sus propiedades y valores pueden ser cambiados
let user = {
    email: 'perisinita@gmail.com',
    name: 'Peri',
    direccion: {
        calle: 'Wisteria Lane',
        numero: 115,
    },
    activo: true,
    recuperarClave: function(){ //función ANÓNIMA
        console.log('Recuperando clave...');
    }
}