let currentInput = '0';
let previousInput = '';
let operator = null;
let waitingForSecondNumber = false;

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = currentInput;
}

function appendNumber(number) {
    if (waitingForSecondNumber) {
        currentInput = number;
        waitingForSecondNumber = false;
    } else {
        currentInput = currentInput === '0' ? number : currentInput + number;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    waitingForSecondNumber = false;
    updateDisplay();
}

function setOperator(op) {
    if (operator !== null && !waitingForSecondNumber) {
        calculate();
    }
    previousInput = currentInput;
    operator = op;
    waitingForSecondNumber = true;
}

function calculate() {
    if (operator === null || waitingForSecondNumber) {
        return;
    }

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch(operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    waitingForSecondNumber = true;
    updateDisplay();
};