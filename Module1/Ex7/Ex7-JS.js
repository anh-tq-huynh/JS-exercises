const dice_num = prompt("How many dices do you want?")
let dice_sum = 0;

function ThrowDice() {
  const max = 6;
  const min = 1;
  return Math.floor(Math.random() * (max - min) + min)
}

for (let i = 1; i <= dice_num; i++) {
  dice_sum += ThrowDice();
}

document.querySelector("#result").innerHTML = `After throwing ${dice_num} times, the total is ${dice_sum}`