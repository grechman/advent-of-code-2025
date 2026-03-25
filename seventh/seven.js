import { readFileSync } from 'fs';
const input = readFileSync("seven.txt", "utf8");

const matrix = input.trim().split('\n');
let start_pos;
let counter = 0;

for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] == 'S') { start_pos = i; break; }
}

let filled = new Array(matrix[0].length).fill(0);
filled[start_pos] = 1;

for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] == '^' && filled[j] != 0){
            counter++;
            filled[j + 1] += filled[j];
            filled[j - 1] += filled[j];
            filled[j] = 0;
        }
    }
}
console.log(counter);
console.log(filled.reduce((a, b) => a + b, 0));
