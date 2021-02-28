var bagOfTokensScore = function(tokens, P) {
    // 初始先找能量值最低的卡牌兑分，把能量值消耗到无法获取分数。
    // 再用分数兑能量值最大的卡牌（仅一次），又重复上述。
    let nowScore = 0, maxScore = 0,min,max;
    while(true)
    {
        min = tokens.indexOf(Math.min(...tokens));
        max = tokens.indexOf(Math.max(...tokens));
        if(P >= tokens[min])
        {
            nowScore++;
            P -= tokens[min]; 
            tokens = [...tokens.slice(0,min),...tokens.slice(min+1)]
        }
        else if (nowScore == 0)
            return maxScore;
        else if(tokens.length>2&&tokens[max] >= tokens[min])
        {
            P=tokens[max]+P-tokens[min];
            tokens = [...tokens.slice(0,min),...tokens.slice(min+1)];
            max = tokens.indexOf(Math.max(...tokens));
            tokens = [...tokens.slice(0,max),...tokens.slice(max+1)];
        }
        else
            return maxScore;

        if(nowScore > maxScore )
            maxScore = nowScore;
        console.log(tokens,P,nowScore);
    }
    return maxScore;
};
console.log(bagOfTokensScore([100,200,300,400],200));