const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

// Short version
const evenNumbersShort = numbers.filter((number) => number % 2 === 0);

// Same with forEach
let evenNumberEach = [];
numbers.forEach(number => {
    if(number % 2) {
        evenNumberEach.push(number);
    }
})
console.log(evenNumbers);
console.log(evenNumbersShort);
console.log(evenNumberEach);

const companues = [
    { name: 'Company One', category: 'Finance', start: 1991, end: 2014},
    { name: 'Company Two', category: 'auto', start: 1991, end: 2004},
    { name: 'Company Three', category: 'Retail', start: 1930, end: 2007},
    { name: 'Company Four', category: 'Auto', start: 1986, end: 2005},
    { name: 'Company Five', category: 'Finance', start: 1991, end: 1995},
];

const retailCompanies = companues.filter(company =>
    company.category === 'Retail'
)

console.log(retailCompanies);

// Get compaies that started in or after 1980 and ended in or before

const earlycompanies = companues.filter((company) => company.start >= 1981 && company.end <= 2005);
console.log(earlycompanies);

// Get companues that lasted 10 years or more
const longCompanies = companues.filter((company) => company.end - company.start >= 10);

console.log(longCompanies);