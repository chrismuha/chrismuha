<template>
    
  <div class="text-center">
    <div class="buttons-section-index">
      <div class="buttons-ver-hor">
        <a class="btn schedule-button" style="margin-top:20px;" href="https://tinyurl.com/mcr-schedule-chrismuha"
          rel="nofollow"> <i class="bi bi-calendar-event-fill" style="margin-right: 5px;"></i>SCHEDULE </a>
        <a class="btn paybill-button" style="margin-top:20px;" href="https://tinyurl.com/mcr-payment" 
          rel="nofollow"> <i class="bi bi-file-earmark-check-fill" style="margin-right: 5px;"></i>PAY BILL </a>
      </div>
      <div class="buttons-ver-hor">
        <a class="btn giftcard-button" style="margin-top:20px;" href="https://tinyurl.com/mcr-gift-card-balance"
          rel="nofollow"> <i class="bi bi-gift-fill" style="margin-right: 5px;"></i>CHECK GIFT CARD BALANCE</a>
        <a class="btn downpay-button" style="margin-top:20px;" href="https://tinyurl.com/mcr-down-payment"
          rel="nofollow"> <i class="bi bi-credit-card-fill" style="margin-right: 5px;"></i> DOWN PAYMENT</a>
      </div>
    </div>
  </div>

  <div class="address-box">
    <p class="h5 number" style="color: white; font-size:20px; margin: 20px 12pt 0px 12pt; 
    background-color: #222; padding: 12pt 6pt; border-radius: 12pt; text-align: center;"> <u><b>SHIPPING
          ADDRESS:</b></u>
      <br> 140 Woodgate Dr. <br> Boonville, NY 13309 <br><br> <u><b>BILLING ADDRESS:</b></u>
      <br> PO Box 311 <br> Boonville, NY 13309
    </p>
  </div>

  <div class="d-flex justify-content-center align-items-center flex-wrap links-vertical" style="margin-top:20px; margin-bottom: 20px; gap:20px 3pt;">
    <div>
      <div style="text-align: center; justify-content: center;">
        <a class="btn callus-button" href="tel:+1 (315)-338-1919"><i class="bi bi-telephone-fill"></i>
          CALL US</a>
      </div>
    </div>
    <div>
      <a class="btn textus-button" href="sms:+13153381919"><i class="bi bi-chat-fill"></i>
        TEXT US</a>
    </div>
    <div>
      <div style="text-align: center; justify-content: center;">
        <a class="e_mail_top btn emailus-button" href="mailto:muhachris297@gmail.com"><i class="bi bi-envelope-fill"></i>
          E-MAIL US</a>
      </div>
    </div>
    <div>
      <div style="text-align: center; justify-content: center;">
        <a class="contact-form_top btn contactus-button" href="/contact"><i class="bi bi-pencil-fill"></i>
          CONTACT US</a>
      </div>
    </div>
  </div>

  <div
    style="text-align: center; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; width: 100%;">
    <a href=" https://facebook.com/muhachris " class="icon-button facebook" target=”_blank”><i
        class="fa fa-facebook"></i><span></span></a>
    <a href="  https://twitter.com/muhachris " class="icon-button twitter" target=”_blank”><i
        class="fa fa-twitter"></i><span></span></a>
    <a href="http://www.linkedin.com/in/chris-muha-9ab980262" class="icon-button linkedin"><i
        class="fa fa-linkedin"></i><span></span></a>
  </div>

  <div class="text-uppercase mx-5 review bookmark-footer">
    You may find the bookmarks <a href="/bookmarks">HERE</a> useful.
    They go into detail on the basics of computing and more.
  </div>

  <!-- <div class="contact-form-button">
    <p @click="goToRoute('/contact')">Contact Form</p>
  </div> -->
</template>
<style scoped>
@import url('@/assets/main.css');

@media screen and (max-width: 450px) {
  /* .buttons-ver-hor:nth-child(2) {
    flex-direction: column;
  } */
  /* .buttons-ver-hor:nth-child(2) a {
    width: fit-content;
    margin: auto;
  } */
  .buttons-ver-hor {
    flex-direction: column;
  }
  .buttons-ver-hor a {
    width: fit-content;
    margin: auto;
  }
  .links-vertical {
    flex-direction: column;
    align-items: start !important;
    margin: 0 1rem;
  }
}
</style>
<script>
import checkRouteMixin from '@/mixins/checkRouteMixin';
import globalMixin from '@/mixins/globalMixin';

export default {
    mixins: [globalMixin, checkRouteMixin]
}
</script>