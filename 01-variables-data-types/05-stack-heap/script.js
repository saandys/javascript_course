// Values are stored on the stack
const name = 'John';
const age = 30;

// Reference valies are stores on the heap
const person = {
    name: 'Brand',
    age:40,
};

let newName = name;
newName = 'Johnathan';

let newPerson = person;

newPerson.name = 'Bradley';

//  newPerson no copia el contenido de person
// si no que apunta al mismo contenido que person
// si modificamos newPerson, tambien lo hará person
// sinm embarbo esto no pasa con strings como en name y newName

console.log(person, newPerson);
console.log(name, newName);