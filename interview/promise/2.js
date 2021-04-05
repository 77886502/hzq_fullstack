// excutor 执行器的实现
// 状态及状态转移 
// 如何让执行器决定状态转移的执行
class myPromise {
    constructor(executor){
        this.state = 'pending'; // 初始化未完成状态
        this.value = undefined; // 成功的值
        this.reason = undefined;// 失败的原因
        // 异步任务会把结果交给resolve
        let resolve = (value) => {
            if(this.state == 'pending'){
                console.log('fulfilled 状态被执行');
                this.value = value;
                this.state = 'fulfilled';
            }
        };
        let reject = (reason) => {
            if(this.state == 'pending'){
                console.log('rejected 状态被执行');
                this.reason = reason;
                this.state = 'rejected';
            }
        };
        try{
            executor(resolve,reject);
        }catch(e){
            reject(e);
        }
        
    }
 
}
new myPromise((resolve,reject) => {
    // 封装一个花费时间较长的任务，实现异步变同步
    setTimeout(()=>{
        console.log("Hello!");
        resolve(10);
        // throw new Error('出错了');
    },1000)
}).then((data)=>{
    console.log(data,'++++');
});
