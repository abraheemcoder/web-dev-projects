/* Create a Faulty Calculator using JavaScript

This Faulty Calculator does following:
1. It takes two numbers as input from the user.
2. It perform wrong operations as follows:

+ ---> -
- ---> + 
* ---> /
/ ---> *
** ---> %
% ---> **

It performs wrong operation 10% of the times. 
Hint: use Math.random */
let num1 = 2;
let num2 = 2;
let operator = "-";
const faultyCalculator = (num1, num2, operator) => {
  const isFaulty = Math.random() < 0.1;
  if (operator === "+") {
    if (isFaulty) {
      return num1 - num2;
    } else {
      return num1 + num2;
    }
  } else if (operator === "-") {
    if (isFaulty) {
      return num1 + num2;
    } else {
      return num1 - num2;
    }
  } else if (operator === "*") {
    if (isFaulty) {
      return num1 / num2;
    } else {
      return num1 * num2;
    }
  } else if (operator === "/") {
    if (isFaulty) {
      return num1 * num2;
    } else {
      return num1 / num2;
    }
  } else if (operator === "%") {
    if (isFaulty) {
      return num1 ** num2;
    } else {
      return num1 % num2;
    }
  } else if (operator === "**") {
    if (isFaulty) {
      return num1 % num2;
    } else {
      return num1 ** num2;
    }
  } else {
    console.log("invalid operator");
  }
};
const result = faultyCalculator(num1, num2, operator);
console.log(result);