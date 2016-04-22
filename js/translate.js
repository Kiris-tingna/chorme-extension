$(function (){
    var container = $(".gs-container");
    // tooltip
    $("body").append($("<div>").addClass("tooltip"));
    var tooltip = $(".tooltip");
    var ww = $(window).width();
    var wh = $(window).height();

    // popup a tooltip div
    function tip(data, x, y) {
        var str = "<h1>"+data.content+"<span>["+data.pronunciation+"]</span></h1>"
                +"<span class='to-fs J_Aus_Hook'><i></i>发音</span>"
                +"<audio class='J_Aua_Hook' src='"+data.audio+"'></audio>"
                +"<p class='desc'>"+data.definition+"</p>";
        tooltip.html(str);

        // bottom
        if( y + tooltip.outerHeight() > wh ) {
            y = y - tooltip.outerHeight() - 40 ;
        }else {
            y = y + 20;
        }
        // right
        if( x + tooltip.outerWidth() > ww ) {
            x = x - tooltip.outerWidth() - 20;
        }else{
            x = x + 20;
        }

        // left
        if( x < 0){
            x = 0;
        }
        // top
        if( y < 0){
            y = 0;
        }

        // add audio listener
        $('.J_Aus_Hook').on('click', function (e) {
            $('.J_Aua_Hook')[0].play();
        })

        tooltip.css({
            "top": y,
            "left": x
        }).fadeIn('slow');
    }

    // ajax
    function shanbei (word, x, y) {
        $.ajax({
            url : "https://api.shanbay.com/bdc/search/",
            type: "GET",
            dataType: "json",
            data: {"word": word}
        }).done(function (data) {
            // console.log(data);
            if(data.msg == "SUCCESS"){
                tip(data.data, x , y);
            }else if(data.status_code == 1){
                tip({
                    "content": "未找到单词",
                    "pronunciation": "无",
                    "audio": "",
                    "definition": ""
                })
            }
            
        }).fail(function () {
            console.log("error");
        })
    }

    // add listenner
    container.mouseup(function (e) { 
        var content = "";
        /**
         * get my select word
         */
        if (document.selection) { 
            content = document.selection.createRange().text;
        } 
        else if (window.getSelection()) {
            content = window.getSelection();
        }
        var word = content.toString();

        if(word != "") {
            var x = e.pageX;
            var y = e.pageY;
            // console.log(x, y);
            shanbei(word, x , y);
        }

    }).mousedown(function () { 
        tooltip.fadeOut('fast');
    });


})