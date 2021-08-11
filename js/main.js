(function() {
    // gnb_box 열기
    var btnOpen = document.querySelector('.btn_open');
    var gnbBox = document.querySelector('.gnb_box');

    btnOpen.addEventListener('click', function () {
        gnbBox.classList.toggle('show');
    });
})();