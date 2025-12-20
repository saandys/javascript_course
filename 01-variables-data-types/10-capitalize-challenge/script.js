const myString = 'developer';

// My solution
let x = myString.split('');

console.log(x.__proto__);
let upper = x[0].toUpperCase();
console.log(upper + myString.substring(1));

// Other solution
// 1. x[0] -> x.chatAt(0)
// 2. upper + myString.substring(1) -> `${x.chatAt(0).toUpperCase()}${x.slice(1)}`