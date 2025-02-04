<template>
    <nav class="navbar navbar-expand-lg navbar-dark nav-mob scrollclick" id="nav">
        <div class="container-fluid" id="navContainer">

        <div class="brand-desk">
            <a class="navbar-brand" href="index" target="_self">
            <img src="@/assets/img/black-banner.png">
            </a>
        </div>

        <button class="nav-toggle-btn a-nav-toggle" @click="toggleMenu">
            <span class="nav-toggle">
            <span class="stick stick-1"></span>
            <span class="stick stick-2"></span>
            </span>
        </button>

        <a class="navbar-brand brand-mob" href="index" target="_self">
            <img src="@/assets/img/black-banner.png">
        </a>

        <div class="hide-menu a-nav-toggle" @click="toggleMenu"></div>

        <div class="menu">

            <nav class="menu-main" id="accordion">
            <ul id="menuMain" class="navbar-nav d-flex flex-column ms-3">
                <li class="nav-item">
                <a class="nav-link active" href="index" target="_self">HOME</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="about" target="_self">ABOUT</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="services" target="_self">SERVICES</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="billing" target="_self">BILLING</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="book" target="_self">BOOK</a>
                </li>
                <!-- <li class="nav-item">
                        <a class="nav-link" href="shop" target="_self">SHOP</a>
                    </li> -->
                <li class="nav-item">
                <a class="nav-link" href="policies" target="_self">POLICIES</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="hiring" target="_self">HIRING</a>
                </li>
                <!--
                    <li class="nav-item">
                        <a class="nav-link" href="form-apply" target="_self">APPLY</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="form-exam" target="_self">TAKE EXAM</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="form-support" target="_self">GET SUPPORT</a>
                    </li> -->
            </ul>
            </nav>

        </div>

        <input type="checkbox" id="theme-switch" class="theme-switcher">
        </div>
    </nav>
</template>
<script>
import globalMixin from '@/mixins/globalMixin';

export default {
    mixins: [globalMixin]
}
</script>