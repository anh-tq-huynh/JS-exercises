let output = ""
function concat(input) {
  output += input;
  return output;
}
let finalName = ""
nameList = ["Johnny","DeeDee","Joey","Marky"]
for (let i = 0; i < nameList.length; i++) {
  finalName = concat(nameList[i])
}

document.querySelector("p").innerHTML = finalName