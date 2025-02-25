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

  <div v-if="showModal" class="image-overlay" @click="closeModal">
    <div class="image-container" @click.stop>
      <img :src="modalImage" alt="Expanded Image" />
      <button class="close-button" @click="closeModal">
        <i class="bi bi-x"></i>
      </button>
    </div>
  </div>
</template>
<script>
import globalMixin from '@/mixins/globalMixin';

export default {
  mixins: [globalMixin],

  data() {
    return {
      showModal: false,
      modalImage: ''
    };
  },

  mounted() {
    const reviewsCollection = document.getElementsByClassName('review-slider')
    const imageReviews = Array.from(reviewsCollection).filter(element => !element.classList.contains("text-slider"))
    const textReviews = Array.from(reviewsCollection).filter(element => element.classList.contains("text-slider"))

    const promises = [];
    const assetsFolder = "/public/";
    const path = "/public/reviews/"
    const rawCategories = Object.keys(
      import.meta.glob("/public/reviews/*/*", { eager: true, query: '?url' })
    )
    const categories = {};

    rawCategories.forEach((cat) => {
      // console.log(cat)
      const category = cat.slice(path.length).split('/')[0];

      if(categories[category]) {
        categories[category].push(cat)
      } else {
        categories[category] = [cat];
      }
    })

    for (let i = 0; i < imageReviews.length; i++) {
      const review = imageReviews[i];

      const parent = review.querySelector('.swiper-wrapper');
      const category =  parent.dataset.type.toLowerCase();
      const files = categories[category]

      files.forEach((image) => {
        const swiperSlide = document.createElement('div');
        const orderNumber = document.createElement('p');
        const img = document.createElement('img');

        swiperSlide.classList.add('swiper-slide');
        orderNumber.classList.add('order-number');
        img.src = image.slice(assetsFolder.length)

        swiperSlide.appendChild(orderNumber)
        swiperSlide.appendChild(img)

        parent.appendChild(swiperSlide)
      })

    }

    for (let i = 0; i < textReviews.length; i++) {
      const review = textReviews[i];

      const parent = review.querySelector('.swiper-wrapper');

      const fetchPromise = fetch('/reviews/reviews.json')
        .then(response => response.json())
        .then((reviews) => {

          reviews.forEach((data) => {
            const swiperSlide = document.createElement('div');
            const orderNumber = document.createElement('p');
            const customer = document.createElement('h1');
            const span = document.createElement('span');

            for (let i = 0; i < 5; i++) {
              const i = document.createElement('i');
              i.classList.add("fa", "fa-star")
              span.appendChild(i)
            }

            const rawReview = document.createElement('p');

            swiperSlide.classList.add("swiper-slide", "google-review")
            orderNumber.classList.add("order-number")

            rawReview.innerText = data.review
            customer.innerText = data.name

            const reviewBox = `
        <div class="google-review-box">
          <img src="img/google-reviews-logo.png" class="google-review-logo-image" alt="Google Review">
        </div>
        <div class="div">
          <a href="https://tinyurl.com/mcr-google-review" class="btn google-review-button">WRITE A GOOGLE REVIEW</a>
        </div>
      `;

            swiperSlide.appendChild(orderNumber)
            swiperSlide.appendChild(customer)
            swiperSlide.appendChild(span)
            swiperSlide.appendChild(rawReview)
            swiperSlide.insertAdjacentHTML('beforeend', reviewBox)



            parent.appendChild(swiperSlide)


          })
        })

      promises.push(fetchPromise)
    }


    Promise.all(promises)
      .then(() => {


        const hasAutoNumber = Array.from(document.querySelectorAll('.has-auto-number'));
        let orderNumbers = [
          'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth',
          'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth',
          'twenty-first', 'twenty-second', 'twenty-third', 'twenty-fourth', 'twenty-fifth', 'twenty-sixth', 'twenty-seventh', 'twenty-eighth', 'twenty-ninth', 'thirtieth',
          'thirty-first', 'thirty-second', 'thirty-third', 'thirty-fourth', 'thirty-fifth', 'thirty-sixth', 'thirty-seventh', 'thirty-eighth', 'thirty-ninth', 'fortieth',
          'forty-first', 'forty-second', 'forty-third', 'forty-fourth', 'forty-fifth', 'forty-sixth', 'forty-seventh', 'forty-eighth', 'forty-ninth', 'fiftieth',
          'fifty-first', 'fifty-second', 'fifty-third', 'fifty-fourth', 'fifty-fifth', 'fifty-sixth', 'fifty-seventh', 'fifty-eighth', 'fifty-ninth', 'sixtieth',
          'sixty-first', 'sixty-second', 'sixty-third', 'sixty-fourth', 'sixty-fifth', 'sixty-sixth', 'sixty-seventh', 'sixty-eighth', 'sixty-ninth', 'seventieth',
          'seventy-first', 'seventy-second', 'seventy-third', 'seventy-fourth', 'seventy-fifth', 'seventy-sixth', 'seventy-seventh', 'seventy-eighth', 'seventy-ninth', 'eightieth',
          'eighty-first', 'eighty-second', 'eighty-third', 'eighty-fourth', 'eighty-fifth', 'eighty-sixth', 'eighty-seventh', 'eighty-eighth', 'eighty-ninth', 'ninetieth',
          'ninety-first', 'ninety-second', 'ninety-third', 'ninety-fourth', 'ninety-fifth', 'ninety-sixth', 'ninety-seventh', 'ninety-eighth', 'ninety-ninth', 'hundredth'
        ];

        hasAutoNumber.forEach(n => {
          const orderNumberElements = Array.from(n.querySelectorAll('.order-number'));
          for (let r = 0; r < orderNumberElements.length; r++) {
            orderNumberElements[r].innerText = orderNumbers[r] + ' review';
            orderNumberElements[r].style.textTransform = 'uppercase';
          }
        });


        var swiper = new Swiper('.mySwiper', {
          loop: true,

          slidesPerView: 1,
          slidesPerGroup: 1,

          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

          autoHeight: true,
        });


      });

      document.addEventListener("click", (event) => {
        if (!event.target.classList.contains("google-review-logo-image")) {
          if (event.target.tagName === "IMG" && event.target.closest(".swiper-wrapper")) {
            this.openModal(event.target.src);
          }
        }
      });

  },
  methods: {
    openModal(imageSrc) {
      this.modalImage = imageSrc;
      this.showModal = true;
      document.body.style.overflowY = 'hidden';
    },

    closeModal() {
      this.showModal = false;
      this.modalImage = '';
      document.body.style.overflowY = '';
    }
  }
}
</script>
<style>
.image-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.546);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow-y: auto;
}

.image-container {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.image-container img {
  width: auto;
  height: auto;
  max-width: 100%;
  margin: 2rem 0;
  max-height: 100vh;
  border-radius: 10px;
}

.close-button {
  position: absolute;
  top: 40px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  font-size: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  border-radius: 50%;
}

.close-button:hover {
  opacity: 80%;
}
</style>
