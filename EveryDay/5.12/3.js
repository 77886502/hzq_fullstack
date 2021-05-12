function insertSort(arr){
    if(arr.length <= 1)
        return;
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i];
        let j = i-1;
        while(j>=0&&arr[j]>temp)
        {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
}
let arr = [9,2,3,4,5,6,7,8,9];
insertSort(arr);
console.log(arr)