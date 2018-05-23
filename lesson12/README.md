# lesson 12 总结
[DEMO预览地址](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson12/index.html)
[滚动触发动画](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson12/scroll-animate.html)

## ::selection

可以通过设置`::selection`伪元素来更改文字选区的背景色：

```css
    ::selection{
            text-shadow: none;
            color: #ffffff;
            background-color: #e74c3c;
        }
```
不过我们只能向`::selection`选择器应用少量CSS属性，如`color`、`background`、`cursor`及`outline`等。

