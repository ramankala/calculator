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

sevenBtn.addEventListener('click', function(){
    display.textContent = "7";
    if (op1 == null){
        op1 = 7;
    }
    else{
        op2 = 7;
    }
});
eightBtn.addEventListener('click', function(){
    display.textContent = "8";
    if (op1 == null){
        op1 = 8;
    }
    else{
        op2 = 8;
    }
});
nineBtn.addEventListener('click', function(){
    display.textContent = "9";
    if (op1 == null){
        op1 = 9;
    }
    else{
        op2 = 9;
    }
});
divisionBtn.addEventListener('click', function(){
    display.textContent = "/";
    operand = "/";
});
fourBtn.addEventListener('click', function(){
    display.textContent = "4";
    if (op1 == null){
        op1 = 4;
    }
    else{
        op2 = 4;
    }
});
fiveBtn.addEventListener('click', function(){
    display.textContent = "5";
    if (op1 == null){
        op1 = 5;
    }
    else{
        op2 = 5;
    }
});
sixBtn.addEventListener('click', function(){
    display.textContent = "6";
    if (op1 == null){
        op1 = 6;
    }
    else{
        op2 = 6;
    }
});
multiplyBtn.addEventListener('click', function(){
    display.textContent = "x";
    operand = "*";
});
oneBtn.addEventListener('click', function(){
    display.textContent = "1";
    if (op1 == null){
        op1 = 1;
    }
    else{
        op2 = 1;
    }
});
twoBtn.addEventListener('click', function(){
    display.textContent = "2";
    if (op1 == null){
        op1 = 2;
    }
    else{
        op2 = 2;
    }
});
threeBtn.addEventListener('click', function(){
    display.textContent = "3";
    if (op1 == null){
        op1 = 3;
    }
    else{
        op2 = 3;
    }
});
minusBtn.addEventListener('click', function(){
    display.textContent = "-";
    operand = "-";
});
zeroBtn.addEventListener('click', function(){
    display.textContent = "0";
    if (op1 == null){
        op1 = 0;
    }
    else{
        op2 = 0;
    }
});
addBtn.addEventListener('click', function(){
    display.textContent = "+";
    operand = "+";
});
equalBtn.addEventListener('click', function(){
    
    //parse string
    //string the values and operator in a variable
    //pass the variables in operate()

    result = operate(op1, op2, operand);

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

//FIX can't do double or triple digit numbers