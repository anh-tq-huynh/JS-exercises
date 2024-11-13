let dogList = []
for (let i = 1; i<= 6; i++) {
  let name = prompt(`Enter the name of dog no.${i}/6`)
  dogList.push(name)
}

let unorderedList = document.createElement("ul")
document.querySelector("p").appendChild(unorderedList)


for (let i = 1; i <=6; i++) {
  let addList = document.createElement("li")
  addList.innerHTML = `${[...dogList].reverse()[i-1]}`
  document.querySelector("ul").appendChild(addList)
}