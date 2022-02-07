function equalArray(a, b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

let a = [1, 2, 3, 4];
let b = [1, 6];
let c = [1, 2, 3, 4];

console.log(equalArray(a, b));
console.log(equalArray(a, c));
console.log(equalArray(b, c));