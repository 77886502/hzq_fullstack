# Nginx
yum info nginx 显示nginx相关信息
yum install nginx -y 默认允许


## nginx文件目录下
conf.d 是所有Nginx配置的目录
default.d Nginx默认配置文件
fastcgi.conf ngx_http_fastcgi_module 模块对应的参数文件
nginx.conf Nginx配置文件

HTTP 服务器
http {
    log_format 日志的格式
    access_log 日志的存储位置
    keepalive_timeout 60 连接的超时时间，单位s
    
    配置反向代理
    server {
        listen 80; 监听的端口号
        server_name 监听的地址

        匹配的路径
        location {
            root 资源的根目录 (作为静态资源时使用)
            expires 过期时间

            proxy_pass 转发到某个服务的地址
        }

        
        error_page 配置
    }

}

nohup node server.js
wget 图片地址 (服务端获取图片)