var nums = [1, 2, 3, 4, 5];
var samenums = [];
for(var i=0; i<nums.length; i++) {
	samenums[i] = nums[i];
}
console.log(samenums);
nums[0] = 100;
console.log(samenums);