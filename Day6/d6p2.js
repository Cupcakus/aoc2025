const fs = require("node:fs")

/*
const exampleData = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +   `

const data = exampleData.split("\n");
*/
const data = fs.readFileSync("./day6data.txt").toString().split("\n");

const operators = {
    ADD: 1,
    MULTIPLY: 2
}

const colSizes = data[data.length-1].split(/(?=\S)/g).map((col) => {
    return col.length;
})

const cols = data.map((row) => {
    //Get number string
    let pos = 0;
    let curCol = 0;
    let retArray = new Array();
    while (pos < row.length) {
        const number = row.substring(pos, pos+colSizes[curCol]-1);
        retArray.push(number);
        pos += colSizes[curCol];
        curCol++;
    }

    return retArray;
})


let finalResult = 0;
for (let j=0;j<cols[0].length;j++) {
    let operator = operators.ADD;
    let result = 0;
    if (cols[cols.length-1][j].trim() == "*") operator = operators.MULTIPLY;
    for (let l=colSizes[j]-2;l>=0;l--) {
        let newNum = "";
        for (let k=0;k<cols.length-1;k++) {
            const number = cols[k][j];
            newNum += number[l];
        }
        switch (operator) {
            case operators.ADD:
                result += parseInt(newNum);
                break;
            case operators.MULTIPLY:
                result = result ? result * parseInt(newNum) : parseInt(newNum);
        }
    }
    finalResult += result;
}

console.log(finalResult);