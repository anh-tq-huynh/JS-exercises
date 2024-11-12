const is_ready = confirm("Should I calculate the square root?");

//check is_ready
if (is_ready === true) {
  const num = +prompt("Great, please enter your number!");
  if (num <0) {
    document.querySelector('#result').innerHTML ="The square root of a negative number is not defined";
  }
  else if (num >= 0){
    document.querySelector('#result').innerHTML =`The square root of the number is ${Math.sqrt(num)}`;
  }
}
else {
  document.querySelector('#result').innerHTML="It's okay, come back later";
}