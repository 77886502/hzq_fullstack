// Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
function high(x){
    x = x.split(" ");
    var str;
    var arr = new Array(x.length).fill(0);
    for(let i=0; i<x.length; i++)
    {
      str = x[i];
      for(let j=0; j<str.length; j++)
      {
        arr[i] = arr[i] + str.charCodeAt(j) - 96;
      }
  
    }
    for(let i=0; i<1; i++)
    {
      max=i
      for(let j=i+1; j<x.length; j++)
      {
        if(arr[max]<arr[j])
        {
          max = j;
        }
      }
    }
    return x[max];
  }
  console.log(high('what time are we climbing up the volcano'));