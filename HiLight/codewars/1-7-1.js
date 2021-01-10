// IQ Test
// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript
// 找出一堆数字中 一个偶数 或 一个奇数
function iqTest(numbers){
    var odd=0,even=0,x=null,y=null; 
    numbers = numbers.split(" ");
    for(let i=0; i<3; i++)
    {
      if(numbers[i]%2 == 0)
         even++;
      else
          odd++;
    }
    for(let i=0; i<numbers.length; i++)
    {
      if(even>odd&&numbers[i]%2 != 0)
        return i+1;
      if(odd>even&&numbers[i]%2 == 0)
        return i+1;
    }
  }
  console.log(iqTest('1 3 5 6 9'));
  