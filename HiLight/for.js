var minOperations = function(nums1, nums2) {
    nums1 = nums1.sort((a,b) => a-b);
    nums2 = nums2.sort((a,b) => a-b);
    let num = 0,sum1 = eval(nums1.join("+")), sum2 = eval(nums2.join("+"));
    if(sum1 == sum2)
        return 0;
    else
    {
        if(sum1 > sum2)
        {
            if(nums1.length > nums2.length*6)
                return -1;
        }
        else
        {
            if(nums1.length*6 < nums2.length)
                return -1;
    
        }
    }
    return num;
};
