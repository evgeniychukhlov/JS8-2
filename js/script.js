"use strict";

// Цикли
// завдання 1
// var userNumber = prompt("Введіть число:");
// if (!isNaN(userNumber)) {
//    for (let i = 0; i <= userNumber; i += 2) {
//     console.log(i);
//   }
// } else {
//   console.log(userNumber ,"не є числом. Спробуйте ще раз.")
// }


// завдання 3
// const resultsArray =  [1, 2, [3, [4]]];
// let productOfArray = resultsArray.flat(Infinity) ; 
// let result = 1;

// for (let i = 0; i < productOfArray.length; i++) {
//   result *= productOfArray[i];
// }

// console.log(result);

// задача 2
const currentMaxValue = 4589;
let reverseMaxValue = parseInt(currentMaxValue.toString().split('').reverse().join(''));

console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue); 