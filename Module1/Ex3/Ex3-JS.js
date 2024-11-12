'use strict';
const num1 = Number(prompt("Enter the 1st number"))
const num2 = Number(prompt("Enter the 2nd number"))
const num3 = Number(prompt("Enter the 3nd number"))

document.querySelector('#sum').innerHTML = `Sum is ${num1 + num2 + num3}`;
document.querySelector('#product').innerHTML = `Product is ${num1 * num2 * num3}`;
document.querySelector('#average').innerHTML = `Average is ${(num1 + num2 + num3)/3}`;
