const reviewsCollection = document.getElementsByClassName('review-slider')
const imageReviews = Array.from(reviewsCollection).filter(element => !element.classList.contains("text-slider"))
const textReviews = Array.from(reviewsCollection).filter(element => element.classList.contains("text-slider"))

const promises = [];


for (let i = 0; i < imageReviews.length; i++) {
  const review = imageReviews[i];

  const parent = review.querySelector('.swiper-wrapper');


  const fetchPromise = fetch('https://chrismuha.com/reviews/' + parent.dataset.type.toLowerCase())
    .then(response => response.json())
    .then((images) => {
      console.log(images)

      images.forEach((image) => {
        const swiperSlide = document.createElement('div');
        const orderNumber = document.createElement('p');
        const img = document.createElement('img');

        swiperSlide.classList.add('swiper-slide');
        orderNumber.classList.add('order-number');
        img.src = "https://chrismuha.com/" + image

        swiperSlide.appendChild(orderNumber)
        swiperSlide.appendChild(img)



        parent.appendChild(swiperSlide)


      })
    })

  promises.push(fetchPromise)
}

for (let i = 0; i < textReviews.length; i++) {
  const review = textReviews[i];

  const parent = review.querySelector('.swiper-wrapper');

  const fetchPromise = fetch('https://chrismuha.com/json/reviews.json')
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
          <img src="img/google-reviews-logo.png" alt="Google Review">
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


  })
