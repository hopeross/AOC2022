const { input } = require('./120322data');
let itemLength = 0;
let half = 0;
let firstItem = "";
let secondItem = "";
let commonItem = "";
let individualValue = 0;
let totalValue = 0;

const commonCharacter = function (string1, string2) {
    let duplicateCharacter = "";
    for (let i = 0; i < string1.length; i += 1) {
        if (duplicateCharacter.indexOf(string1[i]) === -1) {
            if (string2.indexOf(string1[i]) !== -1) {
                duplicateCharacter += string1[i];
            }
        }
    }
    return [...duplicateCharacter];
};

for (i = 0; i < input.length; i++) {
    itemLength = input[i].length;
    half = itemLength / 2;
    firstItem = input[i].slice(0, half);
    secondItem = input[i].slice(half, itemLength);
    commonItem = commonCharacter(firstItem, secondItem);
    commonItem = commonItem.toString();
    charValue = commonItem.charCodeAt(0);

    if (charValue < 91) {
        individualValue = charValue - 64 + 26;
    } else {
        individualValue = charValue - 96;
    }
    totalValue = totalValue + individualValue;
}

console.log(totalValue);