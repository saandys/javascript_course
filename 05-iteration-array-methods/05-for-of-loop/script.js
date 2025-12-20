// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];

for(let i = 0; i < items.length; i++) {
    console.log(items[i]);

}

const users = [
    { name: 'Brad'},
    { name: 'Kate'},
    { name: 'Steve'}
];

for(const item of items) {
    console.log(item);
}

// Loop over strings
const str = 'Hello World';

for(const letter of str) {
    console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for(const [key, value] of map) {
    console.log(key, value);
}