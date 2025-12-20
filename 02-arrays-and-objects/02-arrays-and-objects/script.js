let x;

const arr = [34, 55 , 95, 20, 15];
arr.push(100);

// arr.pop(); // Elimina del final
// arr.unshift(99); // Añade al principio

// arr.shift(); // Elimina el primero
// arr.reverse();

x = arr.includes(20);

x = arr.indexOf(20); // SI ponemos un nº que no exista nos devolvera -1.

x = arr.slice(1, 4); // Devuelve del 1 al 3, al 4 no llega

// x = arr.splice(1, 4); // Nos devuelve los restantes
// x = arr.splice(3, 1);
x = arr.splice(1, 4).reverse().toString().charAt(0);
console.log(arr, x);