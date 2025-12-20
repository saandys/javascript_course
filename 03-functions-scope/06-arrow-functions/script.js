// function add(a, b) {
//     return a + b;
// }

// const add = function(a, b) {
//     return a + b;
// }

// Arrow functions

const add = (a, b) => {
    return a + b;
}

// Implicit return
const subtract = (a, b) => a - b;

const double = (a) => a * 2; 
// SI tenemos 1 solo parámetro no hace falta ponerle los paréntesis a (a)

// Returning an object
const creatObj = () => ({
    name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
    console.log(n);
})

// Arrow functions callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(7, 2));
console.log(double( 2));
console.log(creatObj());