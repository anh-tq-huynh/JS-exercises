max_num = +prompt("How many sides does your dice have?")

function randomDice(max) {
  return Math.floor(Math.random() * (max -1 +1) + 1);
}

let diceResult = 0
let addList = document.createElement("ul")
document.querySelector("p").appendChild(addList)

while (diceResult !== max_num) {
  let newList = document.createElement("li")
  diceResult = randomDice(max_num);
  newList.innerHTML = `${diceResult}`
  document.querySelector("ul").appendChild(newList)
}