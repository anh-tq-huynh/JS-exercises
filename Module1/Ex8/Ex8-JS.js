const start = +prompt("Enter the start year");
const end = +prompt("Enter the end year");

for (let i = start; i<=end; i++) {
  let new_list = document.createElement("li");
  new_list.innerHTML = i;
  document.querySelector('ul').appendChild(new_list);
}