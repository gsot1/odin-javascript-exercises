const palindromes = function (str) {
    
    let half1, half2;
    str = str.replace(/\W+/g, "").toLowerCase();

    if (str.length % 2 === 1) { // check for a middle letter to ignore
        half1 = str.slice(0, str.length/2);
        half2 = str.slice(str.length/2 + 1);
    } else {
        half1 = str.slice(0, str.length/2);
        half2 = str.slice(str.length/2);
    }

    return half1 === half2.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
