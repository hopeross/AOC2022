const { input } = require('./120622data');
inputString = input.toString();
let inputArray = inputString.split("");
let tmp = "";

//console.log([inputString.split("")].map(x=>[...Array(x.length).keys()].map(i=>[i,[...Array(14).keys()].map(j=>x[i+j])]).filter(z=>new Set(z[1]).size==z[1].length))[0][0][0]+14)

// function isUnique(str) {
//     return new Set(str).size == str.length;
// } 

// for (i=0;i<inputArray.length;i++){

//     for (j=i;j<=i+14;j++) {
//         if (j < inputArray.length) {
//             tmp = tmp + inputArray[j];
//         }

//     }

//     console.log(tmp)
//     isMarker = isUnique(tmp);
//     console.log(isMarker)
//     if (isMarker === true ) {
//         markerLocation = i + 14;
//         break;
//     }
//     tmp = "";
// }

// console.log(markerLocation);