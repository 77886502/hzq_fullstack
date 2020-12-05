// console.log("hello world".slice(1))

function generateHashtag(str) {
  // 'hello world'  'Hello World'
  let arr = [];
  str
    .split(' ')
    .forEach(item => {
      // console.log(item);
      arr.push(item.charAt(0).toUpperCase() + item.slice(1))
    })
  // console.log(arr);
  return arr.join(' ')
}
console.log(generateHashtag('hello world'));
