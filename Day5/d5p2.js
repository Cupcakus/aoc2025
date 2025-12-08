const fs = require("node:fs")
/*
const exampleData = `10-100
5-50
50-102
12-40
1-4
108-3200

1
5
8
11
17
32`

const data = exampleData.split("\n");
*/

const data = fs.readFileSync("./day5data.txt").toString().split("\n")

let ranges = []

for (let i=0;i<data.length;i++) {
    if (data[i] == "") break;
    const split = data[i].split("-")
    ranges.push({start: parseInt(split[0]), end: parseInt(split[1])});
}

let finalRanges = [];
let len = 0;
do {
    len = ranges.length;
    for (let x = 0; x < ranges.length; x++) {
        let foundRange = false;
        for (let y = 0; y < finalRanges.length; y++) {
            if (ranges[x].start >= finalRanges[y].start && ranges[x].start <= finalRanges[y].end && ranges[x].end > finalRanges[y].end) {
                foundRange = true;
                finalRanges[y].end = ranges[x].end;
            }
            else if (ranges[x].end <= finalRanges[y].end && ranges[x].end >= finalRanges[y].start && ranges[x].start < finalRanges[y].start ) {
                foundRange = true;
                finalRanges[y].start = ranges[x].start;
            }
            else if (ranges[x].start <= finalRanges[y].start && ranges[x].end >= finalRanges[y].end) {
                foundRange = true;
                finalRanges[y].start = ranges[x].start;
                finalRanges[y].end = ranges[x].end;
            }
            else if (ranges[x].start >= finalRanges[y].start && ranges[x].end <= finalRanges[y].end) {
                foundRange = true;
            }
        }
        if (!foundRange) {
            finalRanges.push(ranges[x]);
        }
    }
    ranges = Array.from(finalRanges);
    finalRanges = [];
} while (len != ranges.length)

let sum = 0;
for (let j=0;j<ranges.length;j++) {
    sum += ranges[j].end - ranges[j].start + 1 
}

console.log(sum);