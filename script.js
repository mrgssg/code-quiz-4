const timerEl = document.getElementById('timer');


function countdown () {
console.log("it works");
const timeLeft = 3;
const timeInterval = setInterval(function () {
    if (timeLeft > 1) {
    timerEl = timeLeft + '';
    timeLeft--;
    } else if (timeLeft === 1) {
    timerEl = timeLeft ;
    timeLeft--;
    } else {
        timerEl = '' + "time's up";
        clearInterval(timeInterval);
    }
}, 3000);
}