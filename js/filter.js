// ------------ dom 节点 操作 -------------------
var Dom = {
    get: function(el) {
        if(typeof el === 'string'){
            return document.getElementById(el);
        }else{
            return el;
        }
    },
    remove: function(el) {
        var el = this.get(el);
        el.parentNode.removeChild(el);
    },
    clxNode: function(className) {
        var el =document.querySelector(className);
        el.parentNode.removeChild(el);
    }
};

// --------------- 删除无响应的多余js ------------------
window.onload = function(){
    while(document.head.getElementsByTagName('script').length>0){
        document.head.removeChild(document.head.getElementsByTagName('script')[0]);
    }
    // 删除头部广告
    // Dom.remove('dfp-ad--top-above-nav');
    Dom.clxNode('.top-banner-ad-container');
    Dom.remove('dfp-ad--inline1');
    Dom.remove('more-on-this-story');
    // 删除头部
    Dom.remove('header');
    // 删除尾部
    Dom.clxNode('.content-footer');
    Dom.clxNode('.l-footer');

    //console.log(Dom.get('article'));
};