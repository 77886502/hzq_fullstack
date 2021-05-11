/*
    表达式 []
    字符中匹配过一段字符，下次不会匹配其中的字符
    []匹配其中一位，中括号里面是可选的字符
    元字符 正则使用的转义字符
    \w === [0-9A-z_] 
    \W === [^\w]
    \d === [0-9]
    \D === [^\d] 
    \s === [\r\n\t\v\f]
    \s === [^\s]
    \r 回车 \n 换行 \t 制表 \v 垂直换行符 \f 换页符

    \b 单词边界
    \B 非\b
    . 可以匹配回车换行以外的字符
*/ 
// var str = "asaw121eqdqwe12";
// var reg = /[1234567890][1234567890][1234567890]/g;
 
// var reg = /[wx][xy][z]/g;
// var str = "wxyz";
var str = 'q\nq';
var reg = /[\w\W]/g;
console.log(str.match(reg));