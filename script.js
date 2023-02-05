"use strict";

let result;
let firstNumber = document.getElementById("firstnumber");
let secondNumber = document.getElementById("secondnumber");
let operator = document.querySelector("#operator").value;

const calc_btn = document.getElementById("calculate");
const resultList = document.getElementById("results");
const resultListElement = document.querySelector("#results li");

// load screen
// activate event listener for when a user clicks "calculate button"
window.addEventListener("load", () => {
  calc_btn.addEventListener("click", calculateNow);
});

// Calculate
// 4 options to do math: add, subtract, multiply, divide;
function calculateNow() {
  operator = document.querySelector("#operator").value;
  console.log(operator);

  if (operator === "add") {
    result = parseInt(firstNumber.value) + parseInt(secondNumber.value);
  } else if (operator === "sub") {
    result = parseInt(firstNumber.value) - parseInt(secondNumber.value);
  } else if (operator === "mul") {
    result = parseInt(firstNumber.value) * parseInt(secondNumber.value);
  } else {
    result = parseInt(firstNumber.value) / parseInt(secondNumber.value);
  }
  console.log(result);
  //   firstNumber.value = result;
}

//Display result in the list above

// Clear

//optional: do rounding
