$(function(){
  $("#main").on("click",".download",function(){
    isOperatingSystem();
  });
})
var isOperatingSystem = function(){
  //获取网络状态
    var ua = navigator.userAgent.toLowerCase();
    //安卓和IOS判断
    if(ua.indexOf("iphone") > -1) {
      window.location.href = 'https://itunes.apple.com/us/app/tnaot/id1296073079';
    }
    if(ua.indexOf("android") > -1) {
      window.location.href = 'http://www.tnaot.com/download/app/android';
    }
}
