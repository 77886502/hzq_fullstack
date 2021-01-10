// Your order, please
// https://www.codewars.com/kata/55c45be3b2079eccff00010f
function order(words){
    if(words.length==0)
      return words;
    var word = new Array;
    words = words.split(" ");
    var str = /[1-9]/;
    for(let i=0; i<words.length; i++)
    {
      word[str.exec(words[i])[0]-1]=words[i];
    }
    word = word.join(" ");
    return word;
  }
  console.log(order("4of Fo1r pe6ople g3ood th5e the2"));