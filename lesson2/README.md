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

* 显示ico图标：

```html
<link rel="shortcut icon" type="image/ico" href="favicon.ico"> 
```

