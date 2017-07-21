/**
 * Created by Adminstrator on 2017/7/19.
 */
function isEven(num) {
    return num % 2 == 0;
}
var nums = [2, 4, 6, 7, 8, 10];
var even = nums.every(isEven);
if(even) {
    console.log("all numbers are even");
} else {
    console.log("not all numbers are even");
}