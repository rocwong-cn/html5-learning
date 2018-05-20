# lesson 9 总结

* 页面切换动效

[横向平移特效](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson9/index.html)
 | [纵向平移特效](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson9/index2.html)
 | [缩小放大特效](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson9/index3.html)
 | [水平翻转特效](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson9/index4.html)
 | [翻转加缩放](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson9/index5.html)

* Loading 动效

[简单loading](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson9/loading.html)
 | [带有拖尾效果的loading](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson9/loading2.html)
 | [横向 dot loading ](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson9/loading-dot.html)
 | [circle dot loading ](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson9/loading-round.html)
 
 * 翻书动效

 | [book paging](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson9/book.html)

## Meta http-equiv属性

http-equiv顾名思义，相当于http的文件头作用，它可以向浏览器传回一些有用的信息，以帮助正确和精确地显示网页内容，与之对应的属性值为content，content中的内容其实就是各个参数的变量值。

> meat标签的http-equiv属性语法格式是：＜meta http-equiv="参数" content="参数变量值"＞

```html
<meta http-equiv="Page-Enter" content="revealTrans(duration=1.0,transtion=12)">
<meta http-equiv="Page-Exit"  contect="revealTrans(duration=1.0,transtion=12)">   
```

Duration的值为网页动态过渡的时间，单位为秒。  
Transition是过渡方式，它的值为0到23，分别对应24种过渡方式。如下表：

```text
0  盒状收缩            1  盒状放射  
2  圆形收缩            3  圆形放射  
4  由下往上            5  由上往下  
6  从左至右            7  从右至左  
8  垂直百叶窗          9  水平百叶窗  
10 水平格状百叶窗       11 垂直格状百叶窗  
12 随意溶解            13 从左右两端向中间展开  
14 从中间向左右两端展开  15 从上下两端向中间展开  
16 从中间向上下两端展开  17 从右上角向左下角展开  
18 从右下角向左上角展开  19 从左上角向右下角展开  
20 从左下角向右上角展开  21 水平线状展开  
22 垂直线状展开         23 随机产生一种过渡方式  
```
## CSS3 perspective 属性

* 浏览器支持

目前浏览器都**不**支持 `perspective` 属性。
Chrome 和 Safari 支持替代的 `-webkit-perspective` 属性。

* 定义和用法

perspective 属性定义 3D 元素距视图的距离，以像素计。该属性允许您改变 3D 元素查看 3D 元素的视图。
当为元素定义 perspective 属性时，其子元素会获得透视效果，而不是元素本身。

**注释**：perspective 属性只影响 3D 转换元素。

```css
perspective: number|none;
```

## CSS3 backface-visibility 属性

`backface-visibility` 属性定义当元素不面向屏幕时是否可见。
如果在旋转元素不希望看到其背面时，该属性很有用。

```css
backface-visibility: visible|hidden;
```

## before 与 after 伪元素

**一个小知识点：after伪元素默认的显示层级高于before伪元素。**

## transform-origin

transform-origin 属性允许您改变被转换元素的位置。
2D 转换元素能够改变元素 x 和 y 轴。3D 转换元素还能改变其 Z 轴。

```css
transform-origin: x-axis y-axis z-axis;
```
参考网址：[CSS3 transform-origin 属性](http://www.w3school.com.cn/cssref/pr_transform-origin.asp)
