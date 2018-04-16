// 模拟ES6 Math数学方法，用于未提供ES6 支持的环境。

// 数字取整，其它数据类型会调用Number函数
Math.trunc = Math.trunc || function(x){
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};
// 判断一个数是否是正数、负数、正零或负零。
Math.sign = Math.sign || function(x){
  x = +x; //这一步是将参数转换为数字，对变量使用一元+运算符相当于使用Number函数。
  if(x === 0 || isNaN(x)){
    return x;
  }
  return x > 0 ? 1 : -1;
};
// 求一个数的立方根，参数不是数字调用Number函数，该方法可以对负数开立方，而Math.sqrt方法不可以对负数开平方
Math.cbrt = Math.cbrt || function(x){
  var y = Math.pow(Math.abs(x),1/3);
  return x > 0 ? y : -y;
};
// 部署Number.isFinite方法
(function (global){
  var global_isFinite =  global.isFinite;
  Object.defineProperty(Number,'isFinite',{
    value:function isFinite(value){
      return typeof value === 'number' && global_isFinite(value);
    },
    configurable:true,
    writable:true,
    enumerable:false
  });
}(this));
// 部署Number.isNaN方法
(function (global){
  var global_isNaN = global.isNaN;
  Object.defineProperty(Number,'isNaN',{
    value:function isNaN(value){
      return typeof value === 'number' && global_isNaN();
    },
    configurable:true,
    writable:true,
    enumerable:false
  });
}(this));
// 部署Number.isInteger方法
(function(global){
  var floor = Math.floor,isFinite = global.isFinite;
  Object.defineProperty(Number,'isInteger',{
    value:function isInteger(value){
      return typeof value === 'number' && isFinite(value) && value > -9007199254740992 && value < 9007199254740992 && floor(value) === value;
    },
    configurable:true,
    writable:true,
    enumerable:false
  });
}(this));
// 部署Number.isSafeInteger方法
Number.isSafeInteger = function(n){
  return (typeof n === 'number' && Math.round(n) === n && Number.MIN_SAFE_INTEGER <= n && Number.MAX_SAFE_INTEGER >= n);
}
