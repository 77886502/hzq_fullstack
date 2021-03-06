## 题目描述
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

[来源：力扣（LeetCode）](https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/)

示例 1：
```
输入：n = 2
输出：2
```
示例 2：
```
输入：n = 7
输出：21
```
示例 3：
```
输入：n = 0
输出：1
```
提示：
- 0 <= n <= 100

## 题目分析

这道题目和爬楼梯的题目一样，属于动态规划的入门题。
动态规划的基本思路，一般要找状态转移方程，确认边界，定义一个数组来记录状态转移过程中一些计算结果，从而避免进行无意义的重复计算。本题具体分析如下：

🐸 每次可以跳 `1` 或 `2` 个台阶，假设有函数 `f(n)=m` 表示跳 `n` 阶楼梯有 `m` 种方法。

当n

当 `n=1` 时，有 `f(1)=1` 种方法。`1`

当 `n=2` 时，有 `f(2)=2` 种方法。`1+1，2`

当 `n=3` 时，有 `f(3)=3` 种方法。`1+2，1+1+1，2+1`

当 `n=n` 时，有 `f(n)=n` 种方法。

当走到第 `n` 阶时，有两种情况

1. 从 `n-1` 阶出发,选择走1阶
2. 从 `n-2` 阶出发,选择走2阶

从而得到 转移状态方程 `f(n)=f(n-1)+f(n-2)，(n>=3)。`


当然随着阶梯的变多，结果则会超出整型的表示范围。所以题目的提示我们要对其求模。

## AC代码

时间复杂度：O(n)，空间复杂度：O(n)
```JS
var numWays = function(n) {
    let nums = [1,1,2];
    if(n<=3)
        return nums[n];
    for(let i=3;i<=n;i++)
    {
        // 时刻注意求模，你不知道什么时候nums[i]会大于1e9+7
        nums[i] = (nums[i-1] + nums [i-2])%1000000007;
    }
    return nums[n];
};
```

其实上面的做法还可以在空间复杂度上进行优化：

时间复杂度：O(n)，空间复杂度：O(1)
```JS
var numWays = function(n) {
    let a=1,b=1,c=2;
    if(n==0)
        return a;
    else if(n==1)
       return b;
    else if(n==2)
       return c;
    for(let i=3;i<=n;i++)
    {
        // 让 a 记住 c 的初始值
        a = c;
        c = (c+b)%1000000007;
        b = a;
    }
    return c;
};
```
由于后面状态转移过程中始终只用到`nums[i-1]`和`nums[i-2]`两个量，所以可以进行优化。


## 最后
这是我的 LeetCode 刷题打卡的 `No.8` 篇，还有后续篇章等待更新。如果觉得这篇 LeetCode 的题解分享还不错，欢迎点赞😄

本文正在参与「掘金 3 月闯关活动」，点击查看[活动详情](https://juejin.cn/post/6934506742986309639)。