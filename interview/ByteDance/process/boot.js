const cluster = require('cluster'); //多核 多进程

if(cluster.isMaster) {
  // 不干活 
  // console.log(require('os').cpus().length);
  // 调度 
  for(let i = 0; i < require('os').cpus().length /2; i++) {
    createWorker(); // 
  }
  function createWorker() {
    var worker = cluster.fork(); // 子进程
  }
} else {
  require('./app');
}