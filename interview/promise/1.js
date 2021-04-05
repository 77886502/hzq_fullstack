// 三种状态 Pending Fulfilled Rejected
class myPromise {
    constructor(executor){
        // 1. cb 意义？不是回调函数
        // executor 执行器 立即执行
        // 2. reslove 应该是一个函数
        // 3. Promise 状态只能从一个状态转移到另一个状态
        // payload 固定格式 得到数据也叫执行结果
        // error 报错信息  
        let resolve = (data) => {};
        let reject = () => {};
        executor(resolve,reject);
    }
}
new Promise((resolve,reject) => {
    // 封装一个花费时间较长的任务，实现异步变同步
    setTimeout(()=>{
        console.log("Hello!");
        resolve(10);
    },1000)
});