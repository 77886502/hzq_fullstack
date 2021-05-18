# 当你在浏览器输入一个url后，
# 当你有了一台服务器后，可以干什么
  docker 一台物理主机 虚拟出很多云服务器
  - IP
    124.70.164.124 ？ 提供什么服务？ 可以看到网页呢
    浏览器域名或IP访问 https
    centor 7.6 web 服务器
    Nginx 是一个高性能的HTTP和反向代理的web服务器

  1. 第一步 配置nginx
  - putty 远程 SSH 链接 华为云的服务器
    root password
    web服务 Nginx 安装
    安装ngnix 的依赖
     yum -y install gcc  gcc-c++ autoconf pcre-devel make automake
     yum -y install wget httpd-tools vim
     yum install nginx
     nginx（启动服务器）
     ps aux | grep nginx
     mkdir -p /data/www

nginx 静态网页 http服务 html
动态 node   

1. centeros node
  - nginx wget https://npm.taobao.org/mirrors/node/v12.16.1/node-v12.16.1-linux-x64.tar.gz
  - 解压 tar -xvf node-v12.16.1-linux-x64.tar.gz
  - /user/local/bin/bin node npm npx
  - 全局命令 linux ? 配置软连接

  npm i koa --save
