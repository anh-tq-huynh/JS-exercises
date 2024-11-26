const target = document.getElementById("target");

target.appendChild(document.createElement("li")).innerHTML = "First item"
target.appendChild(document.createElement("li")).innerHTML = "Second item"
target.appendChild(document.createElement("li")).innerHTML = "Third item"

document.getElementsByTagName("li")[1].setAttribute("class","my-item")