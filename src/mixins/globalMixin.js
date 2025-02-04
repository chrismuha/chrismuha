export default {
    mounted() {
      this.initializeTheme();
      this.handleScrollEvents();
      this.checkNewsBanner();
    },
    methods: {
      initializeTheme() {
        const btn = document.getElementById('theme-switch');
        let theme = localStorage.getItem("theme");
  
        if (theme === "dark" || (window.matchMedia('(prefers-color-scheme: dark)').matches && !theme)) {
          document.body.classList.add('dark-theme');
          if (btn) btn.checked = true;
        } else {
          if (btn) btn.checked = false;
        }
  
        if (btn) {
          btn.addEventListener('input', ({ target }) => {
            if (target.checked) {
              document.body.classList.add('dark-theme');
              localStorage.setItem("theme", "dark");
            } else {
              document.body.classList.remove('dark-theme');
              localStorage.setItem("theme", "light");
            }
          });
        }
  
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
          if (event.matches) {
            document.body.classList.add('dark-theme');
            if (btn) btn.checked = true;
          } else {
            if (btn) btn.checked = false;
            document.body.classList.remove('dark-theme');
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
      },
  
      scrollUp() {
        const circleTopButton = document.getElementById("top");
  
        console.log("Hey")
  
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        circleTopButton.classList.add('hover-animation');
        setTimeout(() => {
          circleTopButton.classList.remove('hover-animation');
        }, 500);
      }
    }
  };
  