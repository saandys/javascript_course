// window es el objeto más alto
// por eso podemos poner tanto window.alert como alert solo

const x = 100;

console.log(x, ' in global');

function run(){
    console.log(window.innerWidth);
    console.log(x, ' in function');
}

run();

if(true) {
    console.log(x, ' in block');
}

function add() {
    const y = 50;
    console.log(y);
}