import { readFileSync } from 'fs';
const input = readFileSync("six.txt", "utf8");

const matrix = input.trim().split('\n').map(line =>
  line.trim().split(/\s+/)
);

const line_size = matrix[0].length;
let total = 0;

for (let j = 0; j < line_size; j++){
    const symbol = matrix[matrix.length - 1][j];
    let local_total = 0;
        if (symbol == '*'){
            local_total = 1;
            for (let i = 0; i < matrix.length - 1; i++){
                local_total *= Number(matrix[i][j]);
            }
        } else {
            for (let i = 0; i < matrix.length - 1; i++){
                local_total += Number(matrix[i][j]);
            }
        }
    total += local_total;
}

console.log(total);
