let num = 0
let list = []
let test = 0


while (list.includes(test) === false) {
  list.push(num)
  num = +prompt("Enter a number until you're happy");
  test = num
}

console.log(`${num} is already inputted before. Program ends`)
list.pop()

list.sort((a, b) => a - b)
for (let i = 1; i <= list.length; i++) {
  console.log(list[i])
}


