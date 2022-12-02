const { input } = require('./120222data');
let elfChoice = "";
let myChoice = "";
let totalScore = 0;

for (i=0; i<input.length; i++) {
    elfChoice = input[i].slice(0,1);
    myChoice = input[i].slice(2,3);
    
    switch (elfChoice){
        case "A":
            switch (myChoice) {
                case "X":
                    //rock-rock draw
                    totalScore = totalScore + 1 + 3;
                    break;
                case "Y":
                    //rock-paper win
                    totalScore = totalScore + 2 + 6;
                    break;
                case "Z":
                    //rock-sissors lose
                    totalScore = totalScore + 3 + 0;
                    break;
            }
            break;
        case "B":
            switch (myChoice) {
                case "X":
                    //paper-rock lose
                    totalScore = totalScore + 1 + 0;
                    break;
                case "Y":
                    //paper-paper draw
                    totalScore = totalScore + 2 + 3;
                    break;
                case "Z":
                    //paper-sicssors win
                    totalScore = totalScore + 3 + 6;
                    break;
            }
            break;
        case "C":
            switch (myChoice) {
                case "X":
                    //sissors-rock win
                    totalScore = totalScore + 1 + 6;
                    break;
                case "Y":
                    //sissors-paper lose
                    totalScore = totalScore + 2 + 0;
                    break;
                case "Z": 
                    //sissors-sissors draw
                    totalScore = totalScore + 3 + 3;
                    break;
            }
            break;
    }
}

console.log(totalScore);

//a=rock, b=paper, c=sissors
//x=rock, y=paper, z=sissors

//rock=1 point, paper=2 points, sissors=3points
//lose = 0 point, draw = 3 points, win = 6 points