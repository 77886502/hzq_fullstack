var longestValidParentheses = function(s) {
    if(s.length==0||s.length==1)
        return 0;
    let maxLength = 0,length = 0;
    let stack = [];
    for(let i=0;i<s.length;i++)
    {
        if(s[i] == '(')
            stack.push(i);
        else if(stack.length!=0)
            stack.pop();
    }
    console.log();
    
    while(stack.length!=0)
    {
        s[stack.pop()] = ')';
    }
    console.log(s);
    for(let i=0; i<s.length;i++)
    {
        if(s[i] == '(')
            stack.push('(');
        else 
        {
            if(stack.length!=0)
            {
                stack.pop();
                length+=2;
            }
            else
                length = 0;
        }
    
        if(length>maxLength)
            maxLength = length;
    }
    return maxLength;
};
console.log(longestValidParentheses("()(()"))