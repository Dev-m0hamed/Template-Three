let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();

let formatTime = (time) => time < 10 ? `0${time}` : time;

let counter = setInterval(() => {
    let diff = countDownDate - new Date().getTime();

    days.innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.innerHTML = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds.innerHTML = Math.floor((diff % (1000 * 60)) / 1000);

    hours.innerHTML = formatTime(hours.innerHTML);
    minutes.innerHTML = formatTime(minutes.innerHTML);
    seconds.innerHTML = formatTime(seconds.innerHTML);
    
    if (diff < 0) {
        clearInterval(counter);
        days.innerHTML = "0";
        hours.innerHTML = "0";
        minutes.innerHTML = "0";
        seconds.innerHTML = "0";
    }

}, 1000);