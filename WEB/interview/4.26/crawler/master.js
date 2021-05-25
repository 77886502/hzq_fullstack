// fork
// www.domain.com/path -> application n个
// client http协议 -》 ip -> http应用层-> 端 口80 -》 spider application 
// 多个进程共享一个端 口
const cluster = require('cluster');
const cpuNums = require('os').cpus().length;

cluster.setupMaster({
    exec: 'worker.js',
    args: ['--use', 'http']
});

console.log(`一共开启${cpuNums}个子进程来进行爬取`)
console.log(`爬取数据是乱序的， 因此给爬取的数据加movieIndex`)

let pageNum = 10;
// 
const startTime = Date.now();
for (let i = 0; i < cpuNums; i++) {
    let work = cluster.fork();
    // 通信  IO
    // ngnix 
    work.send([i, cpuNums, pageNum])
    work.on('message', (msg) => {
        pageNum--;
        if (pageNum === 0) {
            console.log(`\n已完成 所有爬取， using ${Date.now() - startTime} ms\n`)
            console.log('关闭子进程');
            cluster.disconnect();
        }
    })
}

cluster.on('fork', (worker) => {
    console.log(`[master]: fork worker ${worker.id}\n`);
});
cluster.on('exit', (worker) => {
    console.log(`[master]: 子进程${worker.id}被 关闭`);
})