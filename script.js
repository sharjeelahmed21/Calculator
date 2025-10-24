const display = document.getElementById("display");

function append(value) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function calculate() {
  try {
    let result = eval(display.innerText.replace("÷", "/").replace("×", "*"));
    if (result === Infinity || isNaN(result)) throw "Error";
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}


document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "%", "."].includes(key)) {
    append(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    display.innerText = display.innerText.slice(0, -1) || "0";
  } else if (key === "Escape" || key.toLowerCase() === "c") {
    clearDisplay();
  }
});

