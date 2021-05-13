function insertSort(arr){
    let left,right;
    for(let i=1;i<arr.length;i++){
        let temp = arr[i];
        left = 0;
        right = i-1;
        while(left <= right){
            let mid = Math.floor((left + right)/2);
            if(temp < arr[mid])
                right = mid - 1;
            else
                left = mid + 1;
        }
        for(j = i-1; j>=left; j--){
            arr[j+1] = arr[j];
        }
        arr[left] = temp;
    }    
}
let arr = [0,9,8,2,9,3,6,5,4,9];
/*
    4 5 7 9 1
    left =  0，right = 3
    mid = 1
    left = 0  right = 0
    mid = 0
    left = 1 




*/ 
insertSort(arr);
console.log(arr);