/**
 * Created by Adminstrator on 2017/7/19.
 */
function curve(grade) {
    return grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(newgrades);