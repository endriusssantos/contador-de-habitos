const counter = document.getElementById("counter");
const btnAdd = document.getElementById("btn-add");
const btnReset = document.getElementById("btn-reset");

let value = Number(localStorage.getItem("counter")) || 0;

updateCounterText();

function updateCounterText() {
  if (value === 0) {
    counter.innerHTML = "Clique no botão verde para começar";
  } else {
    counter.innerHTML = value === 1 ? `${value} dia` : `${value} dias`;
  }
}

btnAdd.addEventListener("click", () => {
  value++;
  localStorage.setItem("counter", value);
  updateCounterText();
});

btnReset.addEventListener("click", () => {
  value = 0;
  localStorage.setItem("counter", value);
  updateCounterText();
});
