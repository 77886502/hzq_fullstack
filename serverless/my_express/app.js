const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    console.log('Home');
    res.send('Hello world')
})
// app.listen(3003,()=>{

// })
// export default ES6写法
module.exports = app // common js 