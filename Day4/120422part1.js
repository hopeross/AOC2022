const { input } = require('./120422data');
let part1array = [];
let part2array = [];
let trueCount = 0;

for (i=0; i<input.length; i++ ){
    divider = input[i].indexOf(",");
    part1 = input[i].slice(0,divider);
    part2 = input[i].slice(divider + 1, input[i].length);
    part1divider = part1.indexOf("-");
    part1first = parseInt(part1.slice(0,part1divider));
    part1second = parseInt(part1.slice(part1divider+1,part1.length));
    part2divider = part2.indexOf("-");
    part2first = parseInt(part2.slice(0,part2divider));
    part2second = parseInt(part2.slice(part2divider+1,part2.length));

    for (j=part1first; j<=part1second; j++) {
        part1array.push(j);
    }
    for (j=part2first; j<=part2second; j++) {
        part2array.push(j);
    }

    const containsAll1 = part1array.every(element => {
        return part2array.includes(element);
    })
    
    const containsAll2 = part2array.every(element => {
        return part1array.includes(element);
    })

    console.log(tmp1, tmp2)

    if (tmp1 === true || tmp2 === true) {
        trueCount = trueCount + 1;
    }

    part1array = [];
    part2array = [];
}
console.log(trueCount)