//reading from a file each line
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const rl = createInterface({
    input: createReadStream('third.txt'),
});

function toNumber(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total = (total * 10) + arr[i]
    }
    return total;
}

let total = 0;

//for the first task 12 -> 2
for await (const line of rl) {
    const len = line.length;
    const initial = [...line].map(Number);
    let final = new Array(12).fill(0);
    let pos = 0;

    for (let i = 11; i >= 0; i--){
        for (let j = pos; j < initial.length - i; j++){
            if (final[11 - i] < initial[j]){
                final[11 - i] = initial[j];
                pos = j + 1;
            }
        }
    }

    console.log(toNumber(final));
    total += toNumber(final);
}

console.log(total);
