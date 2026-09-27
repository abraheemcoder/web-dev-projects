// Simple Calculator

// ===================================

// Question:
// JavaScript mein ek Simple Calculator ka logic banao.
// Calculator ko:
// 1. Do numbers num1 aur num2 lene hain.
// 2. Ek operator operator lena hai.
// 3. Ye 4 operations perform karni hain:
// + → Addition
// - → Subtraction
// * → Multiplication
// / → Division
// 4. Operator ke according correct result calculate karke console.log() karo.
// 5. Agar user invalid operator de, to "Invalid operator" print karo.
// 6. Agar division karte waqt num2 0 ho, to appropriate error message print karo.
// 7. UI, HTML, CSS aur DOM use nahi karna.
// 8. eval() use nahi karna.

// 9. Test your logic with:
// let num1 = 10;
// let num2 = 5;
// let operator = "+";

// 10. Expected output:
// 15

// 11. Challenge: Is problem ko if...else ya switch statement se solve karo.
let num1 = 10;
let num2 = 5;
let operator = "+";

const simpleCalculator = (num1, num2, operator) => {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "Cannot divide by zero.";
        } else {
            return num1 / num2;
        }
    } else {
        return "Invalid operator";
    }
}
const result = simpleCalculator(num1, num2, operator);
console.log(result);