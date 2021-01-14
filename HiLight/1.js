function pigIt(str){
    str = str.split(" ");
    var str1 = /^[a-zA-Z]+$/
    for(var i=0;i<str.length-1;i++)
    { 
        str[i] = str[i].slice(1)+str[i].slice(0,1)+"ay";
    }
    if(str1.test(str[i]))
      str[i] = str[i].slice(1)+str[i].slice(0,1)+"ay";
    return  str.join(" ");
  
  }