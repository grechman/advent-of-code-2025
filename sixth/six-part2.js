import { log } from 'console';
import { readFileSync } from 'fs';
const input = readFileSync("six.txt", "utf8");

const matrix = input.trim().split('\n');
const operations = matrix[matrix.length - 1].trim().split(/\s+/);
let currop = operations.length - 1;
const line_size = matrix[2].length;
let total = 0;
let local_total = 0;

for (let j = line_size - 1; j >= 0; j--){
    let x = '';
    for (let i = 0; i < matrix.length - 1; i++){
        x += matrix[i][j];
    }

    if (isNaN(parseInt(x))) {
        total += local_total;
        local_total = 0;
        currop--;
        continue;
    }

    if (local_total == 0) { local_total = Number(x); }
    else {
        if (operations[currop] == '*'){ local_total *= Number(x); }
        else { local_total += Number(x); }
    }
}

console.log(total + local_total);

