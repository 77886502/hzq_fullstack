// excutor 执行器的实现
// 状态及状态转移 
// 如何让执行器决定状态转移的执行
class myPromise {
    constructor(executor){
        this.state = 'pending'; // 初始化未完成状态
        this.value = undefined; // 成功的值
        this.reason = undefined;// 失败的原因
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        // 异步任务会把结果交给resolve
        let resolve = (value) => {
            if(this.state == 'pending'){
                console.log('fulfilled 状态被执行');
                this.value = value;
                this.state = 'fulfilled';
                this.onResolvedCallbacks.forEach(fn=>fn());
            }
        };
        let reject = (reason) => {
            if(this.state == 'pending'){
                console.log('rejected 状态被执行');
                this.reason = reason;
                this.state = 'rejected';
                this.onRejectedCallback.forEach(fn => fn());
            }
        };
        try{
            executor(resolve,reject);
        }catch(e){
            reject(e);
        }
        
    }
    // 当前promise解决了，完成了状态转移，把控制权交出来
    then(onFullfilled,onRejected){
        console.log('.......')
        // 当状态为 fulfilled 时，传入成功后的回调，将执行权转移
        if(this.state == 'fulfilled'){
            onFullfilled(this.value);
        } //当状态为 rejected 时，传入失败后的回调，将执行权转移
        else if(this.state=='rejected'){
            onRejected(this.reason);
        }
        else if(this.state=='pending'){
            this.onResolvedCallbacks.push(()=>{
                onFullfilled(this.value);
            })
            this.onRejectedCallbacks.push(()=>{
                onRejected(this.reason);
            })
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