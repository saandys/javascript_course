// Ways to declare a variable

// var, let, const

let firstName = 'John';
let lastName = 'Doe';

// console.log(firstName, lastName, age);
console.log(firstName, lastName, age2);
// Con let la inicializamos y después la utilizamos
// No podemos utilizar age antes de inicializarla
// Porque nos mostrará un error
let age = 30;

console.log(age);
//Sin embargo, con var si que podemos utilizarla antes
// Pero aunque no salga un error, saldrá como indefinido

var age2 = 40;

// Naming conventions
// Only letters, numbers, underscores and dollar signs
// Can't start with a number

// Multi-word Formatting
// firstName = camelCase
// first_name = unserscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning variables
age = 31;
console.log(age);

let score;

score = 1;
console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

const x = 100;

// x = 200; No se puede asignar otra vez a un const

const arr = [1,2,3,4];

// arr = [1,2,3,4,5]; -> Esto nos da un error

// Pero si podemos utilizar.push
arr.push(5);

// Tambien podemos modificar los valores internos
// porque no estmos modificando la variable en sí, sino su contenido

const person = {
    name : 'Brad'
};

person.name = 'John';
person.email = 'prueba@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10, e = 20, f = 30;