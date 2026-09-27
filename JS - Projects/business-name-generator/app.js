/* Create a business name generator by combining list of adjectives and shop name and another word.

Adjectives:
1. Prime
2. Urban
3. Elite

Shop name:
1. Foods
2. Traders
3. Ventures

Another words:
1. Hub
2. Group
3. Co

Solve this challege without using array. */

const adjective1 = "Prime";
const adjective2 = "Urban";
const adjective3 = "Elite";
const shopName1 = "Foods";
const shopName2 = "Traders";
const shopName3 = "Ventures";
const anotherWord1 = "Hub";
const anotherWord2 = "Group";
const anotherWord3 = "Co";
const randomNum1 = Math.random();
const randomNum2 = Math.random();
const randomNum3 = Math.random();
let adjective;
let shopName;
let anotherWord;

if (randomNum1 <= 0.33) {
  adjective = adjective1;
} else if (randomNum1 <= 0.66) {
  adjective = adjective2;
} else {
  adjective = adjective3;
}
if (randomNum2 <= 0.33) {
  shopName = shopName1;
} else if (randomNum2 <= 0.66) {
  shopName = shopName2;
} else {
  shopName = shopName3;
}
if (randomNum3 <= 0.33) {
  anotherWord = anotherWord1;
} else if (randomNum3 <= 0.66) {
  anotherWord = anotherWord2;
} else {
  anotherWord = anotherWord3;
}

const businessName = `${adjective} ${shopName} ${anotherWord}`;
console.log(businessName);