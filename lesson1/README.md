# lesson 1 总结
* 设置背景图片：
```css
background:url(pic.jpg) center center;
background-size:cover;
```
> background: #00FF00 url(bgimage.gif) no-repeat fixed top;
* transform

通过设置`translateY`的值来定位元素在Y轴的位置，如：
```css
transform:translateY(-50%);
```

* text-transform

| 值                    | 描述
| ----------------------- |:-------
| none     | 默认。定义带有小写字母和大写字母的标准的文本。      
| capitalize     | 文本中的每个单词以大写字母开头。     
| uppercase      | 定义仅有大写字母。     
| lowercase      | 定义无大写字母，仅有小写字母。    
| inherit      | 规定应该从父元素继承 text-transform 属性的值。    

* 清除默认间距

浏览器会对页面元素有默认的间距值，为了清除它们，一般做法是：
```css
html,body{
    margin: 0;
    padding: 0;
}
```
* 外部样式文件
一般的，我们会在css文件首行增加字符集设置：
```css
@charset "UTF-8";
```
* 事件拦截
通过获取到事件回调的`e`事件对象，来拦截事件响应：
```js
function onclick(e){
    e.preventDefault();
    //TODO
}
```
* 移动端适配
在`head`中增加：
```html
<meta name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no,user-scalable=yes,maximum-scale=1.0">
```
