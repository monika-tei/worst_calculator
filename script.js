"use strict";

let firstNumber = document.getElementById("firstnumber");
let secondNumber = document.getElementById("secondnumber");
let operator = document.getElementById("operator").value;

const calc_btn = document.getElementById("calculate");
const resultList = document.getElementById("results");
const resultListElement = document.querySelector("#results li");

// load screen
// Activate event listener for when a user clicks "calculate button"
window.addEventListener("load", () => {
  calc_btn.addEventListener("click", calculateNow);
  console.log(operator);
});

// calc_btn.addEventListener("click", calculateNow);

// Calculate
function calculateNow() {
  console.log("calculating...", operator);
}
//Read first number
//Read second number
// Read operator

// Clear

//optional: do rounding
