# lesson 3 总结
[DEMO预览地址](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson3/index.html)

## line-height（行高）

与大多数CSS属性不同，line-height支持属性值设置为无单位的数字。有无单位在子元素继承属性时有微妙的不同。
* 语法

line-height: normal | <number> | <length> | <percentage>
normal 根据浏览器决定，一般为1.2。
number 仅指定数字时（无单位），实际行距为字号乘以该数字得出的结果。可以理解为一个系数，子元素仅继承该系数，子元素的真正行距是分别与自身元素字号相乘的计算结果。大多数情况下推荐使用，可以避免一些意外的继承问题。length 具体的长度，如px/em等。
percentage 百分比，100%与1em相同。

* 有单位（包括百分比）与无单位之间的区别
有单位时，子元素继承了父元素计算得出的行距；无单位时继承了系数，子元素会分别计算各自行距（推荐使用）。

由此可以得出demo页面的三种计算方式：
* 百分比：父元素的行高为150%时，会根据父元素的字体大小先计算出行高值然后再让子元素继承。所以当line-height:150%时，字元素的行高等于16px * 150% = 24px
* em：父元素的行高为1.5em时，会根据父元素的字体大小先计算出行高值然后再让子元素继承。所以当line-height:1.5em时，子元素的行高等于16px * 1.5em = 24px
* 无单位：父元素行高为1.5时，会根据子元素的字体大小动态计算出行高值让子元素继承。所以，当line-height:1.5时，子元素行高等于30px * 1.5 = 45px

总的来说，当父元素行高为百分比和em时，会根据父元素的字体大小先计算出行高值然后再让子元素继承。当父元素行高为无单位情况下，会根据子元素的字体大小动态计算出行高值让子元素继承。

参考地址：[CSS:line-height:150%与line-height:1.5的真正区别是什么？](https://www.zhihu.com/question/20394889)

## float (浮动)

由于浮动的设置，两个块级元素不在各占一行，而是在同一行中一起显示。如果希望两个仍各占一行，则可以用clear属性来清楚浮动。其中设置该属性的值为`both`时，表示在元素的左右两侧均不允许浮动元素。

```css
*{
    clear:both;
}
```
具体请通过预览DEMO来观察。

## text-shadow、box-shadow

```css
text-shadow:x y deg color;
box-shadow:x y deg speed color inset/outset;
```

## 样式优先级 由低到高

* 通用选择器。如`*{...}`
* 标签选择器。如`h1{...}`
* 类选择器。如`.nav{...}`
* 伪类选择器。如`a:hover{...} 、 li:first-child{...}`
* ID选择器。如`#title{...}`
* 行间样式。如`<div style = "color:red;"></div>`