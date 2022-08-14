
let minusBtn = document.getElementById("minus");
let numberText = document.getElementById("number");
let addBtn = document.getElementById("add");
let hintText = document.getElementById("hint");

// DOM
let originalValue = 0;

// console.log(numberText.innerHTML);

minusBtn.onclick = () => {
  if (originalValue < 1) {
    hintText.style.opacity = 1;
  } else {
    originalValue = originalValue - 1;
    numberText.innerHTML = originalValue;
  }  
}

addBtn.onclick = () => {
  console.log("add clicked");
  originalValue = originalValue + 1;
  numberText.innerHTML = originalValue;
}