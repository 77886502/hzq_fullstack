var getWinner = function(arr, k) {
    if(k>=arr.length||arr.length==2)
        return Math.max(...arr);
    let count=0,i=1,max = Math.max(...arr);
    while(count!=k&&arr[0]!=max)
    {
        if(arr[0]<arr[i])
        {    
            arr[0] = arr[i]
            count = 1;
        }
        else
            count++;
        i++;
    }
    return arr[0];
};

console.log(getWinner([2,1,3,5,4,6,7], 2));