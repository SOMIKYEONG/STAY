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
var rollHeader = 100;
$(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= rollHeader) {
        $('.header').addClass('roll');
    } else {
        $('.header').removeClass('roll');
    }
});

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}
});



