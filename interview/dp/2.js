// 递归需要优化 尾递归
// 重复计算，大量的重复计算
// 算过的记忆下来  
// 用空间换时间

const fn = [];
const climbStairs  = function(n) {
    if(n == 1){
        return 1
    }   
    if(n == 2){
        return 2
    }
    if(fn[n] === undefined)
        fn[n] = climbStairs(n-1) + climbStairs(n-2); 
    return fn[n]
}
console.log(climbStairs(10));