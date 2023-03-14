const fibonacci = function(x) {
    x = Number(x);
    if (x === NaN || x < 1) return 'OOPS';
    
    let seq = [0, 1];

    for (let i = 2; i <= x; i++) {
        seq[i] = seq[i - 2] + seq[i - 1];
    }

    return seq[seq.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
