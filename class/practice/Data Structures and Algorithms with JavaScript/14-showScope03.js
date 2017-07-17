/**
 * Created by Adminstrator on 2017/7/17.
 */
function showScope() {
    scope = "local";
    return scope;
}
scope = "global";
console.log(scope);
console.log(showScope());
console.log(scope);