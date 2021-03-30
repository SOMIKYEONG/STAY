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
});

$('main a').click(function (e) {
    e.preventDefault();
});

$(function () {
    var rollHeader = 600;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= rollHeader) {
            $('.color_a, .best').css('background-color', '#fdd16e')
        } else {
            $('.color_a, .best').css('background-color', '#fff');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});

$(function () {
    var rollHeader = 1300;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= rollHeader) {
            $('.best2').css('background-color', '#253f62')
        } else {
            $('.best2').css('background-color', '#fff');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});
