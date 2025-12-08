const fs = require('node:fs')

const data = fs.readFileSync('./day2data.txt').toString().split(',');
let sum = 0;

function checkForPattern(num) {
    const numStr = num.toString();
    let matching = true;
    let i=1;
    if (numStr.length == 1) return 0;
    for (i=1;i<=numStr.length/2;i++) {
        matching = true;
        for (x=0;x+i<numStr.length;x+=i) {
            let tmp = numStr;
            let start = tmp.substring(x, x+i)
            let last = tmp.substring(x+i,x+i+i)
            if (start !== last) {
                matching = false;
                break;
            }
        }
        if (matching) break;
    }

    if (matching) 
    {
        return num;
    }

    return 0;
}

for (let i = 0; i < data.length; i++) {
    const range = data[i].split("-");
    const start = parseInt(range[0])
    const end = parseInt(range[1])
    for (let x=start;x<=end;x++) {
        sum += checkForPattern(x);
    }
}

console.log(sum);