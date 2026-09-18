let current = '';
let previous = '';
let operator = null;

const currentDisplay =
document.getElementById('current');

const previousDisplay =
document.getElementById('previous');

function updateDisplay() {

currentDisplay.textContent =
    current || '0';
previousDisplay.textContent =
    previous;
}

function appendNumber(number) {

if (number === '.' && current.includes('.')) {
    return;
}
if (number === '.' && current === '') {
    current = '0';
}
current += number;
updateDisplay();
}

function chooseOperator(selectedOperator) {

if (current === '' && previous === '') {
    return;
}
if (current === '' && previous !== '') {
    operator = selectedOperator;
    return;
}
if (previous !== '' && operator !== null) {
    calculate();
}
operator = selectedOperator;
previous =
    current +
    ' ' +
    getOperatorSymbol(selectedOperator);
current = '';
updateDisplay();
}

function getOperatorSymbol(op) {

const symbols = {
    '+': '+',
    '-': '−',
    '*': '×',
    '/': '÷',
    '%': '%'
};
return symbols[op] || op;
}

function calculate() {

if (
    previous === '' ||
    current === '' ||
    operator === null
) {
    return;
}
const first =
    parseFloat(previous);
const second =
    parseFloat(current);
let result;
switch (operator) {
    case '+':
        result = first + second;
        break;
    case '-':
        result = first - second;
        break;
    case '*':
        result = first * second;
        break;
    case '/':
        if (second === 0) {
            current = 'Error';
            previous = 'Cannot divide by zero';
            operator = null;
            updateDisplay();
            return;
        }
        result = first / second;
        break;
    case '%':
        result = first % second;
        break;
    default:
        return;
}
result =
    Number.isInteger(result)
        ? result
        : parseFloat(result.toFixed(10));
current = String(result);
previous = '';
operator = null;
updateDisplay();
}

function clearCalculator() {

current = '';
previous = '';
operator = null;
updateDisplay();
}

function deleteNumber() {

if (current === 'Error') {
    clearCalculator();
    return;
}
current =
    current.slice(0,-1);
updateDisplay();
}

/* =========================================================
KEYBOARD SUPPORT
========================================================= */

document.addEventListener(
'keydown',
function(event) {

    const key = event.key;
    if (
        !isNaN(key) ||
        key === '.'
    ) {
        appendNumber(key);
        return;
    }
    if (
        ['+','-','*','/','%']
        .includes(key)
    ) {
        chooseOperator(key);
        return;
    }
    if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
        return;
    }
    if (key === 'Backspace') {
        deleteNumber();
        return;
    }
    if (key === 'Escape') {
        clearCalculator();
    }
}
);

/* INITIAL */

updateDisplay();