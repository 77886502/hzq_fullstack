//    快速排序的思路
//    1. 核心: 为递归
//    2. 选择一个基准(p), 将大于这个放左边, 小于p放右边。
//    3. 将基准的左右两边在进行递归
const partition = (arr, head, tail) => {
    // 取一个基准值
    let pivot = arr[head];
    let index = head;
    for(let i=head+1;i <= tail;i++)
    {
        if(arr[i] < pivot)
        {
            index++;
            [arr[index],arr[i]] = [arr[i],arr[index]];
        }
    }
    [arr[head],arr[index]] = [arr[index],arr[head]];
    return index;
}
function quickSort(arr, head = 0, tail = arr.length-1) {
    const length = arr.length;
    if(length <= 1) return;
    if(head >= tail) return;
    let pivot = partition(arr, head, tail);
    quickSort(arr, head, pivot-1)
    quickSort(arr, pivot+1, tail)
}
let a = [1,3,5];
quickSort(a);
console.log(a)

// 空间复杂度  logn