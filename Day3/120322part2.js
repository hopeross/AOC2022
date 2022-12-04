const { input } = require('./120322data');
let totalValue = 0;

const commonCharacter = function (string1, string2, string3) {
    let duplicateCharacter = "";
    for (let i = 0; i < string1.length; i += 1) {
        if (duplicateCharacter.indexOf(string1[i]) === -1) {
            if (string2.indexOf(string1[i]) !== -1) {
                if (string3.indexOf(string1[i]) !== -1) {
                    duplicateCharacter += string1[i];
                }   
            }
        }
    }
    return [...duplicateCharacter];
};

for (i = 0; i < input.length; i = i + 3) {
    firstItem = input[i];
    secondItem = input[i+1];
    thirdItem = input[i+2];

    commonItem = commonCharacter(firstItem, secondItem, thirdItem);
    console.log(commonItem);
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