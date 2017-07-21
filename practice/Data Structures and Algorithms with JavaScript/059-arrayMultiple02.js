/**
 * Created by Adminstrator on 2017/7/19.
 */
Array.matrix = function(numrows, numclos, initial) {
    var arr = [];
    for(var i=0; i<numrows; ++i) {
        var columns = [];
        for(var j=0; j<numclos; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
};
var nums = Array.matrix(5, 5, 0);
console.log(nums[1][1]);
var names = Array.matrix(3, 3, "");
names[1][2] = "Joe";
console.log(names[1][2]);
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
console.log(grades[2][2]);