// Challenge 1
const people = [
    { 
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice@gmail.com",
        phone: "123-456-7890",
        age: 25 
    },
    { 
        firstName: "Bob",
        lastName: "Smith",
        email: "bob@gmail.com",
        phone: "987-654-3210",
        age: 30 
    },
    { 
        firstName: "Charlie",
        lastName: "Brown",
        email: "charlie@gmail.com",
        phone: "124-555-5555",
        age: 35
    },
    { 
        firstName: "Lili",
        lastName: "Charles",
        email: "lili@gmail.com",
        phone: "444-555-5555",
        age: 12
    },
    { 
        firstName: "John",
        lastName: "Kasey",
        email: "john@gmail.com",
        phone: "555-333-5555",
        age: 23
    }
];

console.log(people);

const peopleUnder25 = people.filter((item) => item.age <= 25);
console.log(peopleUnder25);
const peopleReduced = peopleUnder25.map((item) => {
    return {
        name: `${item.firstName} ${item.lastName}`,
        email: `${item.email}`
    };
});
console.log(peopleReduced);


// Challenge 2
const numbers = [2, -20, 50, 20, -12, -9, 7];
const positiveNumbers = numbers.filter((num) => num > 0);
const sum = positiveNumbers.reduce((acc, sum) => acc + sum, 0)
console.log(sum);

// Challenge 3
const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(capitalizedWords);