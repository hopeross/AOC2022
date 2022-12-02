const { input } = require('./120122data');
let calorieArray = [];
let num = 0;

for (let i=0; i<input.length - 1; i++){
    if (isNaN(input[i])) {
        calorieArray.push(num);
        num = 0;
    } else {
        num = num + input[i];
    }
}
calorieArray.sort(function(a, b){return b - a});
console.log(calorieArray[0]);