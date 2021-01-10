// Directions Reduction
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
function dirReduc(arr){
    var left = null;
    if(arr.length<2)
      return arr;
    for(let i=1; i<arr.length;)
    {
      if(arr[i]=="NORTH"&&arr[i-1]=="SOUTH")
      {
        arr.splice(i-1,2);
        i--;
      }
      else if(arr[i]=="SOUTH"&&arr[i-1]=="NORTH")
      {
        arr.splice(i-1,2);
        i--;
      }
      else if(arr[i]=="WEST"&&arr[i-1]=="EAST")
      {
        arr.splice(i-1,2);
        i--;
      }
      else if(arr[i]=="EAST"&&arr[i-1]=="WEST")
      {
        arr.splice(i-1,2);
        i--;
      }
      else
        i++;
    }
    return arr;
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));