
let x;

const todo = {};

todo.id = 1;

x = todo;

console.log(x);

const tdo = new Object();
console.log(tdo);
tdo.id = 2;
tdo.name = 'Buy milk';
tdo.completed = false;
console.log(tdo);

const person = {
    address: {
        coords: {
            lat: 42.767,
            lng: -71.3243
        }
    }
}

x = person.address.coords.lat;

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

const obj3 = {obj1, obj2};

// Este es menos moderno que el spread ...obj
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    {id:1, name: 'Buy Milk'},
    {id:2, name: 'Pickup kids from school'},
    {id:3, name: 'Take out trash'},
];

x = todos[0].name;

x = Object.keys(tdo);

x = Object.values(tdo);

x = Object.entries(tdo);

x = tdo.hasOwnProperty('name');

x = tdo.hasOwnProperty('age');

console.log(x);