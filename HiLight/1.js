let arr = [1,1,2,2,3,3,4,5,5],res=0 ;
for(let i=0;i<arr.length;i++)
{
    if(arr.IndexOf(arr[i])==arr.lastIndexOf(arr[i]))
        return arr[i];
}