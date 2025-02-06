<template>
    <div class="page-banner for-desktop" :style="bannerStyle" :data-content="bannerContent">
        <img :src="'/banners/size-2-banners/' + banner  + '-banner' + '.jpg'" alt="page banner">
    </div>
    <div class="page-banner for-mobile" :style="bannerStyle" :data-content="bannerContent">
        <img :src="'/banners/size-1-banners/'+ banner  + '-banner' + '.jpg'" alt="page banner">
    </div>
</template>
<style scoped>
    .page-banner::before {
        content: attr(data-content);
        color: var(--banner-color, unset);
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
                home: 'red',
                about: '#fbe106',
                services1: '#FF8B28',
                billing: '#85BB65',
                shop1: '#37B3DA',
                policies: 'unset',
                hiring: 'unset',
                Default: 'unset'
            };
            return colors[this.banner] || colors.Default;
        },
        getBannerContent() {
            const contents = {
                home: 'Virtual Computer Repair',
                about: 'About Chris Muha',
                services1: 'MCR Services',
                billing: 'MCR Billing',
                shop1: 'Chris Muha Book',
                policies: 'MCR Policies',
                hiring: 'Work For MCR',
                Default: 'Page Banner'
            };
            return contents[this.banner] || contents.Default;
        }
    }
}
</script>