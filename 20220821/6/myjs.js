

// DOM 元件
let boxElements = document.getElementById("boxs").children;
// let boxOne = document.getElementById("box1");
// let boxTwo = document.getElementById("box2");
// let boxThree = document.getElementById("box3");
// let boxFour = document.getElementById("box4");
// let boxFive = document.getElementById("box5");

let boxOnClick = (e) => {
  console.log(e.target);
  console.log("Clicked")
  e.target.classList.add("active");
}

for (element of boxElements) {
  element.onclick = boxOnClick;
}

// Event 
// boxOne.onclick = boxOnClick;
// boxTwo.onclick = boxOnClick;
// boxThree.onclick = boxOnClick;
// boxFour.onclick = boxOnClick;
// boxFive.onclick = boxOnClick;




