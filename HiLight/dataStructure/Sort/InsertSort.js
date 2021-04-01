// 插入排序 升序
// 用哨兵元素 item 记录当前元素 arr[i] 与前面有序元素进行比较
// 移动有序元素 arr[j+1] = arr[j]
// 直到遇到比当前元素arr[0]小的元素或到与头部元素比较完后结束
// 最后确定了 当前元素在有序元素中的位置 arr[j+1] = item
// 插入排序属于稳定排序
function InsertSort(arr){
    let item,j;
    for(let i=1;i<arr.length;i++)
    {
        item = arr[i];
        j = i-1;
        while(j>=0&&arr[j]>item)
        {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = item;
    }
    return arr;
}
console.log(InsertSort([1,4,2,3,5,7,6,8,9]));