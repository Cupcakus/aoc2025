const fs = require("node:fs")

/*
const exampleData = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`

const data = exampleData.split("\n");
*/

const data = fs.readFileSync("./day5data.txt").toString().split("\r\n");

const freshRanges = new Array()
const ids = new Array();

let i = 0;
for (i=0;i<data.length;i++) {
    
    if (data[i] == "") break;
    const range = data[i].split("-");
    freshRanges.push({start: parseInt(range[0]), end: parseInt(range[1])});
}

for (i=i+1;i<data.length;i++) {
    ids.push(parseInt(data[i]))
}

let count = 0;
for (let x=0;x<ids.length;x++) {
    for (let y=0;y<freshRanges.length;y++) {
        if (ids[x] >= freshRanges[y].start && ids[x] <= freshRanges[y].end) {
            count++;
            break;
        }
    }
}

console.log(count);