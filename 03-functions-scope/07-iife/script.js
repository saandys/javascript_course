// const user = 'John';
// console.log(user);

(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log("Hello from the IIFE");
    hello();
}) ();
// hello();

(function (name) {
    console.log('Hello ' + name);
})('Shawn');