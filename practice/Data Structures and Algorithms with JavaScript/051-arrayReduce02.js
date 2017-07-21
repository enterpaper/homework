/**
 * Created by Adminstrator on 2017/7/19.
 */
function concat(accumulatedString, item) {
    return accumulatedString + item;
}
var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduce(concat);
console.log(sentence);