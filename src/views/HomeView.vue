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
  <PageBanner banner="home" />
  <TopSection />

  <div class="col-12 text-center graphics-section">
    <img src="@/assets/img/bug-graphic.png" alt="bug graphic" class="img mcr-virus-pic">
    <img src="@/assets/img/mcr-graphic-2.png" alt="graphic 2" class="img mcr-virus-pic">
    <img src="@/assets/img/mcr-graphic-3.png" alt="graphic 3" class="img mcr-virus-pic">
  </div>

  <div class="container">
    <div class="mcr-ftc">
      <div class="top-ftc-sec">
        <h5>SERVICES OFFERED</h5>
        <div class="ftc-bullets">
          <ul>
            <li><i class="fa fa-check"></i>24/7 EMERGENCY SERVICE</li>
            <li><i class="fa fa-check"></i>SOFTWARE UPDATE & INSTALLATION</li>
            <li><i class="fa fa-check"></i>OTHER TECHNICAL ASSISTANCE</li>
            <li><i class="fa fa-check"></i>PRINTING, FAXING, & SCANNING</li>
            <li><i class="fa fa-check"></i>SOFTWARE TUNE-UP</li>
            <li><i class="fa fa-check"></i>SOFTWARE REPAIR</li>
            <li><i class="fa fa-check"></i>DATA BACKUP & RECOVERY</li>
            <li><i class="fa fa-check"></i>COMPUTER ASSEMBLY</li>
            <li><i class="fa fa-check"></i>HARDWARE REPLACEMENT & UPGRADE</li>
            <li><i class="fa fa-check"></i>SYSTEM HOOK-UP</li>
            <li><i class="fa fa-check"></i>DIAGNOSTICS</li>
            <li><i class="fa fa-check"></i>WEBSITE DEVELOPMENT</li>
            <li><i class="fa fa-check"></i>CONSULTATION</li>
          </ul>
        </div>
      </div>
      <div class="single-ftc-pos">
        <div class="single-ftc-sec">
          <h5>COMPUTER ASSEMBLY:</h5>
          <ul>
            <li>Personal Computers</li>
            <li>Small Office Computers</li>
            <li>Home Office Computers</li>
            <li>Gaming Computers</li>
          </ul>
        </div>
        <div class="single-ftc-sec">
          <h5>SOFTWARE SERVICES:</h5>
          <ul>
            <li>System Setup</li>
            <li>Software Repair</li>
            <li>Software Tune-Up</li>
            <li>Virus Removal</li>
          </ul>
        </div>
      </div>
      <div class="full-ftc-sec">
        <h5>PRINTING, FAXING, & SCANNING:</h5>
        <div class="full-ftc-bullets">
          <ul>
            <p><b>PAPERWORK INCLUDING BUT NOT LIMITED TO:</b></p>
            <li>Job Information</li>
            <li>Social Security</li>
            <li>Taxes</li>
          </ul>
          <ul>
            <p><b>SHIPPING AND MAILING LABELS FOR:</b></p>
            <li>UPS</li>
            <li>FedEx</li>
            <li>USPS</li>
            <li><b>AND MANY MORE…</b></li>
          </ul>
        </div>
      </div>
      <div class="single-ftc-pos">
        <div class="single-ftc-sec">
          <h5>HARDWARE SERVICES:</h5>
          <ul>
            <li>Hardware Repair</li>
            <li>System Maintenance</li>
            <li>Hardware Upgrades</li>
          </ul>
        </div>
        <div class="single-ftc-sec">
          <h5>SYSTEM HOOK-UP:</h5>
          <ul>
            <li>Computer Installation</li>
            <li>Wi-Fi Installation</li>
            <li>Printer Installation</li>
          </ul>
        </div>
      </div>
      <div class="full-ftc-sec">
        <h5>OTHER TECHNICAL ASSISTANCE:</h5>
        <div class="full-ftc-bullets">
          <div class="full-ftc-bullets-flex">
            <ul>
              <li>Document Uploads</li>
              <li>Downloads to your Storage Disks</li>
              <li>Computer Tutorials</li>
              <li>Operating System Tutorials</li>
            </ul>
            <ul class="full-ftc-bullets-last-child">
              <li>Program Tutorials</li>
              <li>App Tutorials</li>
              <li><b>AND MUCH MORE…</b></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="ftc-ending">
        <p>24/7 EMERGENCY SERVICES</p>
        <div class="line"></div>
        <p>DATA BACKUP & RECOVERY</p>
      </div>
      <div class="single-ftc-pos">
        <div class="single-ftc-sec">
          <div class="table-column-custom1">
            <h5>WEBSITE DEVELOPMENT:</h5>
            <p>
              <b><u>NEED A WEBSITE? WE OFFER PROFESSIONAL WEBSITE DESIGN FOR:</u></b>
            </p>
            <ul>
              <li>About the Author Websites</li>
              <li>Business Websites</li>
              <li>Shopify & Other Item Shops</li>
              <li>Merchandise Sales</li>
              <li>Resume</li>
              <li>Portfolio</li>
              <li>Biography</li>
            </ul>
            <p>
              <b> Choose us to design and develop the highest quality websites with the most flexible design options.
                <br> We maintain the highest quality in websites we design and develop, even after initial development.
              </b>
              <br> <i> We will not design and/or develop websites using WordPress or anything else that is not developed
                strictly using HTML, CSS, & JavaScript.
                <br> Hand coding guarantees the highest-quality websites that we are familiar with and can customize
                freely. </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <MenuTable />

  <div class="header col-12 text-center location" style="top: 5px;">
    <p class="fw-bold bitter read-more"
      style=" text-align:left; font-size: 14px; border-radius: 6pt; padding: 6pt; /* border-width: 2px !important; */; margin:0 0 37px 0">
      Please contact us by using the contact information in the footer of each page of this website
      or use one of the SCHEDULE buttons on this website to request an appointment.
      Please be sure to request a Consultation and Diagnostics.
      <br> You will be redirected to our calendar where you can review the services we offer, which match
      this website, and request an appointment.
      We will respond to your request as soon as possible.
      There is a phone call button, a text message button, and an email button in the footer of each page of
      this website for your convenience to contact us in a flash.
      You can also view our business hours in the footer of each page of this website.
    </p>
    <p class="bitter read-more"
      style="text-align:left; font-size:14px; /* border: orange solid 2px; */ border-radius: 6pt; padding: 6pt; border-width: 2px !important; margin:37px 0 37px 0">
      We offer our software services remotely via AnyDesk and/or via shipping.
      <br> We can guide you through installation or install it for you when you come see us for an appointment.
      <br>
    </p>
    <p class="fw-bold bitter"
      style="text-align:left; font-size:14px; border-radius: 6pt; padding: 6pt; border-width: 2px !important; margin-bottom: 37px; /* border: 2px solid yellow; */">
      We also offer hardware services by mail-in/shipment.
      <br> <i> All shipping costs are at the expense of the customer. </i>
    </p>
    <p class="bitter"
      style="text-align:left; font-size:14px; /* border: #00ff00 solid 2px; */ margin-bottom: 12pt; border-radius: 6pt; padding: 6pt; border-width: 2px !important; margin-bottom: 37px;  line-height: 2;">
      Muha Computer Repair is a small computer repair business located in Boonville NY.
    </p>
    <p class="bitter read-more"
      style="text-align:left; font-size:14px; /* border: #0000ff solid 2px; */ border-radius: 6pt; padding: 6pt; border-width: 2px !important; margin-bottom: 37px; line-height: 2;">
      We service all Upstate New York and beyond.
      <br> We offer remote services to all customers, so you do not have to leave your home or office to get
      the assistance you need.
      <br> In addition to that, you do not have to take time out of your day to come to us. Why? We also come to you by
      way of Virtual Computer Repair.
      <br> We can remotely access your computer and show you how to do things and repair many software issues you
      are having.
      <br> We can offer you this convenience because most software issues do not require on-site
      servicing.
    </p>
    <p class="bitter read-more"
      style="text-align:left; font-size:14px; /* border: #6e00ff solid 2px; */ border-radius: 6pt; padding: 6pt; border-width: 2px !important; margin-bottom: 37px;  line-height: 2;">
      We offer convenient and honest high-quality computer services with a flexible schedule.
      <br> We have several years of experience in computer diagnostic and repair services.
      Not only that, but we also ensure you are secure when using the internet and give you a plan to help protect and
      prevent your computers
      and devices from ever having issues again.
      <br> We make sure to keep our customers in the loop on what services are being performed, getting consent
      before repair, and discussing all options available to you.
    </p>
    <p class="bitter read-more"
      style="text-align:left; font-size:14px; /* border: #bf40bf solid 2px; */ border-radius: 6pt; padding: 6pt; border-width: 2px !important; margin-bottom: 37px; line-height: 2;">
      If you need a new computer, desktop, laptop, or even a new smartphone or tablet, we are here to help you
      with that too. We have been designing, building, and selling the highest-quality computer builds on the market
      since 2019.
      As we continue to go unnoticed, we are recognized by our existing customer base for reliable and reputable
      computer repair services, including system assembly in small office, home office and personal office workspaces.
      Our customers continue to use our high-quality services to maintain existing systems and ensuring the
      highest-quality computing in our service areas.
      <br> We use only the highest-quality components for computer builds and upgrades.
      <br> We have helped several customers shop for what computers and devices they have needed
      and have built high-quality desktop computers that you cannot get at a retail store.
      <br> Mass-manufactured computers have slow sailing and fast failing standards.
      On the other hand, Muha Computer Repair offers computer builds that are built with the highest standards and are
      built to be used for many years to come, and for some, that is a lifetime.
      Upgrading is always an option, but money will be saved when we build you a computer, we keep new technology
      growing and old technology out of the landfill as much as possible.
      <br> So, what are you waiting for? Contact us today for all your technological needs.
      We will be waiting to assist you with the utmost pleasure.
    </p>

  </div>

  <Reviews />
  <Footer banner_light="/logo/MCRblackNred.png" banner_dark="/logo/MCRwhiteNred.png"  />
</template>
<style scoped>
@import url('@/assets/main.css');

.location {
  width: 482px;
  margin: auto;
}

.px-3 {
  margin: 12pt 24pt;
}

.bitter {
  font-family: 'Poppins';
  font-weight: 500 !important;
}

.semi-bold p {
  font-weight: 500 !important;
}

div span {
  font-weight: 600;
}

.read-more span {
  font-weight: normal;
}

@media(max-width: 520px) {

  .location {
    width: fit-content;
    margin: auto 1rem;
  }
}
</style>
<script>
import globalMixin from '@/mixins/globalMixin';

export default {
  mixins: [globalMixin],
}
</script>