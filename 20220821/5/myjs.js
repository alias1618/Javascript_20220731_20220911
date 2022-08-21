
// DOM 元件
let boxOne = document.getElementById("box1");
let boxTwo = document.getElementById("box2");
let boxThree = document.getElementById("box3");

let boxOnClick = (e) => {
  console.log(e.target);
  console.log("Clicked")
  e.target.classList.add("active");
}

// Event 
boxOne.onclick = boxOnClick;
boxTwo.onclick = boxOnClick;
boxThree.onclick = boxOnClick;



