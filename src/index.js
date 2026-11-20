let newCounter = 0;

function increase() {
  newCounter = newCounter + 1;
  counterElement.innerHTML = newCounter;
}

function decrease() {
  newCounter = newCounter - 1;
  counterElement.innerHTML = newCounter;
}
let counterElement = document.querySelector("#counter");
let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let resetButton = document.querySelector("#reset");


function resetNumber() {
    newCounter = 0;
    counterElement.innerHTML = newCounter;
}

plusButton.addEventListener("click", increase);
minusButton.addEventListener("click", decrease);
resetButton.addEventListener("click", resetNumber);
