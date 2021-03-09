var isValid = function(s) {
    if(s.length%2!=0)
        return false;
    let stack = [];
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=='('||s[i]=='{'||s[i]=='[')
            stack.push(s[i]);
        else if(stack[stack.length-1]+s[i]=='()'||stack[stack.length-1]+s[i]=='[]'||stack [stack.length-1]+s[i]=='{}')
            stack.pop();
        else
            return false;
        if(stack.length>s.length-i-1)
            return false;
    }
    return stack.length == 0;
};