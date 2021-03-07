var minOperations = function(nums1, nums2) {
    let num = 0,sum1 = eval(nums1.join("+")), sum2 = eval(nums2.join("+"));
    if(sum1 == sum2)
        return 0;
    else
    {
        if(sum1 > sum2)
        {
            if(nums1.length > nums2.length*6)
                return -1;
            while(sum1 > sum2)
            {
                if(nums1[j]-1 > 6-nums2[i])
                    sum1 = sum1 - nums1[j] + 1;
                else
                    
            }
        }
        else
        {
            if(nums1.length*6 < nums2.length)
                return -1;
            let i = 0, j = nums2.length-1;
            while(sum2 > sum1){
                if(nums2[j]-1 > 6-nums1[i])
                {
                    sum2 = sum2 - nums2[j] + 1;
                    j--;
                    num++;
                }
                else
                {
                    sum1 = sum1 + 6 - nums1[i];
                    if(i!=nums1.length-1)
                        i++;
                }
            }
        }
    }
    return num;
};
