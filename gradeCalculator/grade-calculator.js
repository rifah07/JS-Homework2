const score = document.getElementById("score");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

function calculateGrade() {
  const studentScore = parseInt(score.value);

  if (studentScore >= "80" && studentScore <= "100") {
    result.innerHTML = "A+";
  } else if (studentScore >= "70" && studentScore < "80") {
    result.innerHTML = "A";
  } else if (studentScore >= "60" && studentScore < "70") {
    result.innerHTML = "A-";
  } else if (studentScore >= "50" && studentScore < "60") {
    result.innerHTML = "B";
  }else if (studentScore >= "40" && studentScore < "50") {
    result.innerHTML = "C";
  } else if (studentScore >= "33" && studentScore < "40") {
    result.innerHTML = "D";
  }else if (studentScore >= "0" && studentScore < "33") {
    result.innerHTML = "F";
  } else {
    result.innerHTML = "Invalid Score";
  }
}

calculateButton.addEventListener("click", calculateGrade);
