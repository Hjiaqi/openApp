$(function() {
  var language = getQueryString("lan").lan;
  if(language == 'km' || language == 'km-KH') {
    showContent('km');
  } else if(language == 'zh' || language == 'zh-Hans') {
    showContent('zh');
  } else {
    showContent('en');
  }
  //获取网络状态，兼容QQ内置浏览器、QQ浏览器跳转
  if(getQueryString("iosLink").iosLink != undefined) {
    var iosUrl = decodeURIComponent(getQueryString("iosLink").iosLink,true);
    var ua = navigator.userAgent.toLowerCase();
    if(ua.indexOf("iphone") > -1 && ua.match(/QQ/i) == "qq" || ua.indexOf("iphone") > -1 && ua.indexOf('mqqbrowser')> -1 && ua.indexOf(" qq")<0) {
      var a = document.createElement('a');
      a.setAttribute('href', iosUrl);
      document.body.appendChild(a);
      a.click();
    }
  }
})
//根据语言插入节点
var showContent = function(lan) {
  var createNode = '<div class="content">' +
    '<div class="logo">' +
    '<img src="images/' + lan + '_logo@2x.png" alt="">' +
    '</div>' +
    '<div class="title">' +
    '<img src="images/' + lan + '_title@2x.png" alt="">' +
    '</div>' +
    '<div class="btn">' +
    '<img class="download" src="images/' + lan + '_btn@2x.png" alt="">' +
    '</div>' +
    '<div class="image">' +
    ' <img src="images/' + lan + '_img@2x.png" alt="">' +
    '</div>' +
    '</div>'
  $("#main").append(createNode);
}
// 获取URL的方法
var getQueryString = function() {
  var qs = location.search.substr(1), // 获取url中"?"符后的字串
    args = {}, // 保存参数数据的对象
    items = qs.length ? qs.split("&") : [], // 取得每一个参数项,
    item = null,
    len = items.length;

  for(var i = 0; i < len; i++) {
    item = items[i].split("=");
    var name = decodeURIComponent(item[0]),
      value = decodeURIComponent(item[1]);
    if(name) {
      args[name] = value;
    }
  }
  return args;
}
//rem适配
;
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {

      var clientWidth = docEl.clientWidth;
      if(!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
  if(!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);