let count = 0;

const value = document.getElementById("value");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

function renderCount() {
  value.textContent = count;
  value.style.color = count < 0 ? "red" : count > 0 ? "green" : "#222";
}

decreaseButton.addEventListener("click", () => {
  count -= 1;
  renderCount();
});

resetButton.addEventListener("click", () => {
  count = 0;
  renderCount();
});

increaseButton.addEventListener("click", () => {
  count += 1;
  renderCount();
});
