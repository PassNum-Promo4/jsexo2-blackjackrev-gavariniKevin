var cpuValue = Math.floor(Math.random() * 11);
var userValue = Math.floor(Math.random() * 11);
var cpuTemp = 0;
var userTemp = 0;

function notBlackJack() {
  var cpuValue = Math.floor(Math.random() * 11);
  var userValue = document.getElementById('userValue').value;

  if (isNaN(userValue) || userValue < 1 || userValue > 10){
    document.getElementById("result").innerHTML = "Input not valid";
    document.getElementById("cpuResult").innerHTML = "";
  } else {
    if (cpuValue >= userValue) {
      document.getElementById("result").innerHTML = "you lose!";
      document.getElementById("cpuResult").innerHTML = cpuValue;
    } else if (userValue > cpuValue) {
      document.getElementById("result").innerHTML = "you win!";
      document.getElementById("cpuResult").innerHTML = cpuValue;
    }
  }
}


function giveCard(){
  var cpuTemp = Math.floor(Math.random() * 11);
  var userTemp = Math.floor(Math.random() * 11);
  var cpuValue = cpuValue + cpuTemp;
  var userValue = userValue + userTemp;
  console.log(cpuValue);
  console.log(userValue);
}

function endRound(){
  document.getElementById("cpuValue").innerHTML = cpuValue;
  document.getElementById("userValue").innerHTML = userValue;
  if (cpuValue >= userValue) {
    document.getElementById("result").innerHTML = "you lose!";
  } else if (userValue > cpuValue) {
    document.getElementById("result").innerHTML = "you win!";
  }

}
