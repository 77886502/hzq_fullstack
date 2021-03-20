// import  ES6  模块方案
// 游戏规则与设备分离  游戏要在小程序等等上完 要具有移植性
// 复用
const game = require('./game.js'); // commonJS
// JS 操作系统
// 一直玩？ process.argv[2] 持续不断的去命令行去取呢？
// JS事件监听 事件机制？

var winCount = 0;
process.stdin.on('data',(buffer)=>{
    const action = buffer.toString().trim(); // 二进制变string
    const result = game(action);
    if(result == 1){
        winCount++;
        if(winCount == 3)
        {    
            console.log('已经赢得够多了，我不玩了！')
            process.exit()
        }
    }
});
