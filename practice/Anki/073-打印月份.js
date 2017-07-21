var readline = require("readline");
readline = readline.toCreateInterface({
	input: process.stdin,
	output: process.stdout
});
readline.question("Enter a month number", function(month) {
	switch(month) {
		case "1":
			console.log("");
	}
});