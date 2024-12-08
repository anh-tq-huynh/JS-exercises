btn = document.getElementById("start");
btn.addEventListener("click", () => {
  let string = document.getElementById("calculation").value;
  calculation(string);

})

function calculation(calString) {
  let split = calString.split('+').join(',').split('-').join(',').split('*').join(',').split('/').join(',').split(',')
  console.log(split);
  let num1 = +split[0]
  let num2 = +split[1]
  let result = ""
  console.log(num1, num2)
  if (calString.includes("+")) {
    result = (num1 + num2).toString();}
    else if (calString.includes("-")) {
      result = (num1 - num2).toString();}
    else if (calString.includes("*")) {
      result = (num1 * num2).toString();}
    else if (calString.includes("/")) {
      result = (num1 / num2).toString();}
  document.getElementById("result").innerHTML = result;
  }

