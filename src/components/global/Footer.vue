<template>
    
  <footer>
    <div class="container">
      <div class="banner text-center">
        <img :src="banner_dark" class="img-fluid dark_logo">
        <img :src="banner_light" class="img-fluid light_logo">
      </div>
      <div class="text-center" style="margin: 37px 0 !important;">
        <p class="h5 number" style="font-size:17px; border-radius: 12pt;"> <u><b>SHIPPING ADDRESS:</b></u>
          <br> 140 Woodgate Dr. <br> Boonville, NY 13309 <br><br> <u><b>BILLING ADDRESS:</b></u>
          <br> PO Box 311 <br> Boonville, NY 13309
        </p>
      </div>
      <div class="text-center">
        <h1 class="fw-bold" style="color:red; font-size: 24px; margin-bottom: 37px;">HOURS</h1>
      </div>
      <div class="time d-flex justify-content-center align-items-center">
        <table class="table table-responsive table-hover text-center" style="width: 300px">
          <tbody>
            <tr style="border-top: 1px solid #dee2e6 !important;">
              <td class="fw-bold">
                <p class="hours-bold-700">MONDAY</p>
              </td>
              <td>
                <p class="hours-bold-600">9:00 AM - 5:00 PM</p>
              </td>
            </tr>
            <tr>
              <td class="fw-bold">
                <p class="hours-bold-700">TUESDAY</p>
              </td>
              <td>
                <p class="hours-bold-600">9:00 AM - 5:00 PM</p>
              </td>
            </tr>
            <tr>
              <td class="fw-bold">
                <p class="hours-bold-700">WEDNESDAY</p>
              </td>
              <td>
                <p class="hours-bold-600">9:00 AM - 5:00 PM</p>
              </td>
            </tr>
            <tr>
              <td class="fw-bold">
                <p class="hours-bold-700">THURSDAY</p>
              </td>
              <td>
                <p class="hours-bold-600">9:00 AM - 5:00 PM</p>
              </td>
            </tr>
            <tr>
              <td class="fw-bold">
                <p class="hours-bold-700">FRIDAY</p>
              </td>
              <td>
                <p class="hours-bold-600">9:00 AM - 5:00 PM</p>
              </td>
            </tr>
            <tr>
              <td class="fw-bold">
                <p class="hours-bold-700">SATURDAY</p>
              </td>
              <td>
                <p class="hours-bold-600">BY APPOINTMENT</p>
              </td>
            </tr>
            <tr>
              <td class="fw-bold">
                <p class="hours-bold-700">SUNDAY</p>
              </td>
              <td>
                <p class="hours-bold-600">BY APPOINTMENT</p>
              </td>
            </tr>
            <tr>
              <td class="fw-bold">
                <p class="hours-bold-700">EXIGENCIES</p>
              </td>
              <td>
                <p class="hours-bold-600">24/7</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
      <div class="d-flex justify-content-center align-items-center flex-wrap links-vertical">
        <div style="margin-bottom: 37px; margin-top: 37px;">
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
      <div class="d-flex justify-content-center align-items-center flex-wrap flex-column footer-links">

        <div class="my-1 text-uppercase" style="text-align: center; justify-content: center;">
          <p> You can view or download our contact information
            <a href="https://vcrd.co/chris_muha/6796">HERE</a>.
            The file (vCard file) can be used to add us to your contacts list on your smartphone, tablet, or computer.
          </p>
        </div>

        <p class="fw-bold text-decoration-none text-center"
          style="font-family: 'Poppins'; font-size:22px; color:#85bb65;">YOU CAN SHOP FOR OUR MERCHANDISE
          <a href="https://www.tinyurl.com/mcr-masteryourimage">HERE</a>.
        </p>
        <div class="text-center p-3 centered-content"
          style="display:flex; justify-content: center; width: 80%; padding: 0 !important;">
          <p class="fw-bold text-decoration-none"
            style="font-family: 'Poppins'; font-size:14px; text-align: left; margin: 0;">
            <br> We are thankful for A&P Master Images for ordering and embroidering our attire.
            <br> We greatly appreciate the hard work and dedication of A&P Master Images.
            <br> We recommend their services to anyone in the community that needs embroidered apparel.
            <br> You can contact them by phone at <a href="tel:+1 (315)-793-1934"> 315-793-1934.</a>
          </p>
        </div>

        <div class="text-uppercase mx-5 review legal-footer">
          Please read our <br> <a href="MCR LEGAL DISCLAIMER.pdf">Legal Disclaimer</a>.
        </div>

      </div>
    </div>

    <div class="end-credits text-center">
      <br>
      <br>
      <p>
        Muha Computer Repair ™
        <br>
        <br>
        ©
        <br>
        <br>
        ALL RIGHTS RESERVED
        <br>
        <br>
        Christopher Anthony Muha
        <br>
        <br>
        ©
        <br>
        <br>
        ALL RIGHTS RESERVED
        <br>
        <br>
        The Fundamentals of Computer IT ©
        <br>
        <br>
        The Fundamentals of Computer Information Technology ©
        <br>
        <br>
        The Fundamentals of Computer IT <br> Knowledge to Enhance your IT Expertise ©
        <br>
        <br>
        The Fundamentals of Computer Information Technology <br>
        Knowledge to Enhance your IT Expertise ©
      </p>
      <br>

    </div>

    <div class="footer-blue-button">
      <a href="#top">Back to top</a>
    </div>
    <div style="display: flex; margin: auto; width: fit-content;">
      <div class="footer-blue-button">
        <a  @click="nextPage">Next Page</a>
      </div>
      <div class="footer-blue-button">
        <a href="policies">Previous Page</a>
      </div>
    </div>
  </footer>

  <a id="top"  @click="scrollUp" class="circle-top">
    <i class="fa fa-arrow-up"></i>
  </a>
</template>
<script>
import globalMixin from '@/mixins/globalMixin';

export default {
    mixins: [globalMixin],
    props: {
      banner_dark: String,
      banner_light: String
    },

    data () {
      return {
        pages: [
          {
            name: 'home',
            route: '/'
          },
          {
            name: 'about',
            route: '/about'
          },
          {
            name: 'services',
            route: '/services'
          },
          {
            name: 'billing',
            route: '/billing'
          },
          { 
            name: 'book', 
            route: '/book'
          },
          {
            name: 'policies',
            route: '/policies'
          },
          {
            name: 'hiring',
            route: '/hiring'
          }
        ]
      }
    },

    methods: {
      nextPage () {
        const currentPage = this.$route;
        const currentIndex = this.pages.findIndex(page => page.route === currentPage.path);

        const newIndex = (currentIndex + 1) === this.pages.length ? 0 : (currentIndex + 1);
        const newPage = this.pages[newIndex];

        this.$router.push(newPage.route);
      },

      previousPage () {
        const currentPage = this.$route;
        const currentIndex = this.pages.findIndex(page => page.route === currentPage.path);

        const newIndex = (currentIndex - 1) === -1 ? this.pages.length - 1 : (currentIndex + 1);
        const newPage = this.pages[newIndex];

        this.$router.push(newPage.route);
      }
    }
}
</script>