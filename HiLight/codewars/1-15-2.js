// 三个1 => 1000分 三个6=>600分 三个5=>500分 三个4=>400分
// 三个3=>300分 三个2=>200分 一个1 => 100分 一个5分=>50分
//  一个骰子在每次掷骰中只能计算一次。
// 例如，一个给定的 "5 "只能算作三倍积分的一部分（贡献500分）或单个50分，但不能在同一卷中同时计算。
// Greed is Good
function score( dice ) {
    var num = 0;
    var number = new Array(6).fill(0);
    for(let i=0;i<dice.length;i++)
    {
      number[dice[i]-1]++;
    }
    console.log(number);
    if(number[0]==6)
      return 2000;
    else if(number[0]>=3)
      num = num+1000+(number[0]-3)*100;
    else 
      num = num+number[0]*100;
  
    if(number[4]==6)
      return 1000;
    else if(number[4]>=3)
      num = num+500+(number[4]-3)*50;
    else 
      num = num+number[4]*50;
    
    for(let i=1;i<number.length;i++)
    {
      if(number[i]==0||i==4){
        continue; 
      }
      else if(number[i]==6){
        return num + (i+1)*200;
      }
      else if(number[i]>=3){
          num = num + (i+1)*100;
      }
    }
    return num;
  }
  console.log(score([2, 4, 4, 5, 4]));