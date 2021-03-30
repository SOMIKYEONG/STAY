window.addEventListener('DOMContentLoaded', function () {
    var n = document.querySelector('header nav');
    var a = document.querySelectorAll('header nav a');

    a.forEach(function (e) {
        e.addEventListener('mouseover', function () {
            for (var i = 1; i <= a.length; i++) {
                n.classList.add('active');
            }
        });
        e.addEventListener('mouseout', function () {
            for (var i = 1; i <= a.length; i++) {
                n.classList.remove('active');
            }
        });
    });

    $('main a').click(function (e) {
        e.preventDefault();
    });

    //BEST PRODUCTS
    $(document).ready(function () {
        $(".d_1").show();
        $(".d_2").show();
        $(".d_3").hide();
        $(".d_4").hide();
        $(".d_5").hide();
        $(".d_6").hide();
        $(".d_1 .new").click(function (e) {
            var a = $(this).index();
            $(".box div").hide();
            $(".box div").eq(a).show();
        });
    });

    //NEW
    $(document).ready(function () {
        $("#g_3_1").show();
        $("#g_3_2").hide();
        $("#g_3_3").hide();
        $(".dot").click(function (e) {
            var a = $(this).index();
            $(".g_3 ul").hide();
            $(".g_3 ul").eq(a).show();
        });
    });

    //리빙데코 메뉴 클릭시 해당 div show
    $(document).ready(function () {
        $(".cushion").hide();
        $(".towel").hide();
        $(".blanket").hide();
        $(".sofa").hide();
        $(".apron").hide();
        $(".slippers").hide();

        $(".g_1 .a").click(function () {
            var a = $(this).index();

            $("#new").hide();
            $(".h_3").hide();
            $(".int_h .aa").hide();
            $(".int_h .aa").eq(a).show();
            if (a == 0) {
                $("#new").show();
                $(".load").load("interior_sub1.html");
                $(".h_3").show();
            }
        });
    });

    //리빙데코 마우스오버시 이미지변경
    $(document).ready(function () {
        var reImg;
        $(".1").mouseover(function () {
            reImg = $(this).attr('src');
            $(this).attr('src', 'img/stay.jpg');
        }).mouseout(function () {
            $(this).attr('src', reImg);
        });
    });

    //전체보기 html load
    $(document).ready(function () {
        $("#page1").show();
        $("#page2").hide();

        $("#1").click(function () {
            $(".load").load("interior_sub1.html");
        });
        $("#2").click(function () {
            $(".load").load("interior_sub2.html");
        });
        $("#3").click(function () {
            $(".load").load("interior_sub3.html");
        });
        $("#4").click(function () {
            $(".load").load("interior_sub4.html");
        });
        $("#5").click(function () {
            $(".load").load("interior_sub5.html");
        });
        $("#6").click(function () {
            $(".load").load("interior_sub6.html");
        });
        $("#next_btn").click(function () {
            $("#page2").show();
            $("#page1").hide();
            $(".load").load("interior_sub6.html");
        });
        $("#btn").click(function () {
            $("#page1").show();
            $("#page2").hide();
            $(".load").load("interior_sub5.html");
        });
    });

    $('.h_3').click(function () {
        $('html, body').stop().animate({
            scrollTop: $('.int_h').offset().top - 200
        });
    });


    /*에러
    1. 1,2,3,4,5,6,7 클릭하면 리빙데코 위로 이동 
    2. html을 호출해올때 자스 안먹음
    */

});
