var nums = [];
for(var i=0; i<10; i++) {
	nums[i] = i+1;
}
var samenums = [];
samenums = nums;
console.log(samenums);
nums[0] = -1;
console.log(samenums);