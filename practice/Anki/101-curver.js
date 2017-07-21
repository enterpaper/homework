function curver(arr, amount) {
	for(var i=0; i<arr.length; i++) {
		arr[i] += amount;
	}
}
var grades = [77, 73, 74, 81, 90];
curver(grades, 5)
console.log(grades);