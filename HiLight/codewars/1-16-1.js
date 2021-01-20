//Double Cola
function whoIsNext(names, r){
    if(names.length>=r)
      return names[r-1];
    var n = names.length,i=1;
    while(r>n)
    {
      i++;
      n = names.length*(Math.pow(2,i)-1);
    }
    return names[names.length-Math.ceil((n-r+1)/Math.pow(2,i-1))];
  }
  let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
  console.log(whoIsNext(names,100));