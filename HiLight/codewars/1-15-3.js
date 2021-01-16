// String incrementer
function incrementString (strng) {
    var str = /\d+/,num , res=[];
    if(str.test(strng))
    {
      num = parseInt(str.exec(strng)[0])+1;
      if(num.toString().length>str.exec(strng)[0].length)
        return strng.slice(0,strng.search(str))+num;
      else
      {
        res = str.exec(strng)[0].split("");
        res.length = res.length - num.toString().length;
        return strng.slice(0,strng.search(str))+res.join("")+num;
      }
    }
    else
    {
       return strng+'1';
    }
  }