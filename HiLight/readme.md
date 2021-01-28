# 导读
生活中我们经常会浏览众多网页，而其中有些网页需要向用户展示大量的图片，这些网页为了加载大量的图片需要大量的性能开销，以至于可能出现图片加载卡顿甚至整个网页加载迟缓等现象。这些极差的体验会极大地影响用户的粘性，从而造成相当程度的损失。因此图片优化势在必行！！！


# 图片优化
首先我们要分析为何网页加载图片的过程中如此消耗性能呢？原来网页加载图片需要先通过http请求将图片下载到本地然后才能显示出来，同时本地会保留本次浏览的缓存，以便下次访问。（这就是你为什么打开经常访问网站如此迅速的原因）

网页上展示的图片多相应的http的请求也会越多，而且图片越大http请求的时间也会越长。短时间内大量的http请求和http请求时间过长，页面可能会直接无法响应！！！ 

所以我们可以从以下几个方面出发：
## 减少短时间内加载图片的数量(本质是减少短时间内的http请求数)
1. 懒加载(lazyLoad)
>顾名思义，就是偷懒加载。偷懒的好处在于，网页不会因为一下子http请求过多，而被卡死了。而且用户在浏览页面时也不可能一下子就浏览到所有的图片。有些未预览的图片还在视窗下面的时候，我们可以选择在图片即将进入用户视窗时，进行加载。

图片懒加载的实现参考代码:
```html

```


## 减小加载图片的大小
1. 精灵图(sprite)
    
> 精灵图又称雪碧图，很多大型网页在首次加载的时候都需要加载很多的小图片，而考虑到在同一时间，服务器拥堵的情况下，为了解决这一问题，采用了精灵图这一技术来缓解加载时间过长从而影响用户体验的这个问题。所谓精灵图就是把很多的小图片合并到一张较大的图片里，所以在首次加载页面的时候，就不用加载过多的小图片，只需要加载出来将小图片合并起来的那一张大图片也就是精灵图即可，这样在一定程度上加快了页面的加载速度，也一定程度上缓解了服务器的压力。 


这是京东网站首页里面采用的精灵图(在特色优选这一区域)


![](https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/sprite/tit_arrow/sprite@2x.png)

精灵图的使用：将精灵图设为一个大背景，然后通过background-position来移动背景图，从而显示出我们想要显示出来的部分。 精灵图的展示预览效果代码:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>精灵图</title>
    <style>
        .sp{
            width: 32px;
            height: 32px;
            background-color:	#D3D3D3;
            background-image: url('https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/sprite/tit_arrow/sprite@2x.png');
        }
    </style>
</head>
<body>
   <div class="sp" style=" background-position:0 0;"></div>
   <div class="sp" style=" background-position:0 32px;"></div>
   <div class="sp" style=" background-position:32px 0;"></div>
</body>
</html>
```

2. WebP
>WebP是一种适用于Web的图片格式，由Google在2010年发布。WebP 在各大互联网公司已经使用得很多了，国外的有Google、Facebook 和 ebay，国内的有淘宝、腾讯和美团等。WebP的优势在于总体上WebP图片更小，能显著提升图片加载速度，减少流量消耗。与现有图片格式相比，虽然WebP图片大小变小了，但是图片质量凭肉眼难以看出差异。

```html

```



附注：其实还有一种图片转base64编码的技术，但是过于鸡肋，能真正大派用场的地方不多，就不给予赘述，感兴趣的可以自己搜一搜！


