

export default {
    computed: {
        // Home
        isHomePage() {
            return this.$route.path === '/';
        },

        isAboutPage() {
            return this.$route.path === '/about';
        },
        isServicesPage() {
            return this.$route.path === '/services';
        },
        isBillingPage() {
            return this.$route.path === '/billing';
        },
        isBookPage() {
            return this.$route.path === '/book';
        },
        isPoliciesPage() {
            return this.$route.path === '/policies';
        },
        isHiringPage() {
            return this.$route.path === '/hiring';
        },


    },

    methods: {
        goToRoute(path) {
            this.$router.push(path)
        },

        scroll(hash) {
            const element = document.getElementById(hash ? hash.slice(1) : this.$route.hash.slice(1));
            if (element) {
                const duration = 1000;
                const start = window.scrollY;
                const change = element.getBoundingClientRect().top;
                const startTime = performance.now();

                const animateScroll = (currentTime) => {
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);
                    const easeInOutQuad = progress < 0.5
                        ? 2 * progress * progress
                        : -1 + (4 - 2 * progress) * progress;

                    window.scrollTo(0, start + change * easeInOutQuad);

                    if (progress < 1) {
                        requestAnimationFrame(animateScroll);
                    }
                };

                requestAnimationFrame(animateScroll);
            }
        }
    }
};