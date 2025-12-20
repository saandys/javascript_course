let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];
// fruits.push(berries);



const allFruits = [fruits, berries];

x = allFruits[1][0];

x = fruits.concat(berries);

// Spread Operator (...)
// Esto hace lo mismo que el concat (6) ['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'rasberry']
// Los 3 puntos, lo que hace es coger los elementos de dentro del array,  no el array en si
// Si le quitamos los puntos a fruits
// En vez de concatenar los 3 valores, concatenara, el array de fruits + los 3 valores internos del array de berries
// (4) [Array(3), 'strawberry', 'blueberry', 'rasberry']
x = [...fruits, ...berries];


// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
// Para aplanar esto:
// ) [1, 2, Array(2), 5, Array(2), 8]
x = arr.flat();
// [1, 2, 3, 4, 5, 6, 7, 8]

// Static methods on Array Object

// Saber si algo es un array
x = Array.isArray(fruits);

// Convertir en array desde string
x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;


// Convertir en array desde distintos objetos
x = Array.of(a, b, c); //  [1, 2, 3] 

console.log(x, arr);