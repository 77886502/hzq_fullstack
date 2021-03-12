var rotate = function(nums, k) {
    if(k%nums.length!=0)
    {
        let start = count = i= 0,item;
        do
        {
            i = (i+k)%nums.length;
            count++;
        }
        while(start!=i);
        if(nums.length==count)
        {
            item = nums[0];
            while(count>0)
            {
                console.log(i);
                nums[(i+k)%nums.length] = nums[(i+k)%nums.length] + item;
                item = nums[(i+k)%nums.length] - item;
                nums[(i+k)%nums.length] = nums[(i+k)%nums.length] - item;
                i = (i+k)%nums.length;
                count--;
            }
        }
        else
        {
            for(i=0;i<nums.length/count;i++)
            {   
                let j = i,length=0,item=nums[i];
                do
                {
                    nums[(j+k)%nums.length] = nums[(j+k)%nums.length] + item;
                    item = nums[(j+k)%nums.length] - item;
                    nums[(j+k)%nums.length] = nums[(j+k)%nums.length] - item;
                    j = (j+k)%nums.length;
                    length++;
                }while(length<count)
            }
        }
    }
};
let arr = [1,2,3,4,5,6,7,8];
console.log(rotate(arr,4));
console.log(arr);