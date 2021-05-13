function quickSort(arr,head = 0,tail = arr.length - 1){
    if(arr.length <= 1)
        return;
    if(head>=tail)
        return;
    let pivot = arr[head];
    let left = head,right = tail;
    while(left<right)
    {
        while(left<right&&pivot<arr[right])
        {
            right--;
        }
        if(left<right)
        {
            arr[left] = arr[right];
            left++;
        }
        while(left<right&&pivot>arr[left])
        {
            left++;
        }
        if(left<right)
        {
            arr[right] = arr[left];
            right--;
        }
    }
    arr[left] = pivot;
    quickSort(arr,head,left-1);
    quickSort(arr,right+1,tail);
}