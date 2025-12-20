// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN


// Truthy Values
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false'
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const email = 'test@test.com';

if(email) {
    console.log('You passed in an email');
}

console.log(Boolean(email));

const x = {};

if(x){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 0;

// if(children !== undefined) {
if(!isNaN(children)){
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

// Checking for empty arrays
// const posts = ['Post One', 'Post Two'];
const posts = [];

if(posts.length > 0) {
    console.log('Lists posts');
} else {
    console.log('No Posts To List');
}

// Checking for empty objects
const user = {
    name: 'Brad'
};
console.log(user);
console.log(Object.keys(user));

if (Object.keys(user).length > 0) {
    console.log('List user');
} else {
    console.log('No user');
}

// Loose Equality (==)
console.log(false == 0);
console.log('' === 0); // === Check the type too
console.log(null === undefined);