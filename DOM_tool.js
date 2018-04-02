/* 工具函数  */
var DOM_tool = {};

//获取元素计算后的元素样式值，参数是元素、css属性名
DOM_tool.getStyle = function(obj, attr) {
  return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj, false)[attr];
};
//pc端跳转移动端代码
DOM_tool.mob = function() {
    var sUserAgent = navigator.userAgent;
    if(sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('iPhone') > -1 || sUserAgent.indexOf('iPad') > -1 || sUserAgent.indexOf('iPod') > -1 || sUserAgent.indexOf('Symbian') > -1) {
      location.href = './m/index.html';
    };
};