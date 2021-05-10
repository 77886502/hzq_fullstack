/*
    RegExp = regular expression
    正则匹配 按照一定规则检索或匹配
    提高正则水平需要练习
    检测邮箱、手机号、用户名、密码
    替换数据某些字符
*/ 
/* 
    字符串片段 大小写默认是敏感 必须是连续的
    第一个参数正则表达式，第二参数修饰符
    i ignore 忽略大小写
    g global 匹配全局所有
*/
// var reg = new RegExp("Test",'i');
// var str = "This is a test";
// 直接声明对象 对象直面量 对象直接量
// var obj = {};

// 用new的方式创建RegExp,匹配的字符往往是变化的
var v = "Test"
var reg = /^Test/gim;
var str = "This is a test. \nTest is important";