var str = "the quick brown fox jumped over the lazy dog";
var arr = str.split(" ");
for(var i=0; i<arr.length; i++) {
	console.log("Word " + i + ": " + arr[i]);
}