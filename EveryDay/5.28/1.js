var faltten = function(arr){
    var Arr = [];
    for(var i=0; i<arr.length;i++)
    {
        if(Array.isArray(arr[i]))
            Arr = Arr.concat(faltten(arr[i]))
        else
            Arr.push(arr[i])
    }
    return Arr;
}
var arr = [1,[2],[[3],4,[5,[6]]]];
console.log(faltten(arr));