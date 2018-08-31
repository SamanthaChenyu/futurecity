$(function() {
    $(window).load(function() {
        $(".loading").fadeOut();
    });
});
$(document).ready(function() {
    var width = $(window).width();
    if ( width > 1024 ) {
        nav();
    } else {
        var IndexTittle = 19; 
        $(".description-box p").each(function(i){
            if($(this).text().length>IndexTittle){
                $(this).attr("title",$(this).text());
                var text=$(this).text().substring(0,IndexTittle-1)+"...";
                $(this).text(text);
            }
        });
    }
    function nav() { 
        $('aside').simpleScrollFollow({
            limit_elem: $('.left-box')
        }); 
    } 
    $(".connet").click(function(){
        $(this).toggleClass("down");
        $(this).siblings('.sudeMenuSub').slideToggle();
    });  
    $("menu").click(function(){
        if ( $(".menu").hasClass("show") ) {
            $(".menu").removeClass("show");
        } else {
            $(".menu").addClass("show");
        }
    });
    $(".close").click(function(){
        $(".menu").removeClass("show");
    });   
    //開啟搜尋區塊
    $('#search,#mb-search').click(function () {
        $('.frombox').fadeToggle();
        $('.closeTouch').addClass('show');
        return false;
    });
    //關閉搜尋區塊
    $('.closeTouch').click(function () {
        $(this).removeClass('show');
        $('.frombox').fadeToggle();
        return false;
    });
  });
  $(function() {// 超過X個字以"..."取代
    var album = 45;
    $(".Album h3.tittle").each(function(i){
        if($(this).text().length>album){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,album-1)+"...";
            $(this).text(text);
        }
    });
    var albumDescript = 80;
    $(".Album p.descript").each(function(i){
        if($(this).text().length>album){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,album-1)+"...";
            $(this).text(text);
        }
    });
    var len = 45; 
    $(".data-info p").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
    var tittle = 36;
    $(".data-info h3").each(function(i){
        if($(this).text().length>tittle){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,tittle-1)+"...";
            $(this).text(text);
        }
    });    
    var lilen = 15; 
    $(".hotarticle a").each(function(i){
        if($(this).text().length>lilen){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,lilen-1)+"...";
            $(this).text(text);
        }
    });
    var channllen = 15;
    $(".channlarticle a").each(function(i){
        if($(this).text().length>channllen){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,channllen-1)+"...";
            $(this).text(text);
        }
    });
// channal
    var channal = 70;
    $("#channal p").each(function(i){
        if($(this).text().length>channal){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,channal-1)+"...";
            $(this).text(text);
        }
    });   
// dosearch
    var dosearch = 50;
    $(".dosearch-right p").each(function(i){
        if($(this).text().length>dosearch){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,dosearch-1)+"...";
            $(this).text(text);
        }
    });  
    var dosearchH3 = 40;
    $(".dosearch-right h3").each(function(i){
        if($(this).text().length>dosearchH3){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,dosearchH3-1)+"...";
            $(this).text(text);
        }
    }); 

});