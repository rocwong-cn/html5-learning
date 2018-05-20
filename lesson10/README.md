# lesson 10 总结
[DEMO预览地址](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson10/index.html)


## canvas

canvas本身没有绘图能力，需要通过它的`getContext()`方法来返回可绘图的对象。

清除画布区域：

```js
context.clearRect(0,0,window.innerWidth,window.innerHeight);
```
Canvas中的`arc()`方法可用于创建原型形状，它的几个参分别代表圆心的x坐标、y坐标、半径、起始角度和结束角度。其中角度的单位是"弧度"而非"角度"，因此要绘制一个完整的原型，其起始角度为0，结束角度应为2π。

```js
context.arc(100, 100, 5, 0, Math.PI * 2);
```

## 随机颜色

```js
'#'+('000000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
```

## GSAP

[带缩略效果的飞机](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson10/gsap.html)
[会旋转的飞机](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson10/example2.html)
[矩形变圆形](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson10/example3.html)
[盒子横向展开效果](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson10/example4.html)

更多介绍见Github:[GreenSock-JS](https://github.com/greensock/GreenSock-JS)