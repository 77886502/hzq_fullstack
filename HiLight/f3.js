var canPlaceFlowers = function(flowerbed, n) {
    flowerbed=[0,...flowerbed,0];
    for(let i=1;i<flowerbed.length-1;i++)
    {
        if(flowerbed[i]==0)
        {    
            if(flowerbed[i+1]==0)
            {    
                n--;
                flowerbed[i]++;
                i++;
            }
            else
                i+=2;      
        }
        else
            i++;
    }
    return n<=0;
};
