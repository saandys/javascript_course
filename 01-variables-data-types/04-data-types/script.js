// String
const firstName = 'Sarah';


// Number

const age = 30;
const temp = 98.3; // Eveything is a number, even float, etc.

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

const output1 = aptNumber; // Is an object althought its null

// Undefined
let score;

// Symbol
const id = Symbol('id');

// BigInt
const n = 900254856512554524n;


// Reference Types
const numbers = [1,2,3,4]; // Object
const person = {
    name:'Brand'
}; // Object
 
function sayHello(){
    console.log('Hello');
}
const output = sayHello;

console.log(output, typeof output);