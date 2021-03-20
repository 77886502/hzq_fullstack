var moveZeroes = function(nums) {
    let i = 0;
    for(let j=0;j<nums.length-1;j++)
    {
        if(nums[j]==0)
        {
            for(i=j+1;i<nums.length;i++)
            {
                if(nums[i]!=0)
                {
                    [nums[j],nums[i]] = [nums[i],nums[j]];
                    break;
                }
            }
      
        }
        if(nums[j] == 0)
            break;
    }
};
console.log(moveZeroes([0,1,0,3,12]));
