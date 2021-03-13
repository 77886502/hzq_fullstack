

function IsCommon(a,b){

    while (a%b != 0)
    {
        tmp=a%b;//取余
        a = b;//交换a，b可避免a比b小
        b = tmp;
    }
    return b;
}
console.log(IsCommon(8,9));