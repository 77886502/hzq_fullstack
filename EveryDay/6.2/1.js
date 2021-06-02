// https:baidu.com/s?b=121&bb=231l&c=dwe1&e=0#search
var getUrlVlaue = function(url,parameter){
	var str = url.slice(url.indexOf('?')),
        index = str.indexOf('#');
    str = index === -1 ? str.split('&') : str.slice(0,index).split('&');
   	for(var i=0; i<str.length; i++){
        str[i] = str[i].split('=');
        if(str[i][0] === parameter)
            return str[i][1];
    }
}
console.log(getUrlVlaue('https:baidu.com/s?b=121&bb=231l&c=dwe1&e=0#search','c'));