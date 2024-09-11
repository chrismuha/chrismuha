// DOM ELEMENTS
const newsBannerSection = document.querySelector('.news-banner');
const newsBannerText = document.querySelector('.breaking-news-headline');
var loader = document.getElementById("preloader");
const circleTopButton = document.getElementById("top");

newsBannerText.innerText = ''

window.addEventListener("load", function () {
    loader.style.display = "none";
})

circleTopButton.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    circleTopButton.classList.add('hover-animation');
    setTimeout(() => {
        circleTopButton.classList.remove('hover-animation');
    }, 500);
})

$('.a-nav-toggle, .menu-main a').on('click', function(){
    if ($('html').hasClass('body-menu-opened')) {
        $('html').removeClass('body-menu-opened').addClass('body-menu-close');
    } else {
        $('html').addClass('body-menu-opened').removeClass('body-menu-close');
    }
});


if (newsBannerText.innerText == false) {
    newsBannerSection.style.display = 'none';
} else {
    newsBannerSection.style.display = 'block';
}
