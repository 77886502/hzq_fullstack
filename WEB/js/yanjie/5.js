const dogs = new Map(); //
const friends = new Map();
friends.set('黄志乾','华灯初上');
friends.set('何江涛','鸡毛');
friends.forEach( (val,key) => console.log(val,key));
for(const [key,val] of friends){
    // 解构
    console.log(key);
}
const [a,b] = [1,2];
const { } = {"a":1}