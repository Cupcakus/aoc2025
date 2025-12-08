const fs = require("node:fs")

/*
const exampleData = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`

const rollsTemp = exampleData.split('\n');
*/

const rollsTemp = fs.readFileSync("./day4data.txt").toString().split("\r\n");

const rolls = rollsTemp.map((str) => {
    return str.split('');
})

function countNeighbors(x,y) {
    let count = 0;
    //console.log(x,y, rolls.length);
    if (x > 0 && y > 0 && rolls[y-1][x-1] == "@") count++;
    if (y > 0 && rolls[y-1][x] == "@") count++;
    if (y > 0 && x < rolls[0].length-1 && rolls[y-1][x+1] == "@") count++;
    if (x > 0 && rolls[y][x-1] == "@") count++;
    if (x < rolls[0].length-1 && rolls[y][x+1] == "@") count++;
    if (y < rolls.length-1 && x > 0 && rolls[y+1][x-1] == "@") count++;
    if (y < rolls.length-1 && rolls[y+1][x] == "@") count++;
    if (y < rolls.length-1 && x < rolls[0].length-1 && rolls[y+1][x+1] == "@") count++;

    return count;
}

let total = 0
let sum = 0;
do {
    sum = 0;
    for (let y=0;y<rolls.length;y++) {
        for (let x=0;x<rolls[0].length;x++) {
            if (rolls[y][x] != "@") continue;
            if (countNeighbors(x,y) < 4) {
                sum++;
                rolls[y][x] = "X";
            }
        }
    }
    total += sum;
} while (sum > 0);

console.log(total);