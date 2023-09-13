"use strict";

// Цикли
// завдання 1
// let userNumber = prompt("Введіть число:");
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
// const currentMaxValue = 4589;
// let reverseMaxValue = parseInt(currentMaxValue.toString().split('').reverse().join(''));


// console.log(reverseMaxValue); 
// console.log(typeof reverseMaxValue); 

// hw2 - об'єкти та основи роботи з функціями


// Напишіть функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.


// function iterativeOddSumTo(number) {
// let sum = 0;
 
//    for (let i = 1; i <= number; i += 2) {
//       sum = sum + i;
//   }
// return sum;
// }
// console.log(iterativeOddSumTo(1)) // 1
// console.log(iterativeOddSumTo(9)) // 25 1+3+5+7+9 = 25
// console.log(iterativeOddSumTo(13)) // 1+3+5+7+9+11+13 = 49


//     Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.                            
function recursiveOddSumTo(number) {
  if (number <= 1) {
    return 1; 
  }  if (number % 2 === 0) {
    
    return recursiveOddSumTo(number - 1);
  } 
   
    return number + recursiveOddSumTo(number - 2);
  }


console.log(recursiveOddSumTo(1));  // 1
console.log(recursiveOddSumTo(9));  // 25
console.log(recursiveOddSumTo(10)); // 25

