const getJson = () => {
    return "JSON";
}
// 函数前面async只是声明这是一个异步函数内部存在异步
async function testAsync(){
    // 函数前面加 await，那么逻辑就会等到这个异步函数执行完毕后，在往下执行
    try{
        await getJson()
    }
    catch(e){
        console.log(e);
    }
    // ... 
}
testAsync().then(()=>{
    getJson()
})
.then(()=>{
    
})