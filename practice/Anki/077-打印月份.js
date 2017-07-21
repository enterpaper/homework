var readline = require("readline");
readline = readline.toCreateInterface({
	input: process.stdin,
	output: process.stdout
});
readline.question("Enter a month number", function(mounthNum) {
	var mounthName = "";
	switch(mounthNum) {
		case "1":
			mounthName = "January";
			break;
		case "2":
			mounthName = "February";
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
			mounthName ="August";
			break;
		case "9":
			mounthName = "September";
			break;
		case "10":
			mounthName = "Octember";
			break;
		case "11":
			mounthName = "November";
			break;
		case "12":
			mounthName = "December";
			break;
		default:
			mounthName = "Bad input";
	}
	console.log(mounthName);
	readline.close();
});
readline.on("close", function(){
	process.exit(0);
});