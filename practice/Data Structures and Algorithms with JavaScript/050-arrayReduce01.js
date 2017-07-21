/**
 * Created by Adminstrator on 2017/7/19.
 */
function add(runningTotal, currentValue) {
    console.log("( " + runningTotal + ", " + currentValue + " ) --> " + (runningTotal+currentValue));
    return runningTotal + currentValue;
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = nums.reduce(add);
console.log(sum);