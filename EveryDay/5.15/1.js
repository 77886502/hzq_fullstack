function heapSort(){

}
class binaryHeap {
    static buildHead(arr){
        for(let i = Math.floor((arr.length-2)/2);i>=0;i--)
        {
            arr =  binaryHeap.downAdjust(arr,i);
        }
        return arr;
    }
    static downAdjust(arr,parent){
        let temp = arr[parent];
        let child = 2 * parent + 1;
        while (child < arr.length) {
            //如果右孩子节点比左孩子小，则定位到右孩子
            if (child + 1 < arr.length && arr[child] > arr[child + 1]) {
                child++;
            }
            //如果父节点比孩子节点小或等于，则下沉结束
            if (temp <= arr[child])
                break;
            //单向赋值
            arr[parent] = arr[child];
            parent = child;
            child = 2 * parent + 1;
        }
        arr[parent] = temp;
        return arr;
    }
    static upAdjust(arr){
        //标记插入的节点
       let child = arr.length - 1;
       //其父亲节点
       let parent = Math.floor((child - 1)/2);
       //把插入的节点临时保存起来
       let temp = arr[child];

       //进行上浮
       while (child > 0 && temp < arr[parent]) {
           //其实不用进行每次都进行交换，单向赋值就可以了
           //当temp找到正确的位置之后，我们再把temp的值赋给这个节点
           arr[child] = arr[parent];
           child = parent;
           parent = Math.floor((child - 1) / 2);
       }
       //退出循环代表找到正确的位置
       arr[child] = temp;
       return arr;
    }
}
let arr = [6,5,7,8,9,1,2,3];
arr = binaryHeap.buildHead(arr);
for (int i = length - 1; i >= 1; i--) {
    //把堆顶的元素与最后一个元素交换
    int temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;
    //下沉调整
    arr = downAdjust(arr, 0, i);
}
arr = binaryHeap.downAdjust(arr,)