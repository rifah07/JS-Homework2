const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const compareButton = document.getElementById("compare");
const result = document.getElementById("result");

function compare() {
  const Firstnumber = parseInt(number1Input.value);
  const Secondnumber = parseInt(number2Input.value);

  if (Firstnumber > Secondnumber) {
    result.innerHTML = "First Number is greater than Second Number";
  } else if (Firstnumber < Secondnumber) {
    result.innerHTML = "First Number is less than Second Number";
  } else {
    result.innerHTML = "Both Numbers are equal";
  }
}

compareButton.addEventListener('click', compare);
