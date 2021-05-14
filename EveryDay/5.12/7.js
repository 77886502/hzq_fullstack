function countSort(arr) {
    const n = arr.length;
    if(n <= 1) return;
    let count = new Array(Math.max(...arr)+1).fill(0);
    for(let i = 0; i < n; i++) {
        count[arr[i]]++;
    }
    for(let i = 1; i < count.length; i++) {
        count[i] += count[i-1]
    }
    let output = new Array(n).fill(0);
    for(let i = n -1; i >= 0; i--) {
        output[count[arr[i]]-1] = arr[i]
        count[arr[i]]--
    }
    return output
}
let a = [2,2,2,1,1,3,3,3];
console.log(countSort(a))
// 时间: n+k