const year = +prompt("Please enter a year")

if (year%100 === 0 && year%400 === 0) {
  document.querySelector("#year").innerHTML = `${year} is a leap year`;
}
else {
  document.querySelector("#year").innerHTML = `${year} is not a leap year`;
}
