const fs = require("node:fs")

/*const data = `987654321111111
811111111111119
234234234234278
818181911112111`
*/

const data = fs.readFileSync('./day3data.txt').toString();

const banks = data.split('\r\n');

function findLargestDigit(str, start, found) {
    let largest = 0;
    let largestIndex = 0;
    let len = str.length;
    len -= 11 - found;
    for (let i=start;i<len;i++)
    {
        if (parseInt(str[i]) > largest) {
            largest = parseInt(str[i]);
            largestIndex = i;
        }
    }    

    return {largest: largest, idx: largestIndex}
}

function findJoltage(bank) {

    let digits = "";
    let lastidx = 0;
    for (let i=0;i<12;i++) {
        digit = findLargestDigit(bank,lastidx,i);
        digits += digit.largest.toString();
        lastidx = digit.idx+1;
    }
    return parseInt(digits);
}

let result = 0
for (let i=0;i<banks.length;i++)
{
    result += findJoltage(banks[i])
}

console.log(result);
