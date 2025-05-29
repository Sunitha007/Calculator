//calculator       4       textbox

var screendisplay1 = document.getElementById("input1");
var operator = document.getElementById("input2");
var screendisplay2 = document.getElementById("input3");
var screendisplay3 = document.getElementById("result");
function addNumber(num) {
    if (ariOperator) {
        screendisplay2.value += num
    }
    else {
        screendisplay1.value += num
    }
}
var ariOperator = "";
function setOperator(ariMat) {
    ariOperator = ariMat;
    set();
}
function set() {
    operator.value = ariOperator;
}
function equal() {
    if (operator.value === '+') {
        screendisplay3.value = parseInt(screendisplay1.value) + parseInt(screendisplay2.value);
        console.log(screendisplay3.value)
    }
    else if (operator.value === '-') {
        screendisplay3.value = screendisplay1.value - screendisplay2.value;
        console.log(screendisplay3.value)
    }
    else if (operator.value === '×') {
        screendisplay3.value = screendisplay1.value * screendisplay2.value;
        console.log(screendisplay3.value)
    }
    else {
        screendisplay3.value = screendisplay1.value / screendisplay2.value;
        console.log(screendisplay3.value)
    }
}
    

//calculator       3       textbox


/*
var screendisplay1 = document.getElementById("input1");
var operator = document.getElementById("input2");
var result = document.getElementById("result");
var current = ""
var num1;
var num2;

function addNumber(num) {
    current += num;
    screendisplay1.value =current;
}

function setOperator(ariMat) {
    operator.value = ariMat;
    num1 = current;
    console.log(num1);
    current = "";
}

function equal() {
    num2 = current;
    if (operator.value === '+') {
        result.value = parseInt(num1) + parseInt(num2);
        console.log(result.value)
    }
    else if (operator.value === '-') {
        result.value = num1 - num2;
        console.log(result.value)
    }
    else if (operator.value === '×') {
        result.value = num1 * num2;
        console.log(result.value)
    }
    else {
        result.value = num1 / num2;
        console.log(result.value)
    }
}

*/
//calculator       2       textbox
/*
var screendisplay1 = document.getElementById("input1");
var result = document.getElementById("result");
var current = "";
var operator = "";
var num1;
var num2;
function addNumber(num) {
    current += num;
    screendisplay1.value = current;
}
function setOperator(ariMat) {
    operator += ariMat;
    screendisplay1.value = operator;
    console.log(operator);
    num1 = current;
    console.log(num1);
    current = "";
}
function equal() {
    num2 = current;
    if (operator === '+') {
        result.value = parseInt(num1) + parseInt(num2);
    }
    else if (operator === '-') {
        result.value = num1 - num2;
    }
    else if (operator === '×') {
        result.value = num1 * num2;
    }
    else {
        result.value = num1 / num2;
    }
}
*/

//calculator       1       textbox hide element

/*
var screendisplay1 = document.getElementById("input1");
var current = "";
var operator = "";
var num1;
var num2;
var sum;
function addNumber(num) {
    current += num;
    screendisplay1.value = current;
}
function setOperator(ariMat) {
    operator += ariMat;
    screendisplay1.value = operator;
    console.log(operator);
    num1 = current;
    console.log(num1);
    current = "";
}
function equal() {
    sum = screendisplay1;
    num2 = current;
    if (operator === '+') {
        sum.value = parseInt(num1) + parseInt(num2);
    }
    else if (operator === '-') {
        sum.value = num1 - num2;
    }
    else if (operator === '×') {
        sum.value = num1 * num2;
    }
    else {
        sum.value = num1 / num2;
    }
}
    */

/*

//calculator       1       textbox show values & operators

var screendisplay1 = document.getElementById("input1");
var num1 = "";
var num2 = "";
var ariSign = "";
var current;
var sum = "";
var total = "";
var demo = "";
function addNumber(num) {
    if (ariSign) {
        num2 += num;
        demo = ariSign + num2;
        screendisplay1.value = demo;
    } else {
        num1 += num;
        screendisplay1.value = num1;
    }
}
function setOperator(ariMat) {
    current = ariMat;
    ariSign = num1 + current;
    screendisplay1.value = ariSign;
}
function equal(equalTo) {
    total = demo + equalTo;
    screendisplay1.value = total + sum;
    if (current === '+') {
        sum = parseInt(num1) + parseInt(num2);

    }
    else if (current === '-') {
        sum = num1 - num2;
    }
    else if (current === '×') {
        sum = num1 * num2;
    }
    else {
        sum = num1 / num2;
    }
}

*/

/*

// calculator       1       textbox hide values and only view result

var screendisplay1 = document.getElementById("input1");
var num1 = "";
var num2 = "";
var ariSign = "";
var sum = "";
var total = "";
var current;
function addNumber(num) {
    if (ariSign) {
        current += num;
        num2 = ariSign + current;
        current = "";
        screendisplay1.value = num2;
    } else {
        num1 += num;
        screendisplay1.value = num1;
    }

}
function setOperator(ariMat) {
    current = ariMat;
    ariSign = num1 + current;
    screendisplay1.value = ariSign;
    current = "";
}
function equal(equalTo) {
    total = num2 + equalTo;
    screendisplay1.value = total + sum;
    if (current === '+') {
        sum = parseInt(num1) + parseInt(num2);

    }
    else if (current === '-') {
        sum = num1 - num2;
    }
    else if (current === '×') {
        sum = num1 * num2;
    }
    else {
        sum = num1 / num2;
    }
}
    */
