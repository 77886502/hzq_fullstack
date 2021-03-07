var minOperations = function(nums1, nums2) {
    let num = 0, sum1 = eval(nums1.join("+")), sum2 = eval(nums2.join("+"));
    if(sum1 == sum2)
        return 0;
    else
    {
        if(sum1 > sum2)
        {
            if(nums1.length > nums2.length*6)
                return -1;
            nums1 = nums1.sort((a,b) => a-b);
            nums2 = nums2.sort((a,b) => b-a);
            while(sum1>sum2){
                if(nums1[nums1.length-1]-1 > 6-nums2[nums2.length-1])
                {
                    sum1 = sum1 - (nums1[nums1.length-1]-1);
                    nums1.length--;
                }
                else
                {
                    sum2 = sum2 + (6-nums2[nums2.length-1])
                    if(nums2.length!=1)
                        nums2.length--;
                }
                num++;
            }
        }
        else
        {
            if(nums1.length*6 < nums2.length)
                return -1;
            nums1 = nums1.sort((a,b) => b-a);
            nums2 = nums2.sort((a,b) => a-b);
            while(sum2>sum1){
                if(nums2[nums2.length-1]-1 > 6-nums1[nums1.length-1])
                {
                    sum2 = sum2 - (nums2[nums2.length-1]-1);
                    nums2.length--;
                }
                else
                {
                    sum1 = sum1 + (6-nums1[nums.length-1])
                    if(nums1.length!=1)
                        nums1.length--;                        
                }
                 num++;
            }
           
        }
    }
    return num;
};
console.log(minOperations([2,3,6,4,5],[6,7,2,6,9]));