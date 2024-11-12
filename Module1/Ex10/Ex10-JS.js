const dice_num = +prompt("Please enter the number of dices:")
const dice_sum = +prompt("What is the sum you want to check?")


const rollSimulation = 10000
let count = 0
let sum = 0
for (let tries = 1; tries <= rollSimulation; tries++) {
  for (let dice = 1; dice <= dice_num; dice++ ) {
    let roll = Math.floor(Math.random()* (6-1+1)+1);
    sum += roll;
  }
  if (sum === dice_sum) {
    count++
  }
  sum = 0
}

const prob = (count/rollSimulation*100).toFixed(2);
document.querySelector("#result").innerHTML = `${dice_num} dices, sum ${dice_sum}, probability is ${prob}%`