class DSU {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((_, i) => i);
        this.rank = new Array(n).fill(0);
    }
    find(x) {
        if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
    union(a, b) {
        let ra = this.find(a), rb = this.find(b);
        if (ra === rb) { return; }
        if (this.rank[ra] < this.rank[rb]) { [ra, rb] = [rb, ra]; }
        this.parent[rb] = ra;
        if (this.rank[ra] === this.rank[rb]) { this.rank[ra]++; }
    }
}

import { readFileSync } from 'fs';
//hardcoded arr.length = 1000
function put_in_place(num, arr, pairs, i, j){
    let destination = 999;
    if (arr[999] > num){
        arr[999] = num;
        for(let i = 998; i >= 0; i--){
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
                destination = i;
            } else {
                break;
            }
        }
        pairs.splice(destination, 0, [i, j]);
        if (pairs.length > 1000) { pairs.pop(); }
        return true;
    } else return false;
}
function isin(num, arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == num) { return true; }
    }
   return false;
}

const input = readFileSync("eight.txt", "utf8");
const matrix = input.trim().split('\n').map(row => row.split(',').map(Number));
let pairs = [];

let distances = new Array(1000).fill(Infinity);

for (let i = 0; i < matrix.length; i++){
    for (let j = i + 1; j < matrix.length; j++){
        const delta_x = Math.abs(matrix[i][0] - matrix[j][0])
        const delta_y = Math.abs(matrix[i][1] - matrix[j][1])
        const delta_z = Math.abs(matrix[i][2] - matrix[j][2])
        const dist = delta_x * delta_x + delta_y * delta_y + delta_z * delta_z;

        put_in_place(dist, distances, pairs, i, j);

        //now we have a 1000 shortest distances and their
        //nodes. we can find all connected nodes and count
        //i < y !
    }
}

let dsu = new DSU(matrix.length);
for (let [i, j] of pairs) {
  dsu.union(i, j);
}

let groups = new Map();
for (let i = 0; i < matrix.length; i++) {
  let root = dsu.find(i);
  groups.set(root, (groups.get(root) || 0) + 1);
}

let sizes = [...groups.values()].sort((a, b) => b - a);
console.log(sizes[0] * sizes[1] * sizes[2]);

//now we need to count all of them so my optimisations is not working

