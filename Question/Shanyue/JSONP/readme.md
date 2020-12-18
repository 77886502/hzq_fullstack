1. HTTP 协议
    TCP/IP  HTTP是上层
    web Server RestFul 

    JSON 资源, 喜欢的运动员, HTTP 提供下服务？R请求 Q响应
    URL http://127.0.0.1/players.json
    动作 GET 
    live-server 静态资源
    json-server 

    url -> 资源 resources
    跨域 域名不一样 协议不一样 http -> https 3000 -> 8080
    json-server 天生励志,自带跨域能力
    js 是不允许跨域的 https://www.runoob.com/try/ajax/jsonp.php
    不支持 ? 解决方案是 JSONP JSON with padding

    我们用了DOM 编程, document.createElement("script")
    script.src="https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction"
    document.body.appenChile(script)