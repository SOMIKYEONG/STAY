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

    // $(document).ready(function () {
    //     $(".eve_a").show();
    //     $(".eve_b").show();
    //     $(".eve_c").hide();

    //     $("#a_1_1").click(function () {
    //         $(".eve_a").show();
    //         $(".eve_b").show();
    //         $(".eve_c").hide();
    //     });

    //     $("#a_1_2").click(function () {
    //         $(".eve_a").show();
    //         $(".eve_b").hide();
    //         $(".eve_c").show();
    //     });



    });






});
