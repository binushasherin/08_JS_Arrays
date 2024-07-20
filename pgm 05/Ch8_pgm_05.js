var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 2);

console.log(report);



const getDay = function(dayNumber) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (dayNumber >= 0 && dayNumber < daysOfWeek.length) {
        return daysOfWeek[dayNumber];
    } else {
        return "Invalid day number";
    }
};

console.log(getDay(dayInWeek)); 

const getVisitorReportMonth = function(monthArray, week, day) {
    if (week >= 0 && week < monthArray.length && day >= 0 && day < 7) {
        return monthArray[week][day];
    } else {
        return "Invalid week or day number";
    }
};


let week1 = [100, 150, 200, 250, 300, 350, 400];
let week2 = [110, 160, 210, 260, 310, 360, 410];
let week3 = [120, 170, 220, 270, 320, 370, 420];
let week4 = [130, 180, 230, 280, 330, 380, 430];

let month = [week1, week2, week3, week4];


console.log(getVisitorReportMonth(month, 2, 3)); 

console.log(getVisitorReportMonth(month, 0, 6));

console.log(getVisitorReportMonth(month, 1, 5)); 
console.log(getVisitorReportMonth(month, 3,2));

console.log(getVisitorReportMonth(month, 4, 1));  
console.log(getVisitorReportMonth(month, 1, 7)); 
