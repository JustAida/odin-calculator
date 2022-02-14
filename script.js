// Fucntion to change the display number.
function displayNumber(num) {
  const display = document.querySelector(".display-number");
  display.textContent = num;
}

function isFloat(n) {
  return n % 1 !== 0;
}

// Functions for basic math operators [add, subtract, multiply, divide].
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Function that takes two numbers and one operator then calls the above functions. 
function operate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === '*') {
    return multiply(num1, num2);
  } else if (operator === '/') {
    return divide(num1, num2);
  }
}

// Function to change the display when a number is clicked.
// Store the display value in a variable.
let displayNum = '';
function changeDisplayNumWhenClick() {
  const numbers = document.querySelectorAll('.number');
  const float = document.querySelector('.float');
  float.addEventListener('click', () => {
    // Prevent more than one floating point.
    if (!displayNum.includes('.')) {
      if (displayNum === '') displayNum += '0' + float.textContent
      else displayNum += float.textContent
    }

    if (displayNum.length <= 16) {
      displayNumber(displayNum);
    }
  });
  numbers.forEach(number => {
    number.addEventListener('click', () => {
      displayNum += number.textContent;
      if (num1 !== '' && operator === '') {
        num1 = '';
        num2 = '';
      }
      if (displayNum.length <= 16) {
        displayNumber(displayNum);
      }
    });
  });
}
changeDisplayNumWhenClick();

// Store the first number when the user presses an operator.
// Save which operation has been chosen
const operators = document.querySelectorAll('.operator')
let num1 = '';
let operator = '';
operators.forEach(op => {
  op.addEventListener('click', () => {

    // If num1 is empty then store the displayNum to it.
    if (num1 === '') {
      num1 = displayNum;
      operator = op.textContent;
      displayNum = '';
    } else {
      num2 = displayNum;
      if (operator === '') operator = op.textContent;
      if (num2 !== '') {
        result = operate(num1, num2, operator);
        operator = op.textContent;
        if (isFloat(result)) result = parseFloat(result).toFixed(2);

        displayNumber(result);
        displayNum = '';
        num1 = result;
      } else {
        // Allow to change operator if num2 is empty.
        operator = op.textContent;
      }
    }
  });
});

// Store the second number.
// Call operate() on them after the user presses "=" key.
const equal = document.querySelector('.equal');
let num2 = '';
let result = '';
equal.addEventListener('click', () => {
  num2 = displayNum;
  if (num1 !== '' && num2 !== '' && operator !== '') {
    result = operate(num1, num2, operator);
    operator = '';
    if (isFloat(result)) result = parseFloat(result).toFixed(2);

    // Update the display with the result of the operation.
    displayNumber(result);
    displayNum = '';
    num1 = result;
  }
})

