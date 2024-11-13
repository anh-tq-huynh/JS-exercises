let num = +prompt("Enter a number until you're happy")

let list = []
if (num === 0) {
  list.push(num)
}

  while (num !== 0) {
    list.push(num)
    num = +prompt(`Enter a number until you're happy`)
    if (num === 0) {
      break
    }

}

list.sort((a,b) => b-a)
for (let i = 1; i <=list.length ; i++) {
  console.log(`${list[i-1]}`)
}