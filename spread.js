const numbers = [3, 5, 6, 85, 4, 64, 32, 445, 345, 55, 789];
const arrayMax = Math.max(...numbers);

console.log(arrayMax);

const num = [5, 5, 6, 98, 7, 56];
// const number = [...num];
const result = [...num, 16]
result.push(15);
// console.log(number);
console.log(num);
console.log (result);
