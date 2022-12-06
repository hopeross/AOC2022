const { input } = require('./120622data');
inputString = input.toString();
let inputArray = inputString.split("");

function isUnique(str) {
    return new Set(str).size == str.length;
} 

for (i=0;i<inputArray.length;i++){

    tmp = inputArray[i] + inputArray[i+1] + inputArray[i+2] + inputArray[i+3];
    console.log(tmp)
    isMarker = isUnique(tmp);
    if (isMarker === true ) {
        markerLocation = i + 4;
        break;
    }
}

console.log(markerLocation);