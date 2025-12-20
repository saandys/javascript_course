const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

// Same with forEach

const doubledNumbers2 = [];
numbers.forEach((number) => {
    doubledNumbers2.push(number * 2);
});

console.log(doubledNumbers2);


const companies = [
    { name: 'Company One', category: 'Finance', start: 1991, end: 2014},
    { name: 'Company Two', category: 'auto', start: 1991, end: 2004},
    { name: 'Company Three', category: 'Retail', start: 1930, end: 2007},
    { name: 'Company Four', category: 'Auto', start: 1986, end: 2005},
    { name: 'Company Five', category: 'Finance', start: 1991, end: 1995},
];


// Create an array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category
    }
} );

console.log(companyInfo);

// Create a array of the length of each company in years
const companyYears = companies.map((company) => 
{
    return {
        name: company.name,
        length: company.end - company.start
    };
});

console.log(companyYears);

// Chain map methods
const squareAndDouble = numbers.map((number) => Math.sqrt(number)).map((sqrt) => sqrt * 2);

const squareAndDouble2 = numbers.map(function (number) 
    {
        return Math.sqrt(number);
    })
    .map(function (sqrt) {
        return sqrt * 2;
    })
    .map(function (sqrtDoubled) {
        return sqrtDoubled * 3;
    });
console.log(squareAndDouble2);

// Chaining different methods
const evenDouble = numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * 2);

console.log(evenDouble);