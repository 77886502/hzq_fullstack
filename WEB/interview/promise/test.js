// excutor  执行器的实现
// 状态的转移
// 如何让执行器决定状态转移的处理
class Promise {  // then 就是实例的方法
    constructor(executor) {
        this.state = 'pending';   // 初始化未完成状态
        // 成功的值
        this.value = undefined;
        // 失败的原因
        this.reason = undefined;
        // resolve 异步任务会把结果交给resolve
        let resolve = (value) => {
            // console.log(value, '----------');
            if(this.state == 'pending'){
                console.log('fulfiiled状态被执行')
                this.value = value;
                this.state = 'fulfilled';
            }           
        }
        let reject = (reason) => {
            if(this.state == 'pending') {  // promise A+规范
                console.log('rejected状态被执行')
                this.reason = reason;
                this.state = 'rejected';
            }
        }
        try {
            executor(resolve, reject)
        }catch(err) {  // 捕捉错误  出错的消息交给err
            reject(err)
        }
    }
}
new Promise((resolve, reject) => {
    // 这个函数可以封装  将花时间比较多的任务封装起来, 以实现异步变同步
    setTimeout(() => {
        console.log(0);
        resolve(10)
        // reject('脑子what')
        // 语法错误
        // throw new Error('出错了');
    }, 1000)
})
