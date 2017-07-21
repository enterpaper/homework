/**
 * Created by Adminstrator on 2017/7/19.
 */
var nums = [2, 3, 4, 5];
console.log(nums);
var newnum = 1;
nums.unshift(newnum);
console.log(nums);
nums = [3, 4, 5];
nums.unshift(newnum, 2);
console.log(nums);