const container = document.querySelector('#calculatorContainer');

const display = document.querySelector('#display');
display.classList.toggle('display');


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
const negativeBtn = document.querySelector('#negative');

let op1;
let op2;
let operator;
let result;
let flag = false;

sevenBtn.addEventListener('click', function(){
    if (!(op1 == null) && (display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/') || flag == true){
        display.textContent = "7";
        op2 = parseInt(display.textContent);
        flag = false;
    }
    else {
        display.textContent = "";
        display.textContent += "7";
        op2 = parseInt(display.textContent);
    }
    

});
eightBtn.addEventListener('click', function(){
    if (!(op1 == null) && (display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/') || flag == true){
        display.textContent = "8";
        op2 = parseInt(display.textContent);
        flag = false;
    }
    else {
        display.textContent = "";
        display.textContent += "8";
        op2 = parseInt(display.textContent);
    }

});
nineBtn.addEventListener('click', function(){
    if (!(op1 == null) && (display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/') || flag == true){
        display.textContent = "9";
        op2 = parseInt(display.textContent);
        flag = false;
    }
    else {
        display.textContent = "";
        display.textContent += "9";
        op2 = parseInt(display.textContent);
    }

});
divisionBtn.addEventListener('click', function(){
    
    if (!(op1 == null) && !(op2 == null)){
        result = operate(op1, op2, operator);
        result = Math.round(result * 100) / 100;
        op1 = result;
        op2 = null;
        flag = true;
        display.textContent = result;
        operator = "/";
    }
    else{
        op1 = parseInt(display.textContent);
        display.textContent = "/";
        operator = display.textContent;

    }
});
fourBtn.addEventListener('click', function(){
    if (!(op1 == null) && (display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/') || flag == true){
        display.textContent = "4";
        op2 = parseInt(display.textContent);
        flag = false;
    }
    else {
        display.textContent = "";
        display.textContent += "4";
        op2 = parseInt(display.textContent);
    }

});
fiveBtn.addEventListener('click', function(){
    if (!(op1 == null) && (display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/') || flag == true){
        display.textContent = "5";
        op2 = parseInt(display.textContent);
        flag = false;
    }
    else {
        display.textContent = "";
        display.textContent += "5";
        op2 = parseInt(display.textContent);
    }

});
sixBtn.addEventListener('click', function(){
    if (!(op1 == null) && (display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/') || flag == true){
        display.textContent = "6";
        op2 = parseInt(display.textContent);
        flag = false;
    }
    else {
        display.textContent = "";
        display.textContent += "6";
        op2 = parseInt(display.textContent);
    }

});
multiplyBtn.addEventListener('click', function(){
    
    if (!(op1 == null) && !(op2 == null)){
        result = operate(op1, op2, operator);
        result = Math.round(result * 100) / 100;
        op1 = result;
        op2 = null;
        flag = true;
        display.textContent = result;
        operator = "*";
    }
    else{
        op1 = parseInt(display.textContent);
        display.textContent = "*";
        operator = display.textContent;

    }
});
oneBtn.addEventListener('click', function(){
    if (!(op1 == null) && (display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/') || flag == true){
        display.textContent = "1";
        op2 = parseInt(display.textContent);
        flag = false;
    }
    else {
        display.textContent = "";
        display.textContent += "1";
        op2 = parseInt(display.textContent);
    }

});
twoBtn.addEventListener('click', function(){
    if (!(op1 == null) && (display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/') || flag == true){
        display.textContent = "2";
        op2 = parseInt(display.textContent);
        flag = false;
    }
    else {
        display.textContent = "";
        display.textContent += "2";
        op2 = parseInt(display.textContent);
    }

});
threeBtn.addEventListener('click', function(){
    if (!(op1 == null) && (display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/') || flag == true){
        display.textContent = "3";
        op2 = parseInt(display.textContent);
        flag = false;
    }
    else {
        display.textContent = "";
        display.textContent += "3";
        op2 = parseInt(display.textContent);
    }

});
minusBtn.addEventListener('click', function(){
    
    if (!(op1 == null) && !(op2 == null)){
        result = operate(op1, op2, operator);
        result = Math.round(result * 100) / 100;
        op1 = result;
        op2 = null;
        flag = true;
        display.textContent = result;
        operator = "-";
    }
    else{
        op1 = parseInt(display.textContent);
        display.textContent = "-";
        operator = display.textContent;

    }
});
zeroBtn.addEventListener('click', function(){
    if (!(op1 == null) && (display.textContent == '+') || (display.textContent == '-') ||
    (display.textContent == 'x') || (display.textContent == '/') || flag == true){
        display.textContent = "0";
        op2 = parseInt(display.textContent);
        flag = false;
    }
    else {
        display.textContent = "";
        display.textContent += "0";
        op2 = parseInt(display.textContent);
    }

});
addBtn.addEventListener('click', function(){
    
    
    if (!(op1 == null) && !(op2 == null)){
        result = operate(op1, op2, operator);
        result = Math.round(result * 100) / 100;
        op1 = result;
        op2 = null;
        flag = true;
        display.textContent = result;
        operator = "+";
    }
    else{
        op1 = parseInt(display.textContent);
        display.textContent = "+";
        operator = display.textContent;

    }

    


});
equalBtn.addEventListener('click', function(){

    if (display.textContent != ""){
        if (!(op2 == 0 && operator == "/")){
            result = operate(op1, op2, operator);
            result = Math.round(result * 100) / 100;
            display.textContent = result;
        }
        else {
            display.textContent = "nice try";
        }
    }
    else{

    }
});
clearBtn.addEventListener('click', function(){
    display.textContent = "";
    op1 = null;
    op2 = null;
    operator = "";

});

negativeBtn.addEventListener('click', function(){

    let newVal;

    newVal = negative(display.textContent);

    display.textContent = newVal;
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
function negative(result){
    return -(result);
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
