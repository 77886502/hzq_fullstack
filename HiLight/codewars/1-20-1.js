// Remove Zeros
function removeZeros(array) {
    var temp,count=0;
    for (var i = array.length-1; i >=0; i--) {
        if(array[i]===0||array[i]==="0"){
            for(let j=i; j<array.length-1-count;j++)
            {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

            }
            count++;
        }
    }
    return array;
}
console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));