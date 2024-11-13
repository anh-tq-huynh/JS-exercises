const total = +prompt("How many participants?")
let list = []

for (let i = 1; i<= total;i++) {
  let name = prompt(`Participant no.${i}, what is his/her name?`)
  list.push(name)
}

let orderedList = document.createElement("ol")
document.querySelector("p").appendChild(orderedList);

list.sort()

for (let i = 1; i <= total; i++) {
  let addList = document.createElement("li")
  addList.innerHTML = `${list[i-1]}`
  document.querySelector("ol").appendChild(addList)
}
