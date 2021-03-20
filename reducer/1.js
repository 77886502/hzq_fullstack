const bills = [
    {
        type:'shop',
        money:333
    },
    {
        type:'study',
        money:444
    },
    {
        type:'shop',
        money:821
    },
    {
        type:'study',
        money:666
    }
]
// 函数式编程思想


console.log(bills.reduce((acc,bill)=>{
    if(!acc[bill.type])
    {
        acc[bill.type] = [];
    }
    acc[bill.type].push(bill);
    return acc;
},{}));