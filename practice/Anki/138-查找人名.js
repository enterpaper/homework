var readline = require("readline");
readline = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
readline.question("Enter a name to search for: ", function(name) {
	var names = ["David", "Cynthia", "Raymoon", "Clayton", "Jennifer"];
	var position = names.indexOf(name);
	if(position >= 0) {
		console.log("Found " + name + " at position " + position + " in array");
	} else {
		console.log(name + " not found in array");
	}
	readline.close();
});
readline.on("close", function() {
	process.exit(0);
});