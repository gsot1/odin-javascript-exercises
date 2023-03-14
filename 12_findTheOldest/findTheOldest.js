const findTheOldest = function(people) {
    return people.reduce((oldest, curr) => {
        let prevAge;
        let currAge;

        if (!oldest.yearOfDeath) {
            prevAge = new Date().getFullYear() - oldest.yearOfBirth;
        } else {
            prevAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }

        if (!curr.yearOfDeath) {
            currAge = new Date().getFullYear() - curr.yearOfBirth;
        } else {
            currAge = curr.yearOfDeath - curr.yearOfBirth;
        }

        return prevAge < currAge ? curr : oldest;

    });
};

// Do not edit below this line
module.exports = findTheOldest;
