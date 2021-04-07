var reverse = function(x) {
    let num = "";
    if(x>=0)
    {
        num = +[...(num+x)].reverse().join("");
    }
    else
    {
        num =  +[...(num+Math.abs(x))].reverse().join("");
        num = -num;
    }
    return num;

};
let num = -100;
console.log(reverse(num));
