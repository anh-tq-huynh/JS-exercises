function randomDicePip() {
  return Math.floor(Math.random()*(6-1+1)+1)
}

let num = randomDicePip()
unorderedList = document.createElement("ul")
document.querySelector("p").appendChild(unorderedList)

while (num !== 6) {
  num = randomDicePip()
  let addList = document.createElement("li")
  addList.innerHTML = `${num}`
  document.querySelector("ul").appendChild(addList)
}