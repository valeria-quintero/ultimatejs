const user = {id: 1};

user.name = 'Peri';
user.guardar = function(){
    console.log('Guardando..', user.name);
}

user.guardar();

delete user.name;
console.log(user);

//Para que no se pueda modificar el objeto ni sus propiedades
 //Propiedades y valores fijos
const user1 = Object.freeze({ id: 1 });

user1.name = 'Peri';
user1.id = 2;
console.log(user1);

//Para poder alterar los valores solamente de las propiedades 
//que ya posee el objeto
//Propiedades fijas, valores dinámicos
const user2 = Object.seal({ id: 1 });

user2.name = 'Peri';
user2.id = 2;
console.log(user2);