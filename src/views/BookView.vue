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
  <PageBanner banner="shop1" />
  <TopSection />

  <main class="container">
      <div class="text-center centered-content">
          <div class="row">
              <div class="col-md-12 col-12" style="text-align:center;">
                  <img src="../assets/img/eBook-FRONT.jpg" alt="Book Cover" class="book-cover"
                      style="margin-top:0 !important; margin-bottom: 37px;">
              </div>
          </div>
          <div class="p-3 mw location book-page-no-bullets"
              style="font-family: 'Poppins'; display: flex; justify-content: center; font-size: 10.5pt; font-weight: 900; text-align: left; /* border: #37B3DA solid 2px; */ border-radius: 6pt; padding: 6pt; margin-bottom: 37px;">
              <p>
              <ul class="read-more"> <b><u>Chris Muha, the Owner, and Lead Technician is the author of The
                          Fundamentals of Computer IT: Knowledge to Enhance Your IT Expertise.</u></b>
                  <br>
                  <br>
                  <li>Chris Muha solely owns the copyright of this literary work.</li>
                  <br>
                  <li>Currently, Amazon only has the Kindle version (eBook) of this book available for purchase...
                  </li>
                  <br>
                  <li>The book is also published in digital format (eBook) on Google, Apple, and Barnes & Noble.</li>
                  <br>
                  <li>Prints of this book are available as author copies.</li>
                  <br>
                  <li>They are printed by Barnes & Noble press.</li>
                  <br>
                  <li>All book formats are printed using high-quality materials.</li>
                  <br>
                  <li>There are multiple formats of print versions of this book available.</li>
                  <br>
                  <li>Please be aware that all formats consist of the same content.</li>
              </ul>
              </p>
          </div>
          <div class="location"
              style="/* border: #37B3DA solid 2px; */ border-radius: 6pt; padding: 6pt; margin-bottom: 37px;">
              <div class="p-3 mw book-page-no-bullets"
                  style="font-family: 'Poppins'; display: flex; justify-content: center; font-size: 10.5pt; font-weight: 900; text-align: left; border-radius: 6pt; padding: 6pt; margin-bottom: 37px;">
                  <p>
                      <b><u>The links below are shortened for convenience. The links direct to official merchant
                              links.</u></b>
                  </p>
              </div>
              <div class="books">
                  <h2 class="fw-bold text-center text-decoration-underline"
                      style="font-size: 15pt; color:#00C301; border-radius: 6pt; padding: 6pt; margin-bottom:37px;">
                      PURCHASE CHRIS' BOOK:</h2>
              </div>
              <!-- <div class="card p-3 mb-4 text-center">
    <h4 class="fw-bold text-center h6">Amazon (Standard Edition)</h4>
    <a style="font-family: Helvetica, sans-serif; font-weight: bold;" 
          href="https://tinyurl.com/2p33v43m">https://tinyurl.com/2p33v43m</a>
      </div> -->
              <div class="card p-3 text-center book-borders">
                  <h4 class="fw-bold text-center h6">Amazon (Kindle Edition/eBook)</h4>
                  <a style="font-family: Helvetica, sans-serif; font-weight: bold;"
                      href="https://tinyurl.com/2p9dd7ym">https://tinyurl.com/2p9dd7ym</a>
              </div>
              <!-- <div class="card p-3 mb-4 text-center">
    <h4 class="fw-bold text-center h6">Amazon (College Edition)</h4>
    <a style="font-family: Helvetica, sans-serif; font-weight: bold;" href="https://tinyurl.com/527dwvds">https://tinyurl.com/527dwvds</a>
      </div> -->
              <div class="card p-3 text-center book-borders">
                  <h4 class="fw-bold text-center h6">Apple (eBook)</h4>
                  <a style="font-family: Helvetica, sans-serif; font-weight: bold;"
                      href="https://tinyurl.com/nhekx25e">https://tinyurl.com/nhekx25e</a>
              </div>
              <div class="card p-3 text-center book-borders">
                  <h4 class="fw-bold text-center h6">Google (eBook)</h4>
                  <a style="font-family: Helvetica, sans-serif; font-weight: bold;"
                      href="https://tinyurl.com/2p8wnhk3">https://tinyurl.com/2p8wnhk3</a>
              </div>
              <div class="card p-3 text-center book-borders">
                  <h4 class="fw-bold text-center h6">Barnes & Noble (eBook)</h4>
                  <a style="font-family: Helvetica, sans-serif; font-weight: bold;"
                      href="https://tinyurl.com/2p997mu5">https://tinyurl.com/2p997mu5</a>
              </div>
          </div>

      </div>
  </main>

  <div class="text-center" style="margin-bottom: 37px;">
      <div class="text-center location" style=" margin-bottom: 37px;">
          <div
              style="display:flex; justify-content: center; flex-direction: column; /* border: #37B3DA solid 2px; */ border-radius: 6pt; padding: 6pt; border-width: 2px !important; margin-bottom: 37px; line-height: 2;">
              <!-- <p class="fw-bold text-decoration-underline" style="font-family: 'Poppins'; font-size:16.5pt; text-align: center; margin-bottom: 0; margin-left: 1rem; margin-right: 1rem; padding: 6pt;line-height: 2;"> </p> -->
              <p class="fw-bold text-decoration-none"
                  style="font-family: 'Poppins'; font-size:13.5pt; text-align: left; margin-bottom: 0;"><a
                      href="mailto:muhachris297@gmail.com">To purchase a print of Chris' book, Please e-mail us</a> to
                  purchase a print of Chris' book.
                  <br>
                  We will place an order for you because our merchants do not currently offer prints of our book.
                  <br>
                  Please include book order as the subject of the e-mail.
              </p>
          </div>
      </div>
      <p class="spacing fw-bold text-decoration-none text-center"
          style="font-family: 'Poppins'; font-size:16.5pt; color:#85bb65; margin-bottom: 0;">YOU CAN SHOP FOR OUR
          MERCHANDISE
          <a href="https://www.tinyurl.com/mcr-masteryourimage">HERE</a>.
      </p>
  </div>
  <div>
      <p class="p-3 mw location read-more"
          style="font-family: 'Poppins'; font-size:13.5pt; font-weight: 600; text-align: left; /* border: #37B3DA solid 2px; */ border-radius: 6pt; padding: 6pt; border-width: 2px !important; margin-bottom: 37px; line-height: 2;">
          <u> If you have any concerns about plagiarism/copying and pasting articles
              from the internet, any other literary works, and/or etcetera, please read the following disclosure from
              Chris Muha: </u>
          <span
              style="font-family: 'Poppins'; font-size:10pt; font-weight: 600; text-align: left;  border-radius: 6pt; padding: 6pt; border-width: 2px !important; margin-bottom: 37px; line-height: 2;">
              <br> All the writings in my book have been written by me, with extremely limited amounts of research
              because of my broad knowledge of computers.
              In addition to my broad knowledge/expertise in the Information Technology field.
              I have done more educational research and have had more educational experiences throughout the years,
              which has expanded my knowledge.
              Continuing my work in the Information Technology field will continue to allow me to expand my knowledge.
              Throughout those times, I have been able to gain even more experience by helping people in need with
              their technologies.
              I have updated my book numerous times for that reason, and I will continue to do so.
              That is why it is vital to read every piece of information contained in my book to best understand the
              contents of my book.
              If you want to take a deep dive into how I learned to better my writing skills, as I continued to better
              my education in Information Technology, compare versions of my book.
              That is if you can obtain or have copies of the original publications.
              I do not have copies of those files because I override everything when I update the documentation to
              update my publications.
              I do not have specific documentation of the specific changes I have made, except for what I have
              published for release notes for the Apple eBook version.
              However, I feel that this is more than enough information for anyone to understand what the updates have
              been, and to encourage them to read through/brainstorm and take notes on my writings.
              I encourage you to read my book again if you have read it already to go through your notes or add to
              them.
              If you have not read my book, I encourage you to do so.
              If you are in the process of reading my book, I encourage you to finish doing so and read it again
              because I enhance my writings every so often and publish those updates to my book.
              Additionally, it would be worth reading my book again after each update because my knowledge continues
              to enhance, just like technology.
              I am dedicated to continuing to add to my book accordingly.
              Any chapters of this book that do not have direct information on computers such as the History chapter
              is my studies from research that I did on the internet for projects I was assigned back in High School.
              That does include educational material but not for computer repair specifically.
              It is more on the technological advancements of computing technology.
          </span>
      </p>
  </div>

  <main class="container">

      <div class="text-center centered-content">
          <div class="row">
              <div class="col-md-12 col-12" style="text-align:center;">
                  <img src="../assets/img/3D-book.jpg" alt="3D Book" class="book-cover" style="margin-top:0 !important">
              </div>
          </div>
      </div>
  </main>

  <Footer banner_light="/logo/MCRblueNblack.png" banner_dark="/logo/MCRblueNwhite.png"  />
</template>
<style scoped>
@import url('@/assets/main.css');

@media(min-width: 1080px) {
  .img-fluid {
      max-width: 580px;
      margin-top: 50px;
  }

  div.banner .img-fluid {
      max-width: 580px;
  }

}

.location {
  width: 482px;
  margin: auto;
}

@media(max-width: 520px) {

  .location {
      width: fit-content;
      margin: auto 1rem;
  }
}

.container {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.book-cover {
  max-width: 330px;
  width: 100%;
}

.card {
  margin-bottom: 37px;
}

.card a {
  text-transform: lowercase;
}

.books a p {
  font-family: Arial, sans-serif;
}
</style>
<script>
import globalMixin from '@/mixins/globalMixin';

export default {
  mixins: [globalMixin],
}
</script>