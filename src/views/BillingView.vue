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
  <PageBanner banner="billing" />

  <main class="container">
    <div class="text-center centered-content" style=" position:relative; top:0; margin-bottom:0;">
      <p class="read-more"
        style="font-size:16px; font-weight:500; text-align: left;  font-family: 'Poppins'; width: 90%; margin: auto;">
        To request an appointment, contact us by email to <a
          href="mailto:muhachris297@gmail.com">muhachris297@gmail.com</a> or by phone <a
          href="tel:+1 (315)-338-1919">(315)-338-1919.</a> Feel free to use the contact buttons on this website to
        contact us in a speedier manner.
        You may also use any of the SCHEDULE buttons on this website.
        By clicking/tapping the SCHEDULE button, you will be redirected to our calendar where you can book an
        appointment.
        <br> You can also view the services we offer on the <a href="Services">Services Page</a> of this website.
      </p>
      <p class="read-more"
        style="font-size:16px; font-weight:500; text-align: left;  font-family: 'Poppins'; width: 90%; margin: auto;">
        <br><br> Please do not be alarmed if your browser asks you if it is okay to redirect you to that website.
        Once there, please select the service(s) that you are looking for assistance with.
        Be sure to leave us a brief description of the issue(s) you are having so we can best assist you.
        We will be more than happy to be of assistance to you.
      </p>
    </div>
    <div class="text-center centered-content">
      <div class="text-left"
        style="font-family: 'Poppins'; font-size:16px; font-weight:500; text-align:left; width: 90%; margin: auto;">
        <br> You can contact us by using our contact information listed in the footer of each page of this website too.
        You can also view our hours there.
        We would be happy to assist you!
        <br><br> We accept cash and checks.
        <br> We also accept debit cards and credit cards
        <br> We do not charge fees for using our POS System. Instead we have calculated those fees into our prices...
      </div>
    </div>

    <div class="text-center centered-content">
      <div class="spacing"></div>
      <div class="billing-text">
        <span class="text-decoration-underline mw">
          FOR SERVICES RENDERED,
          <br> PLEASE REMIT PAYMENT TO:
        </span>
        <br>
        <br>
        <span class="mw">Muha Computer Repair
          <br> ATTN: Chris Muha
          <br> P.O. Box 311
          <br> Boonville, NY 13309
        </span>
        <br>
        <br>
        <span class="text-decoration-underline mw">CHECKS CAN BE MADE OUT TO:
          <br>
        </span>
        <span class="mw">Muha Computer Repair
        </span>
      </div>
      <!-- <div class="spacing"></div>
        <p class="text-center px-3 mont mtc" style="font-size:13.5px;">
        <i>Please be aware that we have been trying our best to get approved for offering leasing to our customers.
        Unfortunately, leasing is only available to businesses that have store fronts.
        In the event we do offer leasing, it is for electronic purchasing only. Therefore, service charges are not eligible for leasing at this time.
        You may be billed more than what we charge <br> (*dependent on lease with lender).</i>
        </span>
        </p> -->
    </div>
  </main>

  <TopSection />
  <Reviews />
  <MenuTable />
  <TopSection />
  <Footer banner_light="/logo/MCRblackNred.png" banner_dark="/logo/MCRwhiteNred.png"  />
</template>
<style scoped>
@import url('@/assets/main.css');
.mtc {
  margin-top: -11px;
}
</style>
<script>
import globalMixin from '@/mixins/globalMixin';

export default {
  mixins: [globalMixin],
}
</script>