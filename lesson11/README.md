# lesson 11 总结
[canvas改变图片色值](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson11/index.html)
 | [SVG画图形](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson11/svg.html)
 | [SVG + CSS 实现动效](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson11/svg1.html)
 | [SVG + animate ](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson11/svg-animation.html)
 | [SVG 实现遮罩效果](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson11/svg-mask.html)

## canvas
* getImageData

可以通过`getImageData`来获取位图的像素字节数据，然后每一个像素点的数据不是一位，而是四位，分别代表该点的红、绿、蓝和透明值。因此，实际上为徒字节数据的数组长度等于像素点个数乘以4，具体实现可以见DEMO。

`getImageData`的用法：

```js
context.getImageData(sx, sy, sw, sh);
```
`sx`：将要被提取的图像数据矩形区域的左上角 x 坐标。
`sy`：将要被提取的图像数据矩形区域的左上角 y 坐标。
`sw`：将要被提取的图像数据矩形区域的宽度。
`sh`：将要被提取的图像数据矩形区域的高度。

* putImageData  

```js
void ctx.putImageData(imagedata, dx, dy);
```
`dx`：源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）。
`dy`：源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）。

## CSS3 filter(滤镜) 属性

`filter` 属性定义了元素(通常是<img>)的可视效果(例如：模糊与饱和度)。
```css
img {
    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
    filter: grayscale(100%);
}
```

参考网址：[CSS3 filter(滤镜) 属性](http://www.runoob.com/cssref/css3-pr-filter.html)


## svg 及 animate

参考网址：[超级强大的SVG SMIL animation动画详解](http://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/)

## svg 小结

由于svg代码能够直接体现为某种图形，因此我们还可以在css中直接输入svg内容，以代替图片。在移动端使用这一技巧的好处在于能够有效的减少http请求。
在使用这一技巧钱，需要先将svg转换成base64编码的data uri数据，再将其作为参数传入css北京的url方法中，代码如下：

```css
background-image:url(data:image/svg+xml;base64,png2asdajslk23lkj....);
```
除css外，我们也可以在页面直接用img元素引用亚索的svg内容，如：

```html
<img src="data:image/svg+xml;base64,png232sfljsdfkdjsklfj...">
```
在过去，所有图像都用过引入png或者jpg等外部文件来加以实现，而以上技巧则使得我们能够使用文本字符来描述图像，这不啻于是一种理念上的颠覆。
