/* Write a program to calculate factorial of a number using reduce() and using for loop.
6! = 6*5*4*3*2*1 = 720
*/
// Using loop
const num = 6;
let result = 1;
for (let i = num; i > 0; i--) {
    result *= i;
}
console.log(result);

// Using reduce()
const number = 6;
const factorialArr = Array.from({length: number}, (_, i) => i + 1);
const result2 = factorialArr.reduce((accNum, currentNum) => accNum * currentNum, 1);
console.log(result2);