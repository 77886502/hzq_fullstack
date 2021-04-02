const express = require('express');
const app = express();
const fs = require('fs');
const productRouter = require('./routes/product');

app.listen(3002, () => {
  console.log('server is OK');
});

function pReadFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      resolve(data)
    })
  })
}
// 我们如果把product.json 返回给用户? 
app.use(async(req, res, next) => {
  // 准备数据
  req.$PRODUCT_DATE = JSON.parse(await pReadFile('./mock/product.json'))
  console.log(req.$PRODUCT_DATE );
  next(); 
})
app.use('/product', productRouter);
