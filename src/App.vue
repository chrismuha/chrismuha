<script setup>
import { RouterView } from 'vue-router';
import router from './router';
import { onMounted, ref } from 'vue';

const isLoading = ref(false);

router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});

onMounted(() => {

})
</script>

<template>
  <div v-if="isLoading" id="preloader">
    <img src="@/assets/img/white-banner.png" alt="Loading logo">
    <p>Loading... please wait...</p>
  </div>

  <RouterView v-show="!isLoading" />
</template>
<style>
@import url('@/assets/bootstrap.min.css');
@import url('@/assets/main.css');
</style>