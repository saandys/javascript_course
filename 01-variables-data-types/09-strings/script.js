let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age +
    ' years old';

// Template literals
x = `Hello, my name is ${name}`;

// String properties and Methods
const s = new String('Hello World');


// Las cadenas son primitivas pero podemos utilizar metodos en ella

x = typeof s; // Object

x = s.length;

// Access value
x = s[0];

x = s.__proto__; // Seeing functions

x = s.toUpperCase();
x = s.toLocaleLowerCase();

x = s.charAt(0);

x = s.substring(0,4);

x = s.trim(); // Quita los espacios en blanco del principio

x = s.replace('World', 'John');

x = s.includes('He');

x = s.valueOf();
x = s.split(''); // Divide in an array

console.log(x);