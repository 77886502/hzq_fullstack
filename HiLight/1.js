function curry (fn, currArgs) {
    return function() {
        let args = [].slice.call(arguments);

        // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
        if (currArgs !== undefined) {
            args = args.concat(currArgs);
        }

        // 递归调用
        if (args.length < fn.length) {
            return curry(fn, args);
        }

        // 递归出口
        return fn.apply(null, args);
    }
}
const me = {'name':"Me",'age':23,'sex':'man'}
function see(obj,key){
    console.log('obj:'+obj,'key:'+key);
    return obj[key];
}
const search = curry(see);
console.log(search('age')(me));