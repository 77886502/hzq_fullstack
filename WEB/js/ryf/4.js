// 函数是天生可以复用的，
// var Cat = {
//     name: '',
//     color: '',
//     sayHello(){
//         console.log('');
//     }
// }
function Cat (name, color){
    return {
        name,
        color
    }
}