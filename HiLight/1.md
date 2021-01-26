# 云开发之旅

1. 遇到了 错误：没有权限，请先开通云服务

- 首先是需要开通云服务的，直接点击云开发然后进行设置环境名称等，选择开通即可。注：系统互默认给我们配置参数，不需要手动进行配置，还需要注意一下：如果编译后还报出关于“没有权限，请开通云服务”等一系问题，那是因为AppID首次开通云环境后，那还需要等待10分钟后，再次编译即可正常。

2. 点击获取openid 报错：“[云函数] [login] 调用失败 Error: errCode: -404011 cloud function execution error | errMsg: cloud.callFunction:fail requestID , cloud function service error code -504002, error message Function not found: [login]; at cloud.callFunction api;”

（1）先找到cloudfunctions|当前文件……文件，找到以后右击当前环境，并选着我们已经配好的云环境，这里我的云环境取名‘this’。
（2）再找login文件，还是找到以后右击“创建并部署：云端安装依赖（不上传node_modules）”，弄好以后再等几分钟，再去“点击获取openid”，可以发现可以正常执行