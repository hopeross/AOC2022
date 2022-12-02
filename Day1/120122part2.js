const { input } = require('./120122data');
let calorieArray = [];
let num = 0;
let top3total = 0;

for (let i=0; i<input.length - 1; i++){
    if (isNaN(input[i])) {
        calorieArray.push(num);
        num = 0;
    } else {
        num = num + input[i];
    }
}
calorieArray.sort(function(a, b){return b - a});

top3total = calorieArray[0] + calorieArray[1] + calorieArray[2];
console.log(top3total);