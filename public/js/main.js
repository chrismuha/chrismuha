// DOM ELEMENTS
const newsBannerSection = document.querySelector('.news-banner');
const newsBannerText = document.querySelector('.breaking-news-headline');
var loader = document.getElementById("preloader");
const circleTopButton = document.getElementById("top");

newsBannerText.innerText = ''

window.addEventListener("load", function () {
    loader.style.display = "none";
})

window.addEventListener('scroll', function (event) {
    circleTopButton.style.visibility = "hidden";
});
window.addEventListener('scrollend', function (event) {
    circleTopButton.style.visibility = "unset";
});


circleTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    circleTopButton.classList.add('hover-animation');
    setTimeout(() => {
        circleTopButton.classList.remove('hover-animation');
    }, 500);
})

function addReadMoreToElement(element) {
    const maxLength = 100;

    if (element.dataset.processed) return;

    const originalContent = element.innerHTML.trim();

    if (originalContent.length > maxLength) {
        const truncatedContent = originalContent.slice(0, maxLength) + '...';

        const truncatedSpan = document.createElement('span');
        truncatedSpan.innerHTML = truncatedContent;

        const fullSpan = document.createElement('span');
        fullSpan.innerHTML = originalContent;
        fullSpan.style.display = 'none';

        const readMoreLink = document.createElement('a');
        readMoreLink.href = '#';
        readMoreLink.classList.add('read-more-link')
        readMoreLink.textContent = 'Read more';
        readMoreLink.style.marginLeft = '5px';

        readMoreLink.addEventListener('click', (e) => {
            e.preventDefault();
            truncatedSpan.style.display = 'none';
            fullSpan.style.display = 'inline';
            readMoreLink.style.display = 'none';
        });

        element.innerHTML = '';
        element.appendChild(truncatedSpan);
        element.appendChild(fullSpan);
        element.appendChild(readMoreLink);
    }

    element.dataset.processed = 'true';
}

function initializeReadMore() {
    const elements = document.querySelectorAll('.read-more');
    elements.forEach(addReadMoreToElement);
}

document.addEventListener('DOMContentLoaded', initializeReadMore);
document.onload = initializeReadMore;
window.addEventListener('load', initializeReadMore)

$('.a-nav-toggle, .menu-main a').on('click', function () {
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

console.log('hey 2')