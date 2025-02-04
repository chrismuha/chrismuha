<template>
    
  <div class="text-center">
    <div class="buttons-section-index">
      <div class="buttons-ver-hor">
        <a class="btn schedule-button" style="margin-top:20px;" href="https://tinyurl.com/mcr-schedule-chrismuha"
          rel="nofollow">SCHEDULE </a>
        <a class="btn paybill-button" style="margin-top:20px;" href="https://tinyurl.com/mcr-payment" rel="nofollow">PAY
          BILL </a>
      </div>
      <div class="buttons-ver-hor">
        <a class="btn giftcard-button" style="margin-top:20px;" href="https://tinyurl.com/mcr-gift-card-balance"
          rel="nofollow">CHECK GIFT CARD BALANCE</a>
        <a class="btn downpay-button" style="margin-top:20px;" href="https://tinyurl.com/mcr-down-payment"
          rel="nofollow">DOWN PAYMENT </a>
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

  <div class="d-flex justify-content-center align-items-center flex-wrap links-vertical">
    <div style="margin-bottom: 20px; margin-top: 20px;">
      <div style="text-align: center; justify-content: center;">
        <a class="btn callus-button" href="tel:+1 (315)-338-1919"><i class="fa fa-phone"></i>
          CALL US</a>
      </div>
    </div>
    <div>
      <a class="btn textus-button" href="sms:+13153381919"><i class="fa fa-comment"></i>
        TEXT US</a>
    </div>
    <div>
      <div style="text-align: center; justify-content: center;">
        <a class="e_mail_top btn" href="mailto:muhachris297@gmail.com"><i class="fa fa-envelope"></i>
          E-MAIL US</a>
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
    You may find the bookmarks <a href="bookmarks">HERE</a> useful.
    They go into detail on the basics of computing and more.
  </div>
</template>
<script>
import globalMixin from '@/mixins/globalMixin';

export default {
    mixins: [globalMixin]
}
</script>