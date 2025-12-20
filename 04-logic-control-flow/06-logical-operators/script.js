console.log(10 > 2 && 30 > 15 && 40 > 30); // true All has to be true

console.log(10 > 20 || 30 > 15); // true

// && - Will return the first falsy value or the last vlue
let a;

a = 10 && 20;

a = 10 && 30 && 20;

console.log(a);

a = 10 && '' && 30;

console.log(a);

const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// || - Will return the first truthy value or the last

let b;

b = 10 || 20;

console.log(b);

// ?? - Return the right side operand when the left is null or undefined

let c;

c = 10 ?? 20;
c = undefined ?? 20;

console.log(c);

let d = true || false;
let e = false || true;
let f = false || false;
let g = undefined || false;

console.log(d, e, f, g);


