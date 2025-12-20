const numbers = [12, 45, 33, 29, 39];

// Array constructor

const fruits = new Array('apple', 'grape', 'orange');
const mixed = [12, 'Hello', true, null];

let x;
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favourite fruit is ${fruits[2]}`

x = numbers.length;

fruits[2] = 'pear';
fruits[3] = 'a'; // If you know the length

// If not
fruits[fruits.length] = 'blueberry'

// fruits.length = 2;

console.log(fruits, x);