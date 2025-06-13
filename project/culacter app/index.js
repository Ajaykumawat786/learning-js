const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons input");

buttons.forEach((button) => {
  const value = button.dataset.value;
  const action = button.dataset.action;

  if (value !== undefined) {
    button.addEventListener("click", () => {
      display.value += value;
    });
  }

  if (action === "clear") {
    button.addEventListener("click", () => {
      display.value = "";
    });
  }

  if (action === "delete") {
    button.addEventListener("click", () => {
      display.value = display.value.slice(0, -1);
    });
  }

  if (action === "calculate") {
    button.addEventListener("click", () => {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = "Error";
      }
    });
  }
});
