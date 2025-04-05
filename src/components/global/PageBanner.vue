<template>
    <div class="page-banner-wrapper">
        <div class="page-banner for-desktop" :style="bannerStyle" :data-content="bannerContent">
            <img :src="'/banners/size-2-banners/' + banner  + '-banner-1800x740' + '.webp'" alt="page banner">
        </div>
        <div class="page-banner for-mobile" :style="bannerStyle" :data-content="bannerContent">
            <img :src="'/banners/size-2-banners/'+ banner  + '-banner-1800x740' + '.webp'" alt="page banner">
        </div>
    </div>
</template>
<style scoped>
@import url('@/assets/main.css');
    /* .page-banner::before {
        content: attr(data-content);
        color: var(--banner-color, unset);
    } */

    .page-banner-wrapper {
        margin-top: 66px;
    }
</style>
<script>
export default {
    props: {
        banner: String
    },
    computed: {
        bannerStyle() {
            return {
                '--banner-color': this.getBannerColor(),
            };
        },
        bannerContent() {
            return this.getBannerContent();
        }
    },
    methods: {
        getBannerColor() {
            const colors = {
                home: '#ed2024',
                about: '#fbe106',
                services: '#FF8B28',
                billing: '#85BB65',
                shop: '#37B3DA',
                policies: 'white',
                hiring: 'white',
                Default: 'unset'
            };
            return colors[this.banner] || colors.Default;
        },
        getBannerContent() {
            const contents = {
                home: 'Virtual Computer Repair',
                about: 'About Chris Muha',
                services: 'MCR Services',
                billing: 'MCR Billing',
                shop: 'Chris Muha Book',
                policies: 'MCR Policies',
                hiring: 'Work For MCR',
                Default: 'Page Banner'
            };
            return contents[this.banner] || contents.Default;
        }
    }
}
</script>