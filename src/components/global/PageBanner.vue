<template>
    <div class="page-banner for-desktop">
        <img :src="'/banners/size-2-banners/' + banner  + '-banner' + '.jpg'" alt="page banner">
    </div>
    <div class="page-banner for-mobile">
        <img :src="'/banners/size-1-banners/'+ banner  + '-banner' + '.jpg'" alt="page banner">
    </div>
</template>
<script>
export default {
    props: {
        banner: String
    }
}
</script>