var str="climbing";
var num =0;
for(let i=0; i<str.length; i++)
{
  num = num + str.charCodeAt(i)-96;
}
console.log(num);