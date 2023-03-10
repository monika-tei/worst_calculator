"use strict";

let result;
let firstNumber = document.getElementById("firstnumber");
let secondNumber = document.getElementById("secondnumber");
let operator = document.getElementById("#operator");
// added anew
const doroundPointer = document.querySelector("#doround");

const calc_btn = document.getElementById("calculate");
const clear = document.getElementById("clear");
const resultList = document.getElementById("results");
const resultListElement = document.querySelector("#results li");

// load screen
// activate event listener for when a user clicks "calculate button"
// you can also just simply have both of the event listeners in here: calculate and clear
window.addEventListener("load", () => {
  calc_btn.addEventListener("click", calculateNow);
});

// Calculate
// 4 options to perform the calculation with;
function calculateNow() {
  //
  console.log("doroundPointer.checked", doroundPointer.checked);
  operator = document.querySelector("#operator").value;

  if (operator === "add") {
    result = parseInt(firstNumber.value) + parseInt(secondNumber.value);
  } else if (operator === "sub") {
    result = parseInt(firstNumber.value) - parseInt(secondNumber.value);
  } else if (operator === "mul") {
    result = parseInt(firstNumber.value) * parseInt(secondNumber.value);
  } else {
    result = parseInt(firstNumber.value) / parseInt(secondNumber.value);
  }
  //show result of the calculation in the first input field
  console.log(result);
  firstNumber.value = result;

  //now we want to show them in the list above
  // inner text  and append child might be useful here

  let calculation = document.createElement("li");
  calculation.textContent = result;
  resultList.appendChild(calculation);

  resultList.scrollTop = resultList.scrollHeight;

  let numberOfDecimals;
  if (doroundPointer.checked) {
    numberOfDecimals = Number(decimals.value);
  } else {
    numberOfDecimals = 0;
  }
  result = result.toFixed(numberOfDecimals);

  // If we want to clear the two input fields and result list
  // We need to remove all values
  clear.addEventListener("click", () => {
    console.log("clicked clear");

    firstNumber.value = " ";
    secondNumber.value = " ";
    resultList.removeChild(calculation);
  });
}
