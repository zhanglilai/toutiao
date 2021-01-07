(function(){
    function setFontSize() {
         var deviceW = document.documentElement.clientWidth;
        if (deviceW >= 750) {
            document.documentElement.style.fontSize = 100 + "px";
        } else {
            // 750要根据设计稿定义
            document.documentElement.style.fontSize = deviceW / 750 * 100 + "px";
        }
    }
    window.addEventListener("resize", function() {
        setFontSize();
    });
    setFontSize();
})();


// 禁止页面下拉
/*window.onload = function() {
    document.body.addEventListener('touchmove', function (e) {
        e.preventDefault(); 
    }, {passive: false}); 
}*/



//  当文本框（指input或textarea）获取焦点时，手机自带的键盘会被唤起并且弹出来。
//  导致fixed或absolute定位的按钮被手机键盘顶上去的问题
/*var win_h = $(window).height();//关键代码
window.addEventListener('resize', function () {
    if($(window).height() < win_h){
        $('.share-btn-box').hide();
    }else{
        $('.share-btn-box').show();
    }
});*/


//  窗口滚动时显示
/* $(window).scroll(function(){
    // 滚动条距离顶部的距离 大于 200px时
    let h = $(window).scrollTop();
    if (h>=0 && h<=100) {
        let opa = h / 100;
        $('.header').css({opacity: opa});
    }
    if (h < 0) {
        $('.header').css({opacity: 0});
    }
}); */



//  禁止页面缩放, 但允许下拉
/*document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, {passive: false});
*/