var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
loader.style.display = "none";
})


$('.a-nav-toggle, .menu-main a').on('click', function(){
    if ($('html').hasClass('body-menu-opened')) {
        $('html').removeClass('body-menu-opened').addClass('body-menu-close');
    } else {
        $('html').addClass('body-menu-opened').removeClass('body-menu-close');
    }
});
