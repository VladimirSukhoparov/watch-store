import "normalize.css";
import "./styles/main.scss";

let counterDisplayElem = document.querySelector(".banner__count");
let counterMinusElem = document.querySelector(".banner__left");
let counterPlusElem = document.querySelector(".banner__right");

let count = 1;

updateDisplay();

counterPlusElem.addEventListener("click", () => {
  count++;
  updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
  count--;
  updateDisplay();
});

function updateDisplay() {
  counterDisplayElem.innerHTML = count < 10 ? '0' + count : count;
}
