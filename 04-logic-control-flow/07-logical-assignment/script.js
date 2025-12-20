
// && - Will return the first falsy value or the last vlue

// || - Will return the first truthy value or the last

// ?? - Return the right side operand when the left is null or undefined


// ||= assigns the right side value only if the left is a falsy value

let a = false;

if(!a) {
    a = 10;
}

a = a || 10;

console.log(a);

a = 20;

a ||= 10;

console.log(a);

// &&= assigns the right side value only if the left is a truthy value.

let b = 10;

if(b){
    b = 20;
}

b = b && 20;

b &&= 20;

console.log(b);
// ??= assigns the right side value if the left is null or undefined

let c = false;

if(c === null || c === undefined) {

    c = 20;

}

c = c ?? 20;

c ??= 20;

console.log(c);

let d = false ?? true;
let e = true ?? false;

console.log(d, e);