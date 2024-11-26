btn = document.getElementById("start");
btn.addEventListener("click", a => {
  let num1 = +(document.getElementById("num1").value);
  let num2 = +(document.getElementById("num2").value);
  let dropDown = document.querySelector('select');
  let operator = dropDown.value;
  calculate(num1, num2, operator)
});


function calculate (numA,numB,operator) {
  let result = 0
   switch (operator) {
    case 'add':
      result = numA + numB
      break;
    case 'sub':
      result = numA - numB
      break;
    case 'multi':
      result = numA * numB
      break;
    case 'div':
      result = numA / numB
      break;
      default:
        console.log('Invalid')
  }
  console.log(result)
  document.getElementById('result').innerHTML = result.toString()
}