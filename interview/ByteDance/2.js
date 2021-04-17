//不要追求完美 上岸就好
//写好类似leetcode函数,测试用例,用例结果
//提供36位的表达
function getNum36(){
  var nums36=[];
  for(var i=0;i<36;i++){
      if(i>=0 && i <=9){
          nums36.push(i)
      }else{
          nums36.push(String.fromCharCode(i+87));
      }
  }
  console.log(nums36,'-------');
  return nums36;
}
function scale36(n){
  const arr =[];
  var nums36=getNum36();
  // 36 10 
  while(n){
      // 动态
      var res=n%36;
      console.log(res,'++++');
      arr.unshift(nums36[res]);
      // 进位
      n=parseInt(n/36);
      console.log(n,'*********');
  }
  // 单独的功能函数
  // 36进制数 0-9 a-f.... z 正好36 
}
console.log(scale36(10));//10 10
