const num = +prompt("Enter a number");

//Check for prime
let count = 0
for (let i = 1 ; i <= num; i++) {
  if (num % i === 0) {
    count++
  }
}

if (count > 2) {
  document.querySelector('#result').innerHTML = `${num} is not a prime number`
}
else {
  document.querySelector('#result').innerHTML = `${num} is a prime number`;
}