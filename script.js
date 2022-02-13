// Fucntion to change the display number.
function displayNumber(num) {
  const display = document.querySelector(".display-number");
  display.textContent = num;
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
let num1 = '';
function changeDisplayNumWhenClick() {
  const numbers = document.querySelectorAll('.number');
  numbers.forEach(number => {
    number.addEventListener('click', () => {
      num1 += number.textContent;
      if (num1.length <= 16) {
      displayNumber(num1);
      }
    });
  });
}
changeDisplayNumWhenClick();

// Store the first number when the user presses an operator.

// Save which operation has been chosen and the second number.

// Call operate() on them after the user presses "=" key.

// Update the display with the result of the operation.
