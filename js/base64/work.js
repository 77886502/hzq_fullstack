this.addEventListener('message',(e) => { //消息监听 
    // console.log(e);
    this.postMessage('Your said:'+e.data);
})