<script setup>
import Footer from '@/components/global/Footer.vue';
import Navbar from '@/components/global/Navbar.vue';
import TopSection from '@/components/global/TopSection.vue';
import MenuTable from '@/components/global/MenuTable.vue';
import Reviews from '@/components/global/Reviews.vue';
import NewsBanner from '@/components/global/NewsBanner.vue';
import PageBanner from '@/components/global/PageBanner.vue';
</script>
<template>
  <Navbar />
  <NewsBanner />
  <PageBanner banner="hiring" />

  <main class="container hiring-container">
        <div class="hiring custompadding">
            <div class="bg-light-0" style="font-size: 16px;">
                <p class="fw-bold mw"
                    style="font-family: 'Poppins'; font-size:14px; font-weight: 600; display: flex; justify-content: center;">
                    I am interested in having more people on my team at Muha Computer Repair.
                    I am looking for developers that are well-experienced with using the following coding/programming
                    languages:
                <ul>
                    <li>C#</li>
                    <li>C++</li>
                    <li>Go</li>
                    <li>Kotlin</li>
                    <li>PHP</li>
                    <li>Python</li>
                    <li>Swift</li>
                </ul>
                It is vital that you keep up with your knowledge in the coding/programming languages by actively using
                them and continuing your education.
                I have innovations in mind that require complex code and therefore, a deep knowledge and understanding
                of Computer Science is necessary.
                I have lots of questions that I need answers to on the possibilities of development.
                Having an understanding of Information Technology (IT) is a must since my innovations will include but
                are not limited to computer repair softwares.
                <br> <i>Currently, I do not need anymore team members for HTML, CSS, and/or JavaScript, but please check
                    back later.</i>
                <!-- <br> I apologize, but currently, I am not hiring. Please check back later.-->
                <br><br>~Chris Muha <br> Owner & Lead Technician
                </p>
            </div>
        </div>
    </main>


    <Footer banner_light="/logo/MCRblack.png" banner_dark="/logo/MCRwhite.png"  />
</template>
<style scoped>
@import url('@/assets/main.css');
</style>
<script>
import globalMixin from '@/mixins/globalMixin';

export default {
  mixins: [globalMixin],
}
</script>