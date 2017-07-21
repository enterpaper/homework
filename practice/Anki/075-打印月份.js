var readline = require("readline");
readline = readline.toCreateInterface({
	input: process.stdin,
	output: process.stdout
});
readline.question("Enter a month number", function(mounthNum) {
	var mounthName = "";
	switch(mounthNum) {
		case "1":
			mounthName = "Januray";
			break;
		case "2":
			mounthName = "Feburay";
			break;
		case "3":
			mounthName = "March";
			break;
		case "4":
			mounthName = "April";
			break;
		case "5":
			mounthName = "May";
			break;
		case "6":
			mounthName = "June";
			break;
		case "7":
			mounthName = "July";
			break;
		case "8":
			mounthName = ""
	}
});