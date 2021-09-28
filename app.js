const container = document.querySelector('#container');

const display = document.querySelector('#display');
display.classList.toggle('display');
// display.textContent="1234";

const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const divisionBtn = document.querySelector('#divide');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const multiplyBtn = document.querySelector('#multiply');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const minusBtn = document.querySelector('#minus');
const zeroBtn = document.querySelector('#zero');
const addBtn = document.querySelector('#add');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');

let op1;
let op2;
let operator;
let result;
let flag = 0;

sevenBtn.addEventListener('click', function(){
    if ((display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/')){
        display.textContent = "7";

    }
    else {
        display.textContent += "7";
    }

    // if ((op1 == null)){
    //     op1 = display.textContent;
    //     console.log("op1", op1);
    // }
    // else{
    //     op2 = display.textContent;
    //     console.log("op2", op2);
    // }
    

});
eightBtn.addEventListener('click', function(){
    if ((display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/')){
        display.textContent = "8";
    }
    else {
        display.textContent += "8";
    }

});
nineBtn.addEventListener('click', function(){
    if ((display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/')){
        display.textContent = "9";
    }
    else {
        display.textContent += "9";
    }

});
divisionBtn.addEventListener('click', function(){
    op1 = display.textContent;
    display.textContent = "/";
    operator = "/";
});
fourBtn.addEventListener('click', function(){
    if ((display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/')){
        display.textContent = "4";
    }
    else {
        display.textContent += "4";
    }

});
fiveBtn.addEventListener('click', function(){
    if ((display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/')){
        display.textContent = "5";
    }
    else {
        display.textContent += "5";
    }

});
sixBtn.addEventListener('click', function(){
    if ((display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/')){
        display.textContent = "6";
    }
    else {
        display.textContent += "6";
    }

});
multiplyBtn.addEventListener('click', function(){
    op1 = display.textContent;
    display.textContent = "x";
    operator = "*";
});
oneBtn.addEventListener('click', function(){
    if ((display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/')){
        display.textContent = "1";
    }
    else {
        display.textContent += "1";
    }

});
twoBtn.addEventListener('click', function(){
    if ((display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/')){
        display.textContent = "2";
    }
    else {
        display.textContent += "2";
    }

});
threeBtn.addEventListener('click', function(){
    if ((display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/')){
        display.textContent = "3";
    }
    else {
        display.textContent += "3";
    }

});
minusBtn.addEventListener('click', function(){
    op1 = display.textContent;
    display.textContent = "-";
    operator = "-";
});
zeroBtn.addEventListener('click', function(){
    if ((display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/')){
        display.textContent = "0";
    }
    else {
        display.textContent += "0";
    }

});
addBtn.addEventListener('click', function(){
    // flag += 1;
    // if (!(flag % 2 == 0)){
    //     op1 = parseInt(display.textContent);
    // }
    // else {
    //     op2 = parseInt(display.textContent);
    // }
    op1 = parseInt(display.textContent);
    display.textContent = "+";
    operator = "+";


});
equalBtn.addEventListener('click', function(){
    
    //parse string
    //string the values and operator in a variable
    //pass the variables in operate()

    // let arr = display.textContent.split('+')
    // console.log("display arr:", arr);

    // op1 = arr[0];
    // operand = arr[1];
    // op2 = arr[2];

    op2 = parseInt(display.textContent);
    console.log("op2:", op2);


    

    result = operate(op1, op2, operator);

    console.log(op1);
    console.log(op2);
    console.log(operator);
    console.log(result);
    display.textContent = result;
});
clearBtn.addEventListener('click', function(){
    display.textContent = "";
    op1 = null;
    op2 = null;
    operator = "";

});



function add(a, b){
    return a + b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a,b){
    return a/b;
}

function operate (a,b,op){

    if (op === '+'){
        return add(a,b);
    }

    else if (op === '-'){
        return subtract(a,b);
    }
    else if (op === '*'){
        return multiply(a,b);
    }
    else if (op === '/'){
        return divide(a,b);
    }
    else {
        return console.log("invalid operator");
    }
}

//FIX can't string operators