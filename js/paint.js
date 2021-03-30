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


    $(".box2 ul").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,

    });

    //1.이미지 슬라이드 



});
