const score = document.getElementById("score");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

function setResult(text) {
  result.innerText = text;
}

function calculateGrade() {
  const studentScore = parseFloat(score.value);
  let displayText= '';

  if (studentScore >= 80 && studentScore <= 100) {
    displayText= "A+";
  } else if (studentScore >= 70 && studentScore < 80) {
    displayText="A";
  } else if (studentScore >= 60 && studentScore < 70) {
    displayText="A-";
  } else if (studentScore >= 50 && studentScore < 60) {
    displayText="B";
  } else if (studentScore >= 40 && studentScore < 50) {
    displayText="C";
  } else if (studentScore >= 33 && studentScore < 40) {
    displayText="D";
  } else if (studentScore >= 0 && studentScore < 33) {
    displayText="F";
  } else {
    setResult("Invalid Score");
  }
  setResult(displayText);
}

calculateButton.addEventListener("click", calculateGrade);
