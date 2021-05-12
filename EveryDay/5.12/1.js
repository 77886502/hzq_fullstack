function BubleSort(arr){
    if(arr.length<=1)
        return;
    for(let i=0; i<arr.length;i++)
    {
        let flag = true;
        for(let j=0; j<arr.length-i-1;j++)
        {
            if(arr[j]>arr[j+1]){
                flag = false;
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
           
        }
        if(flag)
            ;
        console.log("Hello");
    }
}
let arr = [1,2,3,4,5,6,7,8,9];
BubleSort(arr);
console.log(arr)