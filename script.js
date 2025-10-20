let display = document.getElementById("display");

function playSound() {
  let audio = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
  audio.play();
}

function append(value) {
  playSound();
  if (display.innerText === "0") {
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
    display.innerText = eval(
      display.innerText.replace("÷", "/").replace("×", "*")
    );
  } catch {
    display.innerText = "Error";
  }
}
