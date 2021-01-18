// Pyramid Slide Down
function longestSlideDown (pyramid) {
    var max = pyramid[0][0];
    for(var i=1;i<pyramid.length;i++)
   {
     for(let j=0;j<pyramid[i].length;j++)
     {
       if(j==0|j==pyramid[i].length-1)
       {
      
         if(j==0)
           pyramid[i][j] = pyramid[i][j] + pyramid[i-1][j];
         else
           pyramid[i][j] = pyramid[i-1][j-1] + pyramid[i][j];
       }
       else
       {
         pyramid[i][j] = Math.max(pyramid[i-1][j-1]+pyramid[i][j],pyramid[i-1][j]+pyramid[i][j]);
       }
       if(pyramid.length-1==i)
       max = Math.max(max,pyramid[i][j]);
     }
   }
   return max;
  }