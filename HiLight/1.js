// codewars
function narcissistic(value) {
    if(value <= 10)
      return true;
    var number = new Array();
    var sum = 0;
    var target = value;
    var i=0;
    while(target!=0)
    {
        number[i]=target%10;
        target=Math.floor(target/=10);
        i++;
    }
    for(let i=0; i<number.length;i++)
    {   
       
       sum=sum+Math.pow(number[i],number.length);
    }
    console.log(sum);
    if(sum == value)
      return true;
    else
      return false;
}

console.log(narcissistic(371));