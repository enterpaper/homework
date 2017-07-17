/**
 * Created by Adminstrator on 2017/7/17.
 */
var path = require("path");

// Normalization
console.log('normalization');
path.normalize('/test/test1//2slashes/1slash/tab/..');

// Join
console.log('joint path: ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve
console.log('resolve: ' + path.resolve('main.js'));

// extName
console.log('ext name: ' + path.extname('main.js'));