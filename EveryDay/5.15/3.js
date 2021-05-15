function radixSort(arr){
    if(arr.length<=1)
        return;
    let max = Math.max(...arr);
    let maxDigt = 0;
    let bucket = ;
    while(max)
    {
        max = Math.floor(max/10);
        maxDigt++;
    }
    for(let i=0; i<maxDigt; i++)
    {
        for(let j=0;j<arr.length;j++)
        {
           bucket[arr[j]%10**(i+1)].push(arr[j]);
        }
    }
    return bucket;
}
let arr = [0,9,2,8,3,7,4,6,5,1];
for(let j=0;j<arr.length;j++)
{
    // console.log(arr[j]);
}
console.log(radixSort(arr));