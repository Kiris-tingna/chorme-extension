// --------------- 删除无响应的多余js 和 广告 ------------------
$(function(){
    while(document.head.getElementsByTagName('script').length>0){
        document.head.removeChild(document.head.getElementsByTagName('script')[0]);
    }
    // 删除所有iframe
    try{$('iframe').remove()}catch(e){throw "Ex 0"}
    // 删除头部广告
    // Dom.remove('dfp-ad--top-above-nav');
    $('.top-banner-ad-container').remove();
    try{$('#dfp-ad--inline1').remove()}catch(e){throw "Ex 1"}
    try{$('#more-on-this-story').remove()}catch(e){throw "Ex 2"}
    // 删除头部
    try{$('#header').remove()}catch(e){throw "Ex 3"}

    $('.content__meta-container').remove();
    // 删除尾部
    $('.submeta').remove();
    $('.content-footer').remove();
    $('.l-footer').remove();
    //console.log(Dom.get('article'));
});