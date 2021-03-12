// 0 => 2 1 => 3 2 => 4 3 => 5 4 => 0 5 => 1 
var rotate = function(nums, k) {
    if(k%nums.length!=0)
    {
        if(nums.length%k==0)
        {
            
            for(let i=0;i<k;i++)
            {
                let length = 0,item=nums[i];
                while(length<nums.length)
                {
                    nums[(i+k)%nums.length] = nums[(i+k)%nums.length] + item;
                    item = nums[(i+k)%nums.length] - item;
                    nums[(i+k)%nums.length] = nums[(i+k)%nums.length] - item;
                    i = (i+k)%nums.length;
                    length=length+k;
                }
            }
        }
        else
        {
            let length =0, i=0, item = nums[0];
            while(length<nums.length)
            {
                console.log(i);
                nums[(i+k)%nums.length] = nums[(i+k)%nums.length] + item;
                item = nums[(i+k)%nums.length] - item;
                nums[(i+k)%nums.length] = nums[(i+k)%nums.length] - item;
                i = (i+k)%nums.length;
                length++;
            }
        }
    }
};
let arr = [1,2,3,4,5,6];
rotate(arr,4);
console.log(arr);