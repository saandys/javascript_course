let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Bos'
    },
    hobbies: ['music', 'sports']
};

x = person.name;
x = person['age'];
x = person.address.street;
x = person.hobbies[0];

person.name = 'Jane Cambia';
x = person;
x.name = 'Khe';

delete person.age;

person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, my name is ${person.name}`);
}
console.log(person.greet());