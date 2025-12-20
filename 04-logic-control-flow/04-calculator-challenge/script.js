

function calculator(num1, num2, op){
    let res = 0;

    switch(op){
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            res = num1 / num2;
            break;
        default:
            res = 'This operator doesn\'t exist.';
    }
    return res;
}

console.log(calculator(5,2,'-'));