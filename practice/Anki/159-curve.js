function curver(arr, amount) {
	for(var i=0; i<arr.length; i++) {
		arr[i] += amount;
	}
}
var grades = [77, 73, 74, 81, 90];
console.log(grades);
curver(grades, 5);
console.log(grades); 