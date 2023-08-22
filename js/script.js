"use strict";



// Задача 1
// const userPassword = prompt("Введіть пароль:");

// let firstChar = userPassword.charAt(0);

// console.log (userPassword.length >= 8 && !isNaN(firstChar) );



// console.log(typeof isValidPassword);
// Задача 2

// let userAmount = prompt("Вкажіть сумму в ГРН (лише число)");
// let rate = 36.91; 
  
// let amountUSD = userAmount/rate;

// console.log("Ваша сума",userAmount,"UAH");
// console.log("Конвертована сума",Math.round(amountUSD),"USD" );

// Задача 3

const petrolAmount = prompt("Вкажіть бажану кількість літрів бензину");
const petrolPrise = prompt ("Вкажіть вартість бензину за 1л");
const totalPrice = petrolAmount*petrolPrise; 
console.log ("Вартість складатиме", totalPrice.toFixed(2),"UAH");
