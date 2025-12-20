
// Challenge 1

const getCelsious = (temperature) => ((temperature - 32) * 5 / 9);

console.log(`The temperature is ${getCelsious(32)}\xB0C`);


// Challenge 2

const minMax = (arr) => ({min: Math.min(...arr), max:Math.max(...arr)});

console.log(minMax([2, 3, 5, 6, 3, 2]));


// Challenge 3

(function(length, width){
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}`);
})(10, 5);