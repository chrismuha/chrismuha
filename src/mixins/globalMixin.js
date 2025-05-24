export default {
    mounted() {
        this.initializeReadMore();
        this.initializeTheme();
        this.handleScrollEvents();
        this.checkNewsBanner();
        this.faqFunction();
    },
    methods: {
        addReadMoreToElement(element) {
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
                readMoreLink.classList.add('read-more-link');
                readMoreLink.textContent = 'Read more';
                // readMoreLink.style.marginLeft = '5px';
                readMoreLink.style.display = 'flex';
                readMoreLink.style.width = 'fit-content';
                
                const readLessLink = document.createElement('a');
                readLessLink.href = '#';
                readLessLink.classList.add('read-less-link');
                readLessLink.textContent = 'Read less';
                // readLessLink.style.marginLeft = '5px';
                readLessLink.style.display = 'none';
                readLessLink.style.width = 'fit-content';
                
                readMoreLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    truncatedSpan.style.display = 'none';
                    fullSpan.style.display = 'inline';
                    readMoreLink.style.display = 'none';
                    readLessLink.style.display = 'flex';
                });
                
                readLessLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    truncatedSpan.style.display = 'inline';
                    fullSpan.style.display = 'none';
                    readMoreLink.style.display = 'flex';
                    readLessLink.style.display = 'none';
                });
                
                element.innerHTML = '';
                element.appendChild(truncatedSpan);
                element.appendChild(fullSpan);
                element.appendChild(readMoreLink);
                element.appendChild(readLessLink);
            }
            
            element.dataset.processed = 'true';
        },
        
        initializeReadMore() {
            document.querySelectorAll('.cls li').forEach(n => {
                n.classList.add('read-more');
            });
            
            const elements = document.querySelectorAll('.read-more');
            elements.forEach(this.addReadMoreToElement);
        },

        initializeTheme() {
            const btn = document.getElementById('theme-switch');
            let theme = localStorage.getItem("theme");

            // Apply initial theme
            if (theme === "dark" || (window.matchMedia('(prefers-color-scheme: dark)').matches && !theme)) {
            document.body.classList.add('dark-theme');
            } else {
            document.body.classList.remove('dark-theme');
            }

            if (btn) {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                const isDark = document.body.classList.toggle('dark-theme');
                localStorage.setItem("theme", isDark ? "dark" : "light");
            });
            }

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const prefersDark = event.matches;
            const userSetTheme = localStorage.getItem("theme");

            if (!userSetTheme) {
                if (prefersDark) {
                document.body.classList.add('dark-theme');
                } else {
                document.body.classList.remove('dark-theme');
                }
            }
            });
        },

        handleScrollEvents() {
            const circleTopButton = document.getElementById("top");
            if (!circleTopButton) return;
    
            window.addEventListener('scroll', () => {
            circleTopButton.style.visibility = "hidden";
            });
    
            window.addEventListener('scrollend', () => {
            circleTopButton.style.visibility = "unset";
            });
        },
    
        checkNewsBanner() {
            const newsBannerText = document.querySelector('.breaking-news-headline');
            const newsBannerSection = document.querySelector('.news-banner');
    
            if (newsBannerText && newsBannerSection) {
            newsBannerText.innerText = "";
            newsBannerSection.style.display = newsBannerText.innerText ? 'block' : 'none';
            }
        },

        toggleMenu() {
            const html = document.documentElement;
    
            if (html.classList.contains('body-menu-opened')) {
            html.classList.remove('body-menu-opened');
            html.classList.add('body-menu-close');
    
            document.body.style.position = '';
            } else {
            html.classList.add('body-menu-opened');
            html.classList.remove('body-menu-close');
    
            document.body.style.position = 'fixed';
            }

            console.log('Menu toggled:', html.classList.contains('body-menu-opened') ? 'Opened' : 'Closed');
        },
    
        scrollUp() {
            const circleTopButton = document.getElementById("top");
    
            // console.log("Hey")
    
            window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
            circleTopButton.classList.add('hover-animation');
            setTimeout(() => {
            circleTopButton.classList.remove('hover-animation');
            }, 500);
        },

        faqFunction() {
            const questions = document.querySelectorAll('.faq-question');
            questions.forEach((question, i) => {
                if (!question.querySelector('.read-more')) {
                    const readMoreText = document.createElement('p');
                    readMoreText.innerText = "Read More";
                    question.appendChild(readMoreText);
                    readMoreText.classList.add('read-more');
                    readMoreText.style.marginBottom = 0;
                }
                
                question.addEventListener('click', () => {
                    const parent = question.parentElement;
                    parent.classList.toggle('active');

                    const readMoreText = question.querySelector('.read-more');
                    readMoreText.innerText = parent.classList.contains('active') ? "Read Less" : "Read More";
                });
            });
          },          
    }
};
  