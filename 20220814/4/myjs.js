
let minusBtn = document.getElementById("minus");
let numberText = document.getElementById("number");
let addBtn = document.getElementById("add");

// DOM
let originalValue = 0;

minusBtn.onclick = () => {
  console.log("minus clicked");
  originalValue = originalValue - 1;
  numberText.innerHTML = originalValue;
}

addBtn.onclick = () => {
  console.log("add clicked");
  originalValue = originalValue + 1;
  numberText.innerHTML = originalValue;
}