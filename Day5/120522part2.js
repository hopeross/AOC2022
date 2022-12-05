const { input } = require('./120522data');
let quantity = 0;
let crateSource = 0;
let crateDestination = 0;
let topCrates = "";
let crateHolder = [];
let tempArray = [];

//till I figure out how to read this crap in it's hardcoded
// puzzle example
// arrayOne = [ "[Z]", "[N]"];
// arrayTwo = [ "[M]", "[C]", "[D]"];
// arrayThree = [ "[P]" ];

// for reals data
arrayOne = ["[W]", "[R]", "[F]"]
arrayTwo = ["[T]", "[H]", "[M]", "[C]", "[D]", "[V]", "[W]", "[P]"]
arrayThree = ["[P]", "[M]", "[Z]", "[N]", "[L]"]
arrayFour = ["[J]", "[C]", "[H]", "[R]"]
arrayFive = ["[C]", "[P]", "[G]", "[H]", "[Q]", "[T]", "[B]"]
arraySix = ["[G]", "[C]", "[W]", "[L]", "[F]", "[Z]"]
arraySeven = ["[W]", "[V]", "[L]", "[Q]", "[Z]", "[J]", "[G]", "[C]"]
arrayEight = ["[P]", "[N]", "[R]", "[F]", "[W]", "[T]", "[V]", "[C]"]
arrayNine = ["[J]", "[W]", "[H]", "[G]", "[R]", "[S]", "[V]"]

function crateArranger(tempArray) {
    tmp = tempArray.length;
    console.log(tmp);

    for (k = 0; k < tmp; k++) {
        switch (crateDestination) {
            case 1:
                arrayOne.push(tempArray[k]);
                console.log(arrayOne);
                break;
            case 2:
                arrayTwo.push(tempArray[k]);
                console.log(arrayTwo);
                break;
            case 3:
                arrayThree.push(tempArray[k]);
                console.log(arrayThree);
                break;
            case 4:
                arrayFour.push(tempArray[k]);
                console.log(arrayFour);
                break;
            case 5:
                arrayFive.push(tempArray[k]);
                console.log(arrayFive);
                break;
            case 6:
                arraySix.push(tempArray[k]);
                console.log(arraySix);
                break;
            case 7:
                arraySeven.push(tempArray[k]);
                console.log(arraySeven);
                break;
            case 8:
                arrayEight.push(tempArray[k]);
                console.log(arrayEight);
                break;
            case 9:
                arrayNine.push(tempArray[k]);
                console.log(arrayNine);
                break;
        }
    }

}

for (i = 0; i < input.length; i++) {
    movePos = input[i].search("move");
    fromPos = input[i].search("from");
    toPos = input[i].search("to");
    endingPos = input[i].length;
    quantity = parseInt(input[i].slice(movePos + 5, fromPos - 1));
    crateSource = parseInt(input[i].slice(fromPos + 5, toPos - 1));
    crateDestination = parseInt(input[i].slice(toPos + 3, endingPos));
    console.log(`quantity: ${quantity}, from stack: ${crateSource}, to stack: ${crateDestination} `);

    for (j = 0; j < quantity; j++) {
        switch (crateSource) {
            case 1:
                crateHolder = arrayOne.pop();
                break;
            case 2:
                crateHolder = arrayTwo.pop();
                break;
            case 3:
                crateHolder = arrayThree.pop();
                break;
            case 4:
                crateHolder = arrayFour.pop();
                break;
            case 5:
                crateHolder = arrayFive.pop();
                break;
            case 6:
                crateHolder = arraySix.pop();
                break;
            case 7:
                crateHolder = arraySeven.pop();
                break;
            case 8:
                crateHolder = arrayEight.pop();
                break;
            case 9:
                crateHolder = arrayNine.pop();
                break;
        }
        tempArray.push(crateHolder);
    }
    tempArray = tempArray.reverse();
    crateArranger(tempArray);
    tempArray = [];
}

let x = 1;
while (x <= 9) {

    switch (x) {
        case 1:
            tmp = arrayOne.pop();
            break;
        case 2:
            tmp = arrayTwo.pop();
            break;
        case 3:
            tmp = arrayThree.pop();
            break;
        case 4:
            tmp = arrayFour.pop();
            break;
        case 5:
            tmp = arrayFive.pop();
            break;
        case 6:
            tmp = arraySix.pop();
            break;
        case 7:
            tmp = arraySeven.pop();
            break;
        case 8:
            tmp = arrayEight.pop();
            break;
        case 9:
            tmp = arrayNine.pop();
            break;
    }

    tmp = tmp.slice(1, 2);
    topCrates = topCrates + tmp;
    tmp = ""
    x++
}

console.log(topCrates)