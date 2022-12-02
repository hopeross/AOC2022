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
                    //rock lose sissors 
                    totalScore = totalScore + 0 + 3;
                    break;
                case "Y":
                    //rock draw rock
                    totalScore = totalScore + 3 + 1;
                    break;
                case "Z":
                    //rock win paper
                    totalScore = totalScore + 6 + 2;
                    break;
            }
            break;
        case "B":
            switch (myChoice) {
                case "X":
                    //paper lose rock
                    totalScore = totalScore + 0 + 1;
                    break;
                case "Y":
                    //paper draw paper
                    totalScore = totalScore + 3 + 2;
                    break;
                case "Z":
                    //paper win sissors
                    totalScore = totalScore + 6 + 3;
                    break;
            }
            break;
        case "C":
            switch (myChoice) {
                case "X":
                    //sissors lose paper
                    totalScore = totalScore + 0 + 2;
                    break;
                case "Y":
                    //sissors draw sissors
                    totalScore = totalScore + 3 + 3;
                    break;
                case "Z": 
                    //sissors win rock
                    totalScore = totalScore + 6 + 1;
                    break;
            }
            break;
    }
}

console.log(totalScore);

//a=rock, b=paper, c=sissors
//x=lose, y=draw, z=win

//rock=1 point, paper=2 points, sissors=3points
//lose = 0 point, draw = 3 points, win = 6 points