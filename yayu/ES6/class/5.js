var obj = {};
// defineProperties 方法 如命
console.log(obj);
obj = Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    enumerable:true,
    writable: false
  }
  // etc. etc.
});
// console.log(obj.property1,obj.property2);
obj.property2 = '小龙女';
console.log(Object.keys(obj));