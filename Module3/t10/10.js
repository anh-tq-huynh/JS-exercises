let fname = document.querySelector("input[name =firstname]")
let lname = document.querySelector("input[name =lastname]")

let form = document.querySelector("#source")
form.addEventListener("submit", e => {
  e.preventDefault()
  document.querySelector("#target").innerHTML = `Your name is ${fname.value} ${lname.value}`
})