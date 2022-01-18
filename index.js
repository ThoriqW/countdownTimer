const newYears = "1 Jan 2023";

var daysText = document.querySelector("#days")
var hoursText = document.querySelector("#hours")
var minsText = document.querySelector("#mins")
var secondText = document.querySelector("#second")

function contdown() {
    const newYearsDate = new Date(newYears)
    let currentDate = new Date().getTime();

    let distance = newYearsDate - currentDate

    let totalSecond = distance / 1000;
    
    var days = Math.floor(totalSecond / 3600 / 24)
    var hours = Math.floor((totalSecond / 3600) % 24 )
    var minutes = Math.floor((totalSecond / 60)  % 60)
    var seconds = Math.floor((totalSecond) % 60);

    daysText.innerHTML = days;
    hoursText.innerHTML = formatTime(hours);
    minsText.innerHTML = formatTime(minutes);
    secondText.innerHTML = formatTime(seconds);

    if (distance < 0) {
        document.querySelector("h1").innerHTML = "EXPIRED";
    }
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time
}


setInterval(contdown, 1000);