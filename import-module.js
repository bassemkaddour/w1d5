var sortLib = require("./export-module")

var storeNum = sortLib.storeNumber;
var sortList = sortLib.sortList;

storeNum(3);
storeNum(2);
storeNum(3829);
storeNum(-12)

var result = sortList(storeNum(4));
console.log(result)
