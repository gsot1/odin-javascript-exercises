const leapYears = function(year) {
    if (typeof year !== "number") return 'ERROR';

    if (year % 100 === 0) {
        return year % 400 === 0 ? true : false;
    } else {
        return year % 4 === 0 ? true : false;
    }
};

// Do not edit below this line
module.exports = leapYears;
