function SelectSort(arr){
    if(arr.length<=1)
        return;
    for(let i=0;i<arr.length-1;i++)
    {
        let min = i;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[min]>arr[j])
                min = j;
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
}
// Sd=jhsaghjc