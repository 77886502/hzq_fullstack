# 高途课堂面试题
1. HTTP 与 HTTPS 有什么区别？
HTTP**传输的数据是明文的**，
中间人可以抓包

HTTPS中的S
    SSL: Secure Socket Layer
    TLS: Transport Layer Security(SSL升级)
    CA证书
    公钥 
    私钥
    对称加密
    非对称加密

HTTPS不一定安全 nginx
HTTP使用的端口是80
HTTPS使用的端口是443

2. HTTP1.0/1.1/2.0的区别
HTTP 1.0 短连接 HTTP 1.1之后默认长连接
为什么需要长连接?
用户量激增，

PHP只支持短连接

HTTP2.0 默认头部没发生改变，否则不用发送头部。
多路复用
服务

缓存



- 证书的下载过程
nginx返回给用户

3. HTTP获取请求有哪些方法



4. GET和POST有什么区别
- get: 缓存、请求长度受限、会被历史保存记录 无副作用(不修改资源)，幂等(请求次数与资源无关)的场景
- post: 安全、大数据、更多编码类型(更安全)



5. GET和POST底层有什么不同




6. POST两次分别发送了什么？ 第一次会发生什么