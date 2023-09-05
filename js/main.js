let prev = document.getElementById("prev");
let next = document.getElementById("next");
let days = document.querySelector(".days");
let currentDate = document.getElementById("current-date");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = new Date();
let currentYear = date.getFullYear();
let currentMount = date.getMonth();

function refreshCal() {
  let lastDateOfMonth = new Date(currentYear, currentMount + 1, 0).getDate();
  let firstDateOfMonth = new Date(currentYear, currentMount, 1).getDay();
  let lastDateOfLastMonth = new Date(currentYear, currentMount, 0).getDate();
  let firsDayOfNextMonth = new Date(
    currentYear,
    currentMount,
    lastDateOfMonth
  ).getDay();
  let allDays = "";

  for (let i = firstDateOfMonth; i > 0; i--) {
    allDays += `<li class="unactive">${lastDateOfLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateOfMonth; i++) {
    let today =
      i === date.getDate() &&
      currentMount === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    allDays += `<li class="${today}">${i}</li>`;
  }
  for (let i = firsDayOfNextMonth; i < 6; i++) {
    allDays += `<li class="unactive">${i - firsDayOfNextMonth + 1}</li>`;
  }
  days.innerHTML = allDays;
  currentDate.innerHTML = `${months[currentMount]} ${currentYear}`;
}
refreshCal();
prev.onclick = function () {
  currentMount--;
  if (currentMount < 0 || currentMount > 11) {
    date = new Date(currentYear, currentMount);
    currentYear = date.getFullYear();
    currentMount = date.getMonth();
  }

  refreshCal();
};
next.onclick = function () {
  currentMount++;
  if (currentMount < 0 || currentMount > 11) {
    date = new Date(currentYear, currentMount);
    currentYear = date.getFullYear();
    currentMount = date.getMonth();
  }

  refreshCal();
};
