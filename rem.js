/*
 * 淘宝移动端的自适应方案
 *
 * 方案原理：动态的更改mate标签中的缩放比例，比例的比值是通过加载时获取设备的devicePixelRatio值除1得到。将这个值赋 给mate标签之后，设备就会显示设置的像素值，解决了设备像素与css像素不一致的问题。
 * 而多设备自适配的解决则是使用rem值来设置，方法是html元素的字体大小设置为设备宽的十分之一。
 * 使用方法：在head加载这个js文件，然后1rem值就是设计图的宽除以10，页面中所有用到元素布局都用rem来实现。缺点是换算不方便，结合Less来动态换算。
 * */
(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;
  //动态设置缩放比
  var scale = 1 / devicePixelRatio;
  document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale + ',minimum-scale=' + scale + ',maximum-scale=' + scale + ',user-scalable=no');

  // adjust body font size  设置文档文字的默认大小为12的dpr倍数。
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize);
    };
  };
  setBodyFontSize();

  // set 1rem = viewWidth / 10 设置1rem的值
  function setRemUnit() {
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + 'px';
  };

  setRemUnit();

  // reset rem unit on page resize  页面重新加载时更新1rem的值
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      setRemUnit();
    };
  });

  // detect 0.5px supports 检测0.5px支持
  if (dpr >= 2) {
    var fakeBody = document.createElement('body');
    var testElement = document.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    };
    docEl.removeChild(fakeBody);
  };
}(window, document));

/*
 * 网易移动端自适应方案 
 * 
 * 方案原理：固定缩放比值为1，加载时动态的改变html元素的字体大小，先通过设计图宽除以100得到一个比值n，然后用设置宽除以这个比值n得到字体大小的值，这也是1rem的值，这样就将设置宽与rem关联起来了。
 * 
 * 使用方法：加载这个js文件之后，要运行函数flexible163(w),参数是设计宽的宽。优点是制做网页时rem的值是固定的100.换算方便。
 * */

//	参数为设计图的宽
function flexible163(w) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;
  var n = w / 100;
  //动态设置meta
  function setMeta() {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=1,maximum-scale=1, minimum-scale=1');
  }
  if (document.querySelector('meta[name="viewport"]')) {
    setMeta();
  } else {
    var oMeta = document.createElement('meta');
    oMeta.setAttribute('name', 'viewport');
    document.querySelector('head').insertBefore(oMeta, document.querySelector('title'));
    setMeta();
  }


  // adjust body font size  设置文档文字的默认大小为12的dpr倍数。
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px';
      document.body.style.width = n + 'rem';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10 设置1rem的值
  function setRemUnit() {
    var rem = docEl.clientWidth / n;
    docEl.style.fontSize = rem + 'px';
  }
  setRemUnit();

  // reset rem unit on page resize  页面重新加载时更新1rem的值
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

}
