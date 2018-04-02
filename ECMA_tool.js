/* 工具函数  */
var ECMA_tool = {};

//用 setTimeout 模拟 setInterval,不同点是这个方法确保两次执行之间有固定的间隔，
ECMA_tool.interval = function(fun, wait) {
    var inte = function() {
      fun.call(null);
      setTimeout(inte, wait);
    }
    setTimeout(inte, wait);
  }
//返回一个区间的随机数，传入的参数第一个要为小值，第二个为大值。
ECMA_tool.random = function(min, max) {
    var choices = (max - min) + 1;
    if(!isNaN(choices)) {
      return Math.floor(Math.random() * choices + min);
    }
};
//交换两个变量保存的数据
ECMA_tool.rever = function(a, b) {
    var c = 0;
    c = a;
    a = b;
    b = c;
    return {
      a: a,
      b: b
    };
};
//获取数据类型
ECMA_tool.dataType = function(data) {
    var str = Object.prototype.toString.call(data);
    return str.match(/\[object (.*?)\]/)[1].toLowerCase();
};
