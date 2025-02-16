<template>
    <nav class="navbar navbar-expand-lg navbar-dark nav-mob scrollclick" id="nav">
        <div class="container-fluid" id="navContainer">

            <div class="brand-desk">
                <a class="navbar-brand" href="/" target="_self">
                    <img src="@/assets/img/black-banner.png">
                </a>
            </div>

            <button class="nav-toggle-btn a-nav-toggle" @click="toggleMenu">
                <span class="nav-toggle">
                    <span class="stick stick-1"></span>
                    <span class="stick stick-2"></span>
                </span>
            </button>

            <a class="navbar-brand brand-mob" href="/" target="_self">
                <img src="@/assets/img/black-banner.png">
            </a>

            <div class="hide-menu a-nav-toggle" @click="toggleMenu"></div>

            <div class="menu">

                <nav class="menu-main" id="accordion">
                    <ul id="menuMain" class="navbar-nav d-flex flex-column ms-3">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/" exact-active-class="active">HOME</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about" exact-active-class="active">ABOUT</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/services"
                                exact-active-class="active">SERVICES</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/billing"
                                exact-active-class="active">BILLING</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/book" exact-active-class="active">BOOK</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/policies"
                                exact-active-class="active">POLICIES</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/hiring" exact-active-class="active">HIRING</router-link>
                        </li>
                    </ul>
                </nav>

            </div>

            <input type="checkbox" id="theme-switch" class="theme-switcher">
        </div>
    </nav>
</template>
<style scoped>
@import url('@/assets/main.css');
</style>
<script>
import globalMixin from '@/mixins/globalMixin';

export default {
    mixins: [globalMixin]
}
</script>