# lesson 4 总结
[DEMO预览地址](http://htmlpreview.github.io/?https://github.com/rocwangv/html5-learning/blob/master/lesson4/index.html)

> 终于迎来了我喜欢的 javascript 环节了呢，嘻嘻~

## console

```js
console.log(msg); //正常显示
console.error(msg); //淡红底色并带有错误标志
console.info(msg);// 正常
console.debug(msg);// 调试信息
console.warn(msg);// 淡黄色底色并带有警告标志
```

`tip:` 在Console窗口中要为代码换行时，可以使用Shift+Enter组合键。

## function

* 立即执行函数 (IIFE: Immediately Invoked Function Expression)

如果定义了一个匿名函数且没有将其赋予某个变量，要执行这个匿名函数，则可以采用`(function(){})()的代码格式。其中前一个括号里面是匿名的函数，后一个括号中是传入的参数，如果没有参数则括号中的内容可以为空，代码如下：

```js
(function(name){
    console.log('My name is '+name);
})('Roc') //输出 My name is Roc
```
当然，也有其他写法，如：

```js
(function(name){
    console.log('My name is '+name);
}('Roc')) //输出 My name is Roc
```
和

```js
!function(name){
    console.log('My name is '+name);
}('Roc') //输出 My name is Roc
```
简单来说，`IIFE`的作用在于使得函数在被载入时自动执行，同时利用匿名函数和闭包的特性形成一个独立的作用域，将内部所有的变量封闭起来，使其不会影响到函数外部的其他变量。

## cancelBubble 和 stopPropagation

> 可以参考DEMO中的应用来理解

事实上`stopPropagation`和`cancelBubble`的作用是一样的，都是用来阻止浏览器默认的事件冒泡行为。
不同之处在于`stopPropagation`属于W3C标准，试用于Firefox等浏览器，但是不支持IE浏览器。相反`cancelBubble`不符合W3C标准，而且只支持IE浏览器。所以很多时候，我们都要结合起来用。不过，`cancelBubble`在新版本chrome,opera浏览器中已经支持。
所以，一般我们都写作：

```js
    elem.onclick = function(e){
         window.event ? e.cancelBubble = true : e.stopPropagation();
    }
```
另外，`jquery`的`stopPropagation()`已经做了兼容性处理：

```js
jQuery.Event.prototype = {
    stopPropagation: function() {
        this.isPropagationStopped = returnTrue;

        var e = this.originalEvent;
        if ( !e ) {
            return;
        }
        // if stopPropagation exists run it on the original event
        if ( e.stopPropagation ) {
            e.stopPropagation();
        }
        // otherwise set the cancelBubble property of the original event to true (IE)
        e.cancelBubble = true;
    }
}
```

参考网址：[Event.cancelBubble - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble)

