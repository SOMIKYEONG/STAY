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
    $('.btn_join').click(function () {
        console.log();
        $('.join').hide();
        location.href = 'index.html';
    });
});

function openZipSearch() {
    new daum.Postcode({
        oncomplete: function (data) {
            $('[name=zip]').val(data.zonecode); // 우편번호 (5자리)
            $('[name=addr1]').val(data.address);
            $('[name=addr2]').val(data.buildingName);
        }
    }).open();
}
