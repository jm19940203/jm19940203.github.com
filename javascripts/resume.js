$(function(){
    //头部动画
    $("header img").delay(1500).animate({top:0,opacity:1},1500);
    $(".avastar_line").delay(3000).animate({width:"40%"},1000);
    $("header h1").delay(4000).animate({left:0},1000);
    $("header h2").delay(4000).animate({right:0},1000);

    //个人简介
    $(".exper_cont b").hover(function(){
        $(".pop",this).fadeIn();
        $(".pop_link1").delay(150).animate({right:0},300);
        $(".pop_link2").delay(300).animate({right:0},200);
        $(".pop_link3").delay(450).animate({right:0},200);
        $(".pop_link4").delay(600).animate({right:0},200);
    },function(){
        $(".pop",this).fadeOut(200);
        $(".pop a").css("right","-120%");
    });

    //个人技能
    $(window).scroll(function(){
        var winHeight=$(window).scrollTop();
        var skillHeight=$(".skill_cont").offset().top;
        if(skillHeight-winHeight<300){
            $(".skill_html .skill_scroll").animate({width:"85%"},2000);
            $(".skill_css .skill_scroll").animate({width:"85%"},2000);
            $(".skill_jq .skill_scroll").animate({width:"75%"},2000);
            $(".skill_js .skill_scroll").animate({width:"65%"},2000);
        }
    });
});