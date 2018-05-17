# lesson 8 总结
[transition demo](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson8/index.html)
 | [animation demo1 - 会旋转的图标](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson8/animation.html)
 | [animation demo2 - 会移动的一排图标](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson8/animation2.html)
 | [animation demo3 - cubic bezier](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson8/animation2.html)

> 动画与特效

## transition

`transition` 属性是一个简写属性，用于设置四个过渡属性：

* transition-property
* transition-duration
* transition-timing-function
* transition-delay

**注释**：请始终设置 transition-duration 属性，否则时长为 0，就不会产生过渡效果。

**默认值：** `all 0 ease 0`

| 值                 | 描述
| -------------------|:--------
| transition-property | 规定设置过渡效果的 CSS 属性的名称。
| transition-duration | 规定完成过渡效果需要多少秒或毫秒。
| transition-timing-function | 规定速度效果的速度曲线。默认 `ease`
| transition-delay | 定义过渡效果何时开始。

属性取值：

* transition-property : `all` `none` 或者其他的属性值，如：`width` `background` 等
* transition-duration : `0.5s` `5000ms`
* transition-timing-function : `ease` `linear` `ease-in` `ease-out` `ease-in-out`
* transition-delay `0s`

一般用法：

```css
 transition: all 0.5s;

 transition: color 0.5s linear;
```

组合用法：

```css
  transition: color 0.5s linear, background .5s ease-in-out 1s;
```

## animation

`animation` 属性是一个简写属性，用于设置六个动画属性：

| 值                 | 描述
| -------------------|:--------
| animation-name | 规定需要绑定到选择器的 keyframe 名称。
| animation-duration | 规定完成动画所花费的时间，以秒或毫秒计。
| animation-timing-function | 规定动画的速度曲线。默认 `ease`
| animation-delay | 规定在动画开始之前的延迟。
| animation-iteration-count | 规定动画应该播放的次数。
| animation-direction | 规定是否应该轮流反向播放动画。

**注释**：请始终规定 animation-duration 属性，否则时长为 0，就不会播放动画了。

## animation-fill-mode

`animation-fill-mode` 属性规定动画在播放之前或之后，其动画效果是否可见。
**注释**：其属性值是由逗号分隔的一个或多个填充模式关键词。

语法:

```css
animation-fill-mode : none | forwards | backwards | both;
```

| 值                 | 描述
| -------------------|:--------
| none | 不改变默认行为。
| forwards | 当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
| backwards | 在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
| both | 向前和向后填充模式都被应用。

参考网址：

[理解animation-fill-mode属性](https://www.w3cplus.com/css3/understanding-css-animation-fill-mode-property.html)
[如何理解animation-fill-mode及其使用？](https://segmentfault.com/q/1010000003867335)

## 为动画添加 cubic-bezier （三次贝塞尔）函数

通过 [cubic-bezier](http://cubic-bezier.com) 网站来生成三次贝塞尔曲线函数，然后添加到`animation`后：

```css
.icon{
    animation: move 1s cubic-bezier(.51,-1.09,.39,1.89);
    -webkit-animation: move 1s cubic-bezier(.51,-1.09,.39,1.89);
}
```
