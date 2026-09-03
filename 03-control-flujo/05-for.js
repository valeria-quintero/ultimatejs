// for normal
for (let i = 2; i < 10; i++) {
    console.log('Numero ', i);
}

// forof - para arrays
let animales = ['perro', 'gato', 'murcielago'];

for (let animal of animales) {
    console.log(animal);
}

// forin - para objetos
let user = {
    id: 1,
    name: 'Gatito',
    age: 5,
};

for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
}