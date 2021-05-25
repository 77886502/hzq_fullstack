function duplicateCount(text){
    var str = text.toLowerCase().spList('').sort().join('')
    console.log(str);
    var word ='123-4560';
    // 正则表达式字符串表示是否符合规则
    console.log(word.match(/\d+/g));
    console.log(/\d+/.text(word)); 
    var arr = str.match(/(-)\1+/g);
}
