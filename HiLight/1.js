// 1. 数组中的成员类型相同，顺序可以不同。例如[1, true] 与 [false, 2]是相似的。
// 2. 数组的长度一致。
// 3. 类型的判断范围，需要区分:String, Boolean, Number, undefined, null, 函数，日期, window.
function arraysSimilar(arr1, arr2){
  if(arr1.length!=arr2.length)
    return false;
  for(let i=0;i<arr1.length;i++)
  {
    arr1[i]=Object.prototype.toString.call(arr1[i]);
    arr2[i]=Object.prototype.toString.call(arr2[i]);
  }
  arr1.sort();
  arr2.sort();
  for(let i=0;i<arr1.length;i++)
  {
    if(arr1[i]!=arr2[i])
      return false;
  }
  return true;
}
console.log(arraysSimilar(["abc"],["cba"]));