function towerBuilder(nFloors) {
  var tower = new Array();
  var  str1="*";
  var  str0="";
  var j=nFloors-1;
  for(let i=1;i<nFloors;i++)
  {
    str1=str1+"**"
  }
  for(let i=nFloors-1; i>=0; i--)
  {
    tower[i]=str0+str1+str0;
    str1=str1.slice(2);
    str0=str0+" ";
  }
  return tower;
}
console.log(towerBuilder(2));