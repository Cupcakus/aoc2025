const fs = require('node:fs')

const data = fs.readFileSync('./day2data.txt').toString().split(',');
//const data = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124".split(",")

let sum = 0;

function checkForPattern(num) {
    const numStr = num.toString();
    const start = numStr.substring(0, numStr.length/2)
    const end = numStr.substring(numStr.length/2)
    if (start === end) {
        return num;
    }

    return 0;
}

for (let i = 0; i < data.length; i++) {
    const range = data[i].split("-");
    for (x=parseInt(range[0]);x<parseInt(range[1]);x++) {
        sum += checkForPattern(x);
    }
}

console.log(sum);