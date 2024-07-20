var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 2;

console.log( days[dayInWeek] );
console.log( days[dayInWeek - 1] );

const getDay = function(dayNumber) {
    const daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (dayNumber >= 0 && dayNumber < daysofWeek.length) {
        return daysofWeek[dayNumber];
    } else {
        return "Invalid day number";
    }
};

const dayName = getDay(3);
console.log(dayName);