# 从输入URL到页面展示到底发生了什么？
- DNS域名解析

    ![](../Img/HTTP/DNS.png)








## TCP
TCP协议全称是传输控制协议是一种面向连接的、可靠的、基于字节流的传输层通信协议。

头部:

Sequence Number(序列号):该序号保证TCP传输的报文都是有序的，接收端就可以通过顺序拼接报文。

Acknowledgement Number: 表示接受端期望接受的下一个字节编码，同时表示上一个序号的数据已经接收到了。

Window Size: 窗口大小，表示还能接收多少字节的数据，用于流量控制。

...


- TCP三次握手

![](../Img/HTTP/TCP.png)

1. 第一握手是客户端向服务器发送请求报文，客户端会进入SYN_SENT状态。
2. 服务器在接收这个请求后如果同意，则发送一个应答。应答发送后便进入SYN_RECEIVED
3. 客服端接收同意的应答后，再向服务器端发送一个确认报文，客户端进入ESTABLISHED状态，服务器端也进入ESTABLISHED状态，此时连接建立成功。


- 为什么TCP建立连接需要三次握手，两次四次行不行？
两次: 当客户端发送一个连接请求A，因为网络原因A请求超时，TCP就会启动超时重传机制，重新发送连接请求B，服务端接收到B后进行应答，之后数据传递完成释放连接。
假设此时A在两端关闭后又到了服务端，那么此时服务器就会认为客户端有需要建立连接，于是去响应，并进入ESTABLISHED状态，但是客户端已经CLOSED状态，服务器就会一直等待，造成资源浪费。


- TCP四次挥手
![](../Img/HTTP/Close.png)
1. 客服端认为数据发送完成，向服务端发送释放连接的请求
2. 服务端接收到释放连接的请求后，告诉应用层该释放TCP连接，然后向客服端发送ACK包并进入 CLOSE_WAIT状态。(表示不再接受客户端的数据，但是因为TCP是双向连接的，服务端还能向客户端发送数据)
3. 如果服务端此时还有没发完的数据就会继续发送，完毕后向客户端发送连接释放请求，自己进入LAST-ACK状态
4. 客服端接受服务端的释放请求，向服务端确认应答。自己进入TIME-WAIT状态2ms后就进入CLOSED状态。服务在接收这个应答后进入CLOSED状态。


- 为什么客服端要进入TIME-WAIT状态，等待2ms后才进入CLOSE状态？
为了保证服务端能够接收到客户端的确认应答，如果客服端确认应答后直接进入CLOSED状态，万一网络问题导致应答没有被服务端接收到，那么会造成服务端无法关闭。





## UDP
UDP协议全称是用户数据报协议，是面向无连接的协议 并且只是数据报文的搬运工，不保证有序且无法保证数据不丢失的传递
UDP没有任何流量控制算法，相对TCP来说比较轻便

- 面向无连接
在发送端，应用层将数据传递给传输层的UDP协议，UDP只负责给数据加一个UDP标识，然后传递给网络层

在接收端，网络层将数据传给传输层，UDP去除IP报文头就传给应用层，不会进行任何拼接操作。

- 不可靠性
接受到什么数据就传递什么数据，并且不会备份数据，而且发送数据也不会关心对象是否接受到！


- 没有流量控制
UDP没有拥塞控制，一直会以恒定的速度发送数据，即使网络不好，也不会进行调整(会导致丢包)。


- 高效
UDP的头部开销小(只有8字节，而TCP二十多字节起步)，传输数据很快

- 传输方式
UDP支持 一对一、一对多、多对一、多对多，也就是说 UDP 提供了单播，多播，广播的功能。

- UDP适用场景
直播，游戏(对实时性要求很高的)，

## IP