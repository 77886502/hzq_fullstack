//The Supermarket Queue
function queueTime(customers, n) {
    if(customers.length == 0){
         return 0;
    }
    var time = customers.slice(0,n);
    for(let i = n;i<customers.length;i++){
        for(let j = 0; j<time.length; j++){    
            if(time[j]==Math.min(...time)){   
                time[j] = time[j] + customers[i];
                break;
            }
        }
    }
    return  Math.max(...time);     
}
console.log(queueTime([2,2,3,3,4,4], 2));