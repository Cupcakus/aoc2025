const fs = require('node:fs')

const data = fs.readFileSync('./day1data.txt').toString().split('\r\n');
//const data = ["L68","L30","R48","L5","R60","L55","L1","L99","R14","L82"];

let position = 50;
let code = 0;
let previous = 50;

for (let i = 0; i < data.length; i++) {
    const direction = data[i].split("")[0];
    const value = parseInt(data[i].substring(1))
    if (direction == "L") {
        for (let x = 0;x < value; x++) {
            position--;
            if (position == 0) code++;
            if (position == -1) position = 99
            if (position == 100) {
                code++;
                position = 0;
            }
        }
    } else {
        for (let x = 0;x < value; x++) {
            position++;
            if (position == 0) code++;
            if (position == -1) position = 99
            if (position == 100) {
                code++;
                position = 0;
            }
        }
    }

}

console.log(code);