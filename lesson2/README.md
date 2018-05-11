# lesson 2 总结
[预览地址](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson2/index.html)

## manifest（离线缓存）

通过设置`html`元素的`manifest`属性来指定本地缓存配置文件，如：

```html
<html manifest="cache.manifest">
<!--something else.-->
</html>
```
在同级目录下的配置文件一般格式为：

```js
CACHE MANIFEST
/#修改时间：2018-05-11 17:55:35
CACHE:
index.css
```
* 其中，第一行为文件声明，第二行(忽略/，为了转译用)`#`后面的内容表示注释，`CACHE`后面是对需要缓存的文件的生命，其后为缓存的文件列表。如果有多个需要缓存的文件，则每一个文件路径都需要各占一行。

* 在`manifest`文件中，除`CACHE`声明哪些文件被缓存外，还有`NETWORK`和`FALLBACK`这两个关键字，分别用于声明哪些文件永远不被缓存，以及在无法建立连接的情况下显示的回退页面。此外，`CACHE`声明也可以被省略。

## link（外部链接）、meta（文档元数据）

### link

* 显示ico图标：

```html
<link rel="shortcut icon" type="image/ico" href="favicon.ico"> 
```
* 将页面添加到iOS设备主屏幕是显示的图标

```html
<link rel="apple-touch-icon-precomposed"  href="apple-touch-icon.png">
```
如果不希望iOS系统对图标添加默认的圆角和高粱效果，则可以用`apple-touch-icon-precomposed`替代`apple-touch-icon`。如下代码定义了iOS设备中默认的57 x 57及更大的72 x 72主屏图标：

```html
<link rel="apple-touch-icon-precomposed"  href="icon-57.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72"  href="icon-72.png">
```
> apple-touch-icon-precomposed按钮文件一般需指定的尺寸包括57 x 57、72 x 72、114 x 114、144 x 144、180 x 180等，并随苹果公司的产品线变化而动态变化。

* 订阅(rss+xml)

```html
<link rel="alternate" type="application/rss+xml" title="My Blog" href="rss.xml">
```

### meta

* 指定浏览器内核。

```html
<meta name="renderer" content="webkit"> 
```
`content`取值有：webkit：webkit（极速核）。ie-comp:IE兼容内核。ie-stand:IE标准内核。

此外还可以指定IE内核下优先使用最新版本引擎渲染页面，并且可以让安装了Google Chrome Frame扩展插件的浏览器激活Chrome Frame作为渲染引擎，其目的都是表面浏览器使用兼容模式，是页面尽可能以最佳方式呈现：

```html
<meta name="X-UA-Compatible" content="IE=edge,chrome=1"> 
```
* 搜索引擎优化（Search Engine Optimization,SEO)

```html
<meta name="keywords" content="HTML5,前端，代码，样式"> 
<meta name="description" content="这是一个HTML5开发的前端页面"> 
```

* 移动端浏览器处理
不希望页面中的数字自动识别为电话号码，从而显示为拨号的超链接：

```html
<meta name="format-detection" content="telephone=no"> 
```
`content`还有email=no等取值

