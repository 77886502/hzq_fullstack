function swap (a,b) {
    a = a + b;
    b = a - b;
    a = a - b;
}
let arr = [2,1,2,2,1,2],length =0,maxLength=0;
arr.push(1);
arr[arr.length-1] = 2;
console.log(arr);
for(let i=0; i<arr.length; i++)
{
    if(arr[i]==2)
        length+=2;
    else
        length = 0;
    if(length>maxLength)
        maxLength = length;
}