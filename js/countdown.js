//Countdown Timer
const clockdiv = document.getElementById("data-dat").value;
const countDownTime = new Date(clockdiv).getTime();

const countdownfunction = setInterval(function () {
  const now = new Date().getTime();
  //alert("aaaaaaa "+countDownTime);
  const diff = countDownTime - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(diff % (1000 * 60) / 1000);

  if (diff < 0) {
    
    clearInterval(countdownfunction);
  } else {
    clockdiv.style.display = "none";
    clockdiv.querySelector(".days").innerHTML = 11;//days;
    clockdiv.querySelector(".hours").innerHTML = hours;
    clockdiv.querySelector(".minutes").innerHTML = minutes;
    clockdiv.querySelector(".seconds").innerHTML = seconds;
  }
}, 1000);
