
let minusBtn = document.getElementById("minus");
let numberText = document.getElementById("number");
let addBtn = document.getElementById("add");
let hintText = document.getElementById("hint");
let originalValue = 0;

minusBtn.onclick = () => {
  if (originalValue < 1) {
    hintText.style.opacity = 1;
    hintText.innerHTML = "數值不可小於 0";
  } else {
    hintText.style.opacity = 0;
    originalValue = originalValue - 1;
    numberText.innerHTML = originalValue;
  }  
}

addBtn.onclick = () => {
  
  if (originalValue > 9) {
    hintText.style.opacity = 1;
    hintText.innerHTML = "數值不可大於 10";
  } else {
    hintText.style.opacity = 0;
    originalValue = originalValue + 1;
    numberText.innerHTML = originalValue; 
  }
}