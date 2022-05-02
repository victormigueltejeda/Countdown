const dayCounter = document.querySelector("#dias");
const hourCounter = document.querySelector("#hour");
const minuterCounter = document.querySelector("#minuter");
const secondCounter = document.querySelector("#second");
const btn = document.querySelector("#btn");
const modal = document.querySelector("#modal-id");

let importDate = localStorage.getItem("date")
  ? new Date(localStorage.getItem("date"))
  : new Date(00, 00, 00);

function formtNumber(number) {
  return number < 10 ? `0${number}` : number;
}

function countDown() {
  const currendate = new Date();
  const totalSecond = (importDate - currendate) / 1000;

  const days = Math.floor(totalSecond / 86400);
  const hours = Math.floor(totalSecond / 3600) % 24;
  const minute = Math.floor(totalSecond / 60) % 60;
  const second = Math.floor(totalSecond) % 60;

  dayCounter.textContent = formtNumber(days);
  hourCounter.textContent = formtNumber(hours);
  minuterCounter.textContent = formtNumber(minute);
  secondCounter.textContent = formtNumber(second);
}

function clickBtn(event) {
  event.preventDefault();

  let date = new Date(document.querySelector("#date").value);
  date.setDate(date.getDate() + 1);
  date.setHours(0);
  importDate = date === "" || date < new Date() ? importDate : new Date(date);
  localStorage.setItem("date", importDate);
}

btn.addEventListener("click", (event) => {
  clickBtn(event);
  modal.classList.add("hide");
});

setInterval(countDown, 1000);
