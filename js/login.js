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
$(document).ready(function () {
    $('.btn_login').click(function () {
        console.log();
        $('.login').hide();
        location.href='index.html';
    });
});

$(document).ready(function () {
    $('.btn_join').click(function () {
        console.log();
        $('.login').hide();
        location.href='join.html';
    });
});

