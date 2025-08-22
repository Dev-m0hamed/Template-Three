let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();

let formatTime = (time) => (time < 10 ? `0${time}` : time);

let counter = setInterval(() => {
  let diff = countDownDate - new Date().getTime();

  days.innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.innerHTML = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.innerHTML = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  seconds.innerHTML = Math.floor((diff % (1000 * 60)) / 1000);

  hours.innerHTML = formatTime(hours.innerHTML);
  minutes.innerHTML = formatTime(minutes.innerHTML);
  seconds.innerHTML = formatTime(seconds.innerHTML);

  if (diff < 0) {
    clearInterval(counter);
    days.innerHTML = hours.innerHTML = minutes.innerHTML = seconds.innerHTML = "00";
  }
}, 1000);

let skillsSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= skillsSection.offsetTop - 250) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= statsSection.offsetTop - 250) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
