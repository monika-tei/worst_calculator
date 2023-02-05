"use strict";

let result;
let firstNumber = document.getElementById("firstnumber");
let secondNumber = document.getElementById("secondnumber");
let operator = document.getElementById("#operator");

const calc_btn = document.getElementById("calculate");
const clear = document.getElementById("clear");
const resultList = document.getElementById("results");
const resultListElement = document.querySelector("#results li");

// load screen
// activate event listener for when a user clicks "calculate button"
window.addEventListener("load", () => {
  calc_btn.addEventListener("click", calculateNow);
});

// Calculate
// 4 options to perform the calculation with;
function calculateNow() {
  //
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

  // Clear
  clear.addEventListener("click", () => {
    console.log("clicked clear");

    firstNumber.value = " ";
    secondNumber.value = " ";
    resultList.removeChild(calculation);

    // clearScreen();
  });

  //   function clearScreen() {
  //     firstNumber.value = " ";
  //     secondNumber.value = " ";
  //     resultList.removeChild(calculation);
  //   }
}
