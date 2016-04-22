$(function (){
    var container = $('.content__article-body');
    
    var cons = container.children();
    container.after("<div class='warpper'></div>");
    var warpper = $(".warpper");

    warpper.after("<div class='pagination-warpper'></div>");
    var paginationWarpper = $(".pagination-warpper");
    
    // console.log($('.container').height());
    var ww = $(window).width();
    var wh = $(window).height() - 50;

    // create a page
    var page = [];
    var arr = [];
    var _h = 0;

    //---------------- 确定页数 -----------------
    for(var i = 0; i < cons.length; i++){
        var _dom = cons.eq(i);
        
        arr.push(i);
        // console.log("这是第"+i+"次"+arr);
        _h += _dom.height();

        if(_h > wh){
            arr.pop();
            page.push(arr);
            arr = [];

            _h = 0;
            arr.push(i);
            _h += _dom.height();
        }
        if( i + 1 == cons.length){
            page.push(arr);
        }
    }

    // console.log(JSON.stringify(page));

    // add page
    $.each(page, function (key , value){
        var el = $("<div>").addClass("page");
        el.attr("data-num", key + 1);
        for(var i = 0; i < value.length; i++){
           el.append(cons[value[i]]);
        }
        warpper.append(el);
    })

    

    // make btn
    var pagination = $("<div>").addClass("pagination");
    for(var i = 0 ;i <= page.length; i++){
        var span = $("<span>").addClass("ly-span");
        pagination.append(span.text(i));
    }
    paginationWarpper.append(pagination);

    // add listener
    $(".pagination span").on('click', function (e) {
        var num = parseInt($(this).text());
        // choose our taget page
        var target = $(".warpper .page[data-num="+num+"]");
        target.css('display','block').siblings().css('display','none');
    })

    // 善后
    var el = $("<div>").addClass("page");
    el.attr("data-num", 0);
    el.append($(".content__header")).append($(".tonal__standfirst")).append($("figure"));
    $('.warpper').prepend(el);

    warpper.children().css("display", "none");
    warpper.children().eq(0).css("display", "block");
})