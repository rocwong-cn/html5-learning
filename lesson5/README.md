# lesson 5 总结
[DEMO预览地址](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson5/index.html)

## viewport

viewport 翻译为中文可以叫做"视区"。
手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。

一个常用的 viewport meta 如下：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
* width：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
* height：和 width 相对应，指定高度。
* initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
* maximum-scale：允许用户缩放到的最大比例。
* minimum-scale：允许用户缩放到的最小比例。
* user-scalable：用户是否可以手动缩放。

## vw vh

vw	相对于视窗(viewport)的宽度：视窗宽度是100vw
vh	相对于视窗(viewport)的高度：视窗高度是100vh
vmin 和 vmax 自动选择相对于`viewport`宽高而言最小或者最大的制

* 换算：5vw = 屏幕宽度的1/20，即为5%，当屏幕宽度为400px时，字体大小为20px；

## 弹性布局

* 为父元素增加display

```css
display:flex;
display:-webkit-flex;  /* webkit内核浏览器的兼容写法 */
```
* flex-direction
取值有：

```html
row            横向布局 默认取值
column         纵向布局
column-reverse 纵向反向排列
```
* flex

```css
flex : 1 1 auto;
-webkit : 1 1 auto;
```
flex属性的三个参数分别为：
  flex-grow : 决定伸缩元素可扩展空间的分配，在此为1，表示每个元素的可扩展空间大小相等；
  flex-shrink : 定义当元素超过容器的大小后的压缩比例，在此为1，即每隔元素的亚索能力相同；
  flex-basis : 定义伸缩的基准值，在此为`auto`，即自动分配空间。
  
## CSS Sprite 雪碧图 

> CSS雪碧的基本原理是把你的网站上用到的一些图片整合到一张单独的图片中，从而减少你的网站的HTTP请求数量。该图片使用CSS background和background-position属性渲染，这也就意味着你的标签变得更加复杂了，图片是在CSS中定义，而非<img>标签。

```css
a {
    display:block; width:200px; height:65px; line-height:65px; /*定义状态*/
    text-indent:-2015px; /*隐藏文字*/
    background-image:url(button.png); /*定义背景图片*/
    background-position:0 0; /*定义链接的普通状态，此时图像显示的是顶上的部分*/
   }
a:hover {background-position:0 -66px; /*定义链接的滑过状态，此时显示的为中间部分，向下取负值*/}
a:active {background-position:0 -132px; /*定义链接的普通状态，此时显示的是底部的部分，向下取负值*/}
```
## Icon Font 图标字体

自定义字体：

```css
@font-face {
font-family: 'roc-font';
src:url('roc-iconfont.ttf'),url('roc-iconfont.eot'),url('roc-iconfont.woff');
}
```
实际使用：

```css
h1:before{
    font-family: 'roc-font';
    content:'\e626'; /* 来自于自定义字体的unicode编码 */
}
```

## 一些移动端开发技巧

* 当用户在iOS设备中按住一个页面元素时，iOS会自动在元素周围显示橙色的外框，表示钙元素被按中，这一高亮效果可以用下面代码去除

```css
*{
    -webkit-tap-highlight-color: rgba(0,0,0,0); /* 设为透明 */
}
```
以上代码还可以解决在一些Android机型中，单击后发生被绑定单击区域闪一下的问题。

* 以下代码可以避免在横竖屏幕切换时，移动设备对页面的文字大小进行自动调整：

```css
html{
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
}
```

* 当页面高度设置为100%是，去除系统自带的导航栏高度的方法：

```js
document.documentElement.style.height = window.innerHeight + 'px';
```

* 获取用户设备类型

```js
console.log(navigator.userAgent)
```

* 获取设备的网络连接类型, ethernet, wifi,2G,3G,4G ...

```js
navigator.connection.type
```

* 获取设备的横竖屏状态

```js
window.orientation || screen.orientation
```

* 用户在使用iOS设备从主屏幕直接启动某个页面时，显示一副启动图：

```html
<link rel="apple-touch-startup-image" href="default.png" /> 
```
* 当站点有配套的Apple Store APP时，可以通过添加名为`Smart App Banners` 的 meta 标签，将应用链接（下载条幅）显示在页面顶部，方便用户下载使用

```html
<meta name="apple-itunes-app" content="app-idd=547523434" />
```