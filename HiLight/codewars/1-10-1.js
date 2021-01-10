// Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
// 所有五个或多个字母单词都反转
// Object.prototype.toString.call(); 输出变量类型
function spinWords(arr){
    arr = arr.split(" ");
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i].length>=5)
        arr[i] = arr[i].split("").reverse().join("");
    }
    arr = arr.join(" ");
    return arr;
  }
  console.log(spinWords("Hey fellow warriors"));