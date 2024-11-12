'use strict';
const name = prompt('What is your name?');

//random a number between 1-4
function RandomInt(min,max) {
  return Math.floor(Math.random() *(max-min +1) + min);
}
const num = RandomInt(1,4);
let house = ""
//condition to choose house Gryffindor, Slytherin, Hufflepuff, and Ravenclaw
if (num === 1) {
  house = "Gryffindor";
}
else if (num === 2) {
  house = "Slytherin";
}
else if (num === 3) {
  house = "Hufflepuff";
}
else if (num === 4) {
  house = "Ravenclaw";
}

//print
document.querySelector('#result').innerHTML = `${name}, you are ${house}`;