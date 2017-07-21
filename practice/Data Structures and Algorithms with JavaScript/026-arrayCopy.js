/**
 * Created by Adminstrator on 2017/7/19.
 */
var nums = [];
for(var i=0; i<10; ++i) {
    nums[i] = i+1;
}
var samenums = nums;
console.log("nums: " + nums);
samenums[0] = -1;
console.log("nums: " + nums);