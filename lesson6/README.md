# lesson 6 总结

> 本节课主要学习是布局相关知识。

[两列均分布局](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson6/index.html)
[格子布局](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson6/grid.html)
[格子布局 - 跨行](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson6/grid1.html)


## 清除浮动

```css
section::after{
    content: '';
    display:table;
    clear:both;
}
```
但是老版本IE并不支持`::after`伪元素，可以采用手动插入一段DOM结构的方式来清除浮动。
一般的，一个常用的清除浮动的类就可以写作：

```css
.clearfix:before, .clearfix:after{
    content:'';
    display: table;
}
.clearfix:after{
    clear:both;
}
```
使用时：

```html
<section class="clearfix">...</section>
```
需要补充说明的是，将`display`属性设置为`table`，并设置`clear`为`both`，是为了使清除浮动的时候形成一种名为`BFC（Block Format Content, 块级格式化上下文）` 的机制。在`BFC`中，元素布局不收外界的影响，我们往往利用该特性来清除浮动元素对其他非浮动元素带来的影响。
此外，在`BFC`中，块级元素与由行内元素组成的"行盒子"会垂直的沿其父元素的边框排列。触发`BFC`的因素很多，如上述设置`display`为`table`即为其中的一种因素（也可以设置`display`为`inline-block`、`table-cell`、`table-caption`、`flex`、`inline-flex`等）。
而且，`overflow`不为`visible`也会触发`BFC`。

[overflow触发BFC的Demo](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson6/bfc.html)

## box-shadow 设置框线

为元素顶部绘制一条1像素宽，颜色为40%透明度黑色的边框：

```css
box-shadow:0 0 1px rgba(0,0,0,.4) inset;
```

## 布局总结：

如Demo中所体现出来的，无论什么布局都可以使用百分比布局来实现：

* 规定其父元素的固定宽度（或者最小宽度）；
* 设置其子元素的宽度为对应的百分比（如两列均等布局，宽度分别为50%）；
* 设置子元素的float(浮动)；
* 为了防止高度"坍塌"，清除父元素浮动。