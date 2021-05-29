var Flatten = function(arr){
    var str = '['+JSON.stringify(arr).replace(/[\[|\]]/g,'')+']';
    return JSON.parse(str);
}
var arr = [1,[2,3,[4],[5]],6,[[[[7]],8],9]];
console.log(Flatten(arr)); //[1,2,3,4,5,6,7,8,9]