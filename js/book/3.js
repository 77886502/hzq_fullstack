class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}
Object.assign(Point.prototype,{
    toString(){},
    toValue(){}
})
const o = new Point(1,2);
console.log(Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertyNames(Point.prototype));
console.log(Object.keys(Point.prototype));
console.log([...Object.getOwnPropertyNames(o),Object.keys(o.__proto__),Object.keys(o.__proto__.__proto__)]);
const getAllProperties = (o) => {
    let arr = Object.getOwnPropertyNames(o);
    let p = o.__proto__;
    let res = [...arr];
    while(p){
        res.push(arr.concat(Object.keys(p)));
        for (let key in keys){
            res.push(key);

        }
        console.log(o);
        p = p.__proto__;
        console.log(o);
    }
    console.log(res);
    return [...res];
}
console.log(getAllProperties(o));