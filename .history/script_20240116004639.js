const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month  date.getMonth();
monthNameEl.innerHTML = date.toLocaleDateString("en", {
    month: "long",
})
dayNameEl.innerHTML = date.toLocaleTimeString("en",{
    weekday: "long",
})

dayNumberEl.innerHTML = date.getDate();

yearEl.innerHTML = date.getFullYear();