<template>
      <div class="review-slider text-slider google" style="text-transform: uppercase;">
    <p><u>What our customers say:</u></p>

    <div class="swiper mySwiper google-swiper" style="text-transform:none;">
      <p class="bitter"
        style="font-size:14px; /* border: #4285f4 solid 2px; */ margin-bottom: 12pt; border-radius: 6pt; padding: 6pt; line-height: 2; margin: 16px;">
        We are here to provide exceptional customer service. We will ensure that your computers and devices are
        performing at their peak and are secure when using the internet.
      </p>
      <p class="bitter"
        style="font-size:14px; /* border: #ea4335 solid 2px; */ margin-bottom: 12pt; border-radius: 6pt; padding: 6pt; line-height: 2; margin: 16px;">
        Muha Computer Repair appreciates any customer feedback. Please take the time to leave us a Google Review. The
        reviews help us grow our business so we can continue to serve you.
      </p>
      <div class="swiper-wrapper has-auto-number">
      </div>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>

  <div class="review-slider reviews-responses-slider">
    <p>GOOGLE REVIEWS RESPONSES</p>
    <div class="swiper mySwiper review-responses">
      <div class="swiper-wrapper has-auto-number" data-type="responses">

      </div>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>

  <div class="review-slider facebook-review-slider">
    <p>FACEBOOK REVIEWS</p>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper has-auto-number" data-type="FACEBOOK">


      </div>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>

  <div class="review-slider buyer-review-slider">
    <p>BUYER REVIEWS</p>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper has-auto-number" data-type="buyer">

      </div>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>

  <div class="review-slider seller-review-slider">
    <p>SELLER REVIEWS</p>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper has-auto-number" data-type="seller">
      </div>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>
<script>
import globalMixin from '@/mixins/globalMixin';

export default {
    mixins: [globalMixin]
}
</script>