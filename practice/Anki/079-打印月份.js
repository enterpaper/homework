var readline = require("readline");
readline = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
readline.question("Enter a month number", function(monthNum) {
	var monthName = "";
	switch(monthNum) {
		case "1":
			monthName = "January";
			break;
		case "2":
			monthName = "February";
			break;
		case "3":
			monthName = "March";
			break;
		case "4":
			monthName = "April";
			break;
		case "5":
			monthName = "May";
			break;
		case "6":
			monthName = "June";
			break;
		case "7":
			monthName = "July";
			break;
		case "8":
			monthName = "August";
			break;
		case "9":
			monthName = "September";
			break;
		case "10":
			monthName = "October";
			break;
		case "11":
			monthName = "November";
			break;
		case "12":
			monthName = "December";
			break;
		default:
			monthName = "Bad input";
			break;
	}
	console.log(monthName);
	readline.close();
});
readline.on("close", function() {
	process.exit(0);
});