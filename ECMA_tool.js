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
// 获取数据类型，并创建断言函数。
ECMA_tool.type = function (o){
  var s = Object.prototype.toString.call(o);
return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
ECMA_tool.classof = function(o) {
  if(o === null) {return 'Null'};
  if(o === undefined) {return 'Undefined'};
  return Object.prototype.toString.call(o).slice(8,-1);
}
['Null','Undefined','Object','Array','String','Number','Boolean','Function','RegExp'].forEach(function (t){
  ECMA_tool.type['is' + t] = function(o){
    return ECMA_tool.type(o) === t.toLowerCase();
  };
});
// 对象继承
ECMA_tool.inherit = function (o){
  if(p === null){throw new TypeError(); }
  if(Object.create){ return Object.create(o); }
  var t = typeof o;
  if(t !== 'object' && t !== 'function'){ throw new TypeError(); }
  function F(){};
  F.prototype = o;
  return new F();
};
// 测试一个字符是否为四字节组成
ECMA_tool.is32Bit = function(str){
  if(typeof str === 'string'){
    return str.codePointAt(0) > 0xFFFF;
  }else{
    throw new TypeError(str + 'is not String');
  }
}
 