

console.log(aaddDollarSign(100)); // Funciona porque las funciones se ejecutan antes que todo lo demás
// Sin embargo si pongo 
// console.log(addPlusSign(200));
// dará error


// Function declaration
function  aaddDollarSign(value) {
    return '$' + value;
}

console.log(aaddDollarSign(100));

// Function Expression
const addPlusSign = function (value) {
    return '+' + value;
};

console.log(addPlusSign(200));