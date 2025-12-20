const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age
};

console.log(person);

// Destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name:'John'
    }
}

// const id = todo.id;

// así user o se puede utilizar, solo name
const {id : todoId, title, user: {name}} = todo;

// variable :  nombreQueVoyAUtilizar
console.log(name, todoId);


// Destructure arrays
const numbers = [23, 67, 22, 49];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);