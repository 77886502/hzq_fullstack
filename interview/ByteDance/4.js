/*
  36 10
  72 20
  73 21
  18
*/ 
function getNumber36(){
  var nums36 = [];
  for(var i =0;i<36;i++)
  {
    if(i>=0&& i<=9)
    {
      nums36.push(i);
    }
    else
    {
      nums36.push(String.fromCharCode(i+87));
    }
  }
  return nums36;  
}
function scale36(n){
  // 单独的功能函数
  // 36进制数 0-9  a-z 36?
  const arr = [];
  var nums36 = getNumber36();
  var res = n%36;
  n = parseInt(n/36);
  console.log(res);
  console.log(n)
  arr.push(n);
  arr.push(nums36[res]);
  console.log(arr)
  return arr.join("");
  
}
console.log(scale36(47998));