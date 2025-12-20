// this is a single line of code

/*
    Multi-line comment
    Otro tipo de comentario
*/

// Pulsar una línea y Ctrl + Mayus + / se comenta
// console.log(100);
console.log('Hello World');
console.log(20, 'Hello', true);
const x = 100;
console.log(x);

// ce
console.error();
//clg
console.log('Hello');

console.warn('Alert');

//clt
console.table({name: 'Brad', email:'brad@gmail.com'});

// con Alt + Flecha arriba o abajo
// podemos mover una línea 

// Y si le agregamos Shift se copiara
console.group('simple');
console.log(x);
console.warn('aa');
console.groupEnd();

const styles = 'padding: 10px; backgroud-color:white;color:green';
console.log('%cHello world', styles);