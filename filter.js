// show icon  
chrome.extension.sendRequest();
// pattern  
var reg = new RegExp('[^>]*不分享[^<]*', 'g');  
var msg = '提醒您：此信息中可能含有另您不愉快的内容，眼不见心不烦。';

// filter ads
var spans = document.getElementsByTagName('span'); 
for (var s = 0; s < spans.length; s++) {  
    var context = spans[s].innerHTML.replace(/<[^>]+>/g, '');

    if (reg.test(context)) {  
        spans[s].innerHTML = msg;  
    }  
}