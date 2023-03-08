const removeFromArray = function(arr, ...items) {
    if (!(arr instanceof Array)) return 'ERROR';
    return arr.filter((e) => !items.includes(e));
};

// Do not edit below this line
module.exports = removeFromArray;
