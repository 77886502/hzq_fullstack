/*升序*/
function sortNumbleUp(x,y){
    return x-y;
}
/*降序*/
function sortNumbleDown(x,y){
    return y-x;
}
let arr = [1,3,2,7,4,5,0,9,6,8];
arr.sort(sortNumbleUp);
console.log(arr);