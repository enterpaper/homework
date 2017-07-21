/**
 * Created by Adminstrator on 2017/7/19.
 */
function afterc(str) {
    if(str.indexOf("cie") > -1) {
        return true;
    }
    return false;
}
var words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
var misspelled = words.filter(afterc);
console.log(misspelled);