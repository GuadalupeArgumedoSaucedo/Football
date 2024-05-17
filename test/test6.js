/*In summary:
Use map when you need to transform elements and create a new array.
Use forEach when you want to iterate over elements and perform side effects without creating a new array.*/
const users = [
  { id: 1, username: 'alice' },
  { id: 2, username: 'bob' },
  // ...
];
const usernames = users.map((user) => user.username);

const fruits = ['apple', 'banana', 'orange'];
fruits.forEach((fruit) => {
  console.log(`I love ${fruit}`);
});
// Logs: "I love apple", "I love banana", "I love orange"

/* 
let numbers = [300, 150, 25]; 
function getSum(currentTotal, arrayValue) { 
// adds the array value to the accumulated total 
return currentTotal + arrayValue; 
} 
let sum = numbers.reduce(getSum, 0); 
// sum contains 475 
*/

// Calculate the sum of numbers
let numbers = [2, 5, 10];

function sumAllNumbers(currentTotal, arrayValue){
    return currentTotal + arrayValue; 
}

let totalOfAllNumbers = numbers.reduce(sumAllNumbers, 0);
console.log("Sum of all numbers:", totalOfAllNumbers);

// Calculate the average of ages
let ages = [20, 25, 23];

function calculateAverage(currentTotal, arrayValue){
    return currentTotal + arrayValue;
}

let totalAge = ages.reduce(calculateAverage, 0);
let averageAge = totalAge / ages.length;
console.log("Average age:", averageAge);