/**
 * Created by danr on 2016/11/29.
 */
//    搜索框的隐藏和显示

$('#search-btn').click(function () {
    $('#search-input').focus();
//        $('#search-input').css('display','inline-block');
    $('#search-input').removeClass('hidden');
    $('#search-input').addClass('animated bounceInRight');
});

$('a[data-toggle="tab"]').hover(function(){
    $(this).tab('show');
});
$('#search-input').blur(function () {
    $('#search-input').addClass('hidden');
//        $('#search-input').css('display','none');
//        $('.form-control').css('display','none');

});
$( function () {
    var speed = 1000;//自定义滚动速度
    //回到顶部
    $( "#toTop").click( function () {
        $( "html,body").animate({ "scrollTop" : 0 }, speed);
    });
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        if (sTop >= 130) {
            if (!$("#scroll").is(":visible")) {
                try {
                    $("#scroll").slideDown();
                } catch (e) {
                    $("#scroll").show();
                }
            }
        }
        else {
            if ($("#scroll").is(":visible")) {
                try {
                    $("#scroll").slideUp();
                } catch (e) {
                    $("#scroll").hide();
                }
            }
        }
    });
});

$(function(){
    function footerPosition(){
        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.clientHeight ,//网页正文全文高度
            winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if(contentHeight < winHeight){
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            $("footer").addClass("fixed-bottom");
        } else {
            $("footer").removeClass("fixed-bottom");
        }
    }

    footerPosition();
    $(window).resize(footerPosition);
});
