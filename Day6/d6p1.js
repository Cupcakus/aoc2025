const fs = require("node:fs")

/*
const exampleData = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `

const data = exampleData.split("\n");
*/

const data = fs.readFileSync("./day6data.txt").toString().split("\n");

const operators = {
    ADD: 1,
    MULTIPLY: 2
}

const cols = data.map((row) => {
    return row.trim().split(/\s{1,}/g);
})

console.log(data)

let finalResult = 0;
for (let x=0;x<cols[0].length;x++) {
    //Find operator
    let operator = operators.ADD;
    if (cols[cols.length-1][x] == "*") operator = operators.MULTIPLY;
    let result = 0;
    for (let y=0;y<cols.length-1;y++) {
        switch (operator) {
            case operators.ADD:
                result += parseInt(cols[y][x]);
                break;
            case operators.MULTIPLY:
                result = result ? result * parseInt(cols[y][x]) : parseInt(cols[y][x]);
        }
    }
    finalResult += result;
}

console.log(finalResult)
