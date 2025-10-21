const display = document.getElementById("display");

function playSound() {
  const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
  audio.volume = 0.2;
  audio.play();
}

function append(value) {
  playSound();
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  playSound();
  display.innerText = "0";
}

function calculate() {
  playSound();
  try {
    let result = eval(display.innerText.replace("÷", "/").replace("×", "*"));
    if (result === Infinity || isNaN(result)) throw "Error";
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}

// ✅ Keyboard Support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "%", "."].includes(key)) {
    append(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    playSound();
    display.innerText = display.innerText.slice(0, -1) || "0";
  } else if (key === "Escape" || key.toLowerCase() === "c") {
    clearDisplay();
  }
});
