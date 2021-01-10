// Count the smiley faces!
// https://www.codewars.com/kata/583203e6eb35d7980400002a
function countSmileys(arr) {
  var str=/[:|;][-|~]?[D|)]/,num=0;
  for(let i=0; i<arr.length; i++)
  {
    if(str.test(arr[i]))
      num++;
  }
  return num;
}
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));