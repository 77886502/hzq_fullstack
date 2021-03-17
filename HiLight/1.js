function Cat(name)
{
    this.name = name;
}
Cat.prototype = Array.prototype;

let cat = new Cat('喵喵');
console.log(cat);
cat[0] = 'age';
console.log(cat);

function IsArray()
{
    if(obj instanceof Array)
        return true;
    else
        return false;
}