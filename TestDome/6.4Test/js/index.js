window.onload=function () {
        $(".content_ul li").mousemove(function () {
            $(".content_ul li").removeClass("active2");
            $(this).addClass("active2");
            $(".disdiv").hide();
            $(this).next().show();
        });
        $(".content_ul li").mouseout(function () {
            $(".disdiv").hide();
            $(".content_ul li").show();

        });


    var index = 0;//定义下标
    function fn(index) {
        $(".bo-ul li").hide();
        $(".bo-ul li").eq(index).show();
    }

//左
    $(".bo-icon1").click(function () {
        index--;
        if (index < 0) {
            index = 7;
        }
        fn(index);
    });
//右
    $(".bo-icon2").click(function () {
        index++;
        if (index > 7) {
            index = 0;
        }
        fn(index);
    });
    $(".bo-num li").click(function () {
        clearInterval(inter);
        var index1 = $(this).index();
        fn(index1);
    });
    var inter = setInterval(function () {
        $(".bo-icon2").click()
    }, 1000)

    $(".bo-ul li img").hover(function () {
        clearInterval(inter);
    }, function () {
        clearInterval(inter);
        inter = setInterval(function () {
            $(".bo-icon2").click()
        }, 1000)
    })
}


