'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.querySelector("#target")

for (let name of names) {
  let action = document.createElement("li")
  action.innerText = name;
  target.appendChild(action);
}
