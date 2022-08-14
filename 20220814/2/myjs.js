let score = 55;

if (score >= 60) {
    console.log("及格啦");
}else if (score < 60 && score >= 40){
    console.log("差一點點");
}else {
    console.log("差的遠");
}


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

console.log(cars);

for (let i =0; i< cars.length; i++) {
    console.log(cars[i]);
}


for (let i = 0; i<10; i++) {
    console.log(i);
}

carsText =""
for (let i = 0; i < cars.length; i++){
    if(i === cars.length -1){
        carsText = carsText + cars[i];
    }else{
        carsText = carsText + cars[i] +" ";
    }
    
}
console.log(carsText);

let student = ["samual", "petter"];
studentText = ""
for (let i = 0; i < student.length; i++){
    studentText = studentText + student[i];
}

console.log(studentText);


// start="";
// for(let i = 0; i < 6; i++){
//     start = start + "*";
//     console.log(start);
// }


// for(let i = 0; i < 6; i++){
//     let output = "";
//     for (let x =0; x< i+1; x++){
//         output = output + '*';
//     }
//     console.log(output);
// }



// for(let i = 5; i >= 0; i--){
//     let output = "";

//     for (let x =0; x < i+1; x++){
//         output = output + '*';
//     }

//     console.log(output);
// }

/*
******
myjs.js:68 *****
myjs.js:68 ****
myjs.js:68 ***
myjs.js:68 **
myjs.js:68 *
*/

for(let i = 0; i < 5; i++){
    let output = "";

    for (let x = 0; x < (i+1)*2-1; x++){
        output = output + '*';
    }

    console.log(output);
}