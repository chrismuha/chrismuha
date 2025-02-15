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
  <PageBanner banner="policies" />

  <main class="container">
    <div class="col-12 location cls" style="position: relative; top: 5px;
    margin: auto; font-family: 'Poppins'; text-align: left;">
        <u><b>POLICY DISCLOSURE</b></u>
        <li style="list-style: none;">
            You acknowledge and agree that by starting an order with us, and/or by signing any agreements for us to
            begin work and/or etcetera that you understand the risks involved in our work and agree to all of our
            policies and that we will not be held responsible for any damages to your equipment per our policies
            which can also be referred to as our Terms and Conditions. You also acknowledge and agree to our Legal
            Disclaimer by submitting an order and/or by signing any agreements for us to begin work and/or etcetera.
        </li>
        <b><u>COMPONENT ORDERS POLICY</u></b>
        <li style=" list-style: none;">Since several customers have not rendered payment for parts up front
            when required, we will no longer be able to order them unless paid in full prior to ordering. When
            customer(s) payments are not rendered to us, that is unacceptable. We are a business, so we are
            trying to make money to survive. We are here to serve the community but not to serve the community
            for free. We work for you and ultimately, we want you to have the best experience which is why we
            may offer to order in inexpensive computer components and/or accessories using our funding.
            Unfortunately, we are no longer able to do so and will have to enforce this policy going forward
            due to unrendered payment(s) to our business when we most recently did so. We are sorry for the
            inconvenience and thank you for your understanding.
        </li>
        <u><b>DATA LOSS POLICY</b></u>
        <li style="list-style: none;">
            You will be advised before services are performed and acknowledge that you understand when we
            optimize/tune-up your equipment for better performance and/or during virus removal or any other
            services such as troubleshooting, you will likely lose cookies, browsing history, recently typed
            URLs, and other temporary files that were stored on your Hard Drive prior to any services
            performed. Therefore, we will not be held responsible for data loss as a result of services
            performed.</li>
        <b><u>MOBILE HARDWARE REPAIR POLICY</u></b>
        <li style="list-style: none;">Multiple computer repair businesses
            are replacing broken screens for customers mobile devices are well within their rights
            but only if they were a consumer helping another consumer.
            <br> Muha Computer Repair, does not repair broken screens for mobile devices, including tablets and 2 in
            1 tablet/laptops
            because components are irreplaceable due to software locks.
            Those software locks cannot be removed by anyone but the manufacturers.
            As a business, this is a swindle to make money by providing a dishonest service.
            <br> Muha Computer Repair is about quality and honesty.
            <br> The components may be replaceable but even using genuine, OEM components are something
            <br> Muha Computer Repair advises to customers due to the software locks.
            The software locks disable some of the component's software functionalities that
            are not able to be reenabled by the consumer because they become unavailable as
            if they were never there. An example of this is Adaptive Brightness for
            displays, also known as True Tone by Apple. That feature allows your Adaptive
            Display (screen) to your screens color (appearance) based on the brightness
            and lighting in your environment. The same goes for Apple Computers of all
            kinds (desktops such as iMacs and laptops such as MacBooks) of which also
            disables software functionalities for the hardware, such as Adaptive Brightness.
            Governments all around the world are actively working to change
            this from a legal perspective because manufacturers locking
            functionalities for hardware through software is violating the consumers
            right to repair their own devices and is costing businesses money due to
            their customer base having to be limited with no choice for the
            business to honestly operate by servicing hardware components in
            mobile devices and computers by Apple. This is also forcing customers
            to pay for repairs that have their prices illegally gouged by
            companies such as Apple. Even if laws are changed, the quality of
            devices being repaired is significantly lowered because only
            factories that make the devices have the machines necessary to
            ensure a perfect watertight seal for mobile devices with water resistance.
            Therefore, mobile devices that have water resistance that are repaired
            will never be the same again, and <br> Muha Computer Repair will not perform those services.
        </li>
        <u><b>SATISFACTION GUARANTEE</b></u>
        <li style="list-style: none;">We guarantee our services are going to satisfy you. If they do not, we
            have you covered. Within twenty-one days, you will be provided free customer service to resolve
            any issues with your most recent ticket; if your bill has been paid in full and you re-experience
            your problems or they are not resolved to your satisfaction.
            <span>If we informed you the services we provided may not have been as effective as you would
                expect before we performed the services, this policy does not apply.</span>
        </li>
        <u><b>DIAGNOSTICS POLICY</b></u>
        <li style="list-style: none;">Any diagnosis that takes longer than one hour will be charged at an hourly
            rate of $30. If you
            choose to move forward with services with us, you will receive a discount on your order to cover
            a one-hour diagnostic. However, you will be charged at the hourly rate of $30 if you decide not
            to move forward with any service(s) with us or if we cannot replicate the issues you are
            experiencing.
        </li>
        <u><b>RETURNS POLICY</b></u>
        <li style="list-style: none;">Per Buyer’s Remorse Law, we must follow a fifteen-day return policy
            for Hardware Purchases. Return Policies apply for marketplaces such as Amazon and therefore
            certain items may be eligible for a shorter return period, a longer return period, or not
            have a return period at all. If we specify an item sold through us is not returnable and/or
            sold as is, we will have you sign a buyer’s agreement for that purchase.
            Items are eligible for return within 15 days of receipt.
            To qualify for a full refund, returned items must be in the same condition as received.
            The serial numbers for each item are recorded in the database.
            If these conditions are not met, a deduction may be applied to compensate for the items diminished
            value.
        </li>
        <u><b>FAX POLICY</b></u>
        <li style="list-style: none;">Any faxes are scanned electronically and go through a secure
            server. They are not saved by the fax companies but are saved on accounts per history. We
            clear our history after thirty days. In that time, we retain your information in case we need
            to verify delivery and/or fax your documents again. However, we do not review your
            documentation and strictly keep them for your convenience.
        </li>
        <u><b>NO SOLICITING, TRESPASSING, OR LOITERING!</b></u>
        <li style="list-style: none;">
            We do not accept calls, texts, e-mails, letters, or any other solicitations.
            It is strictly prohibited and we will contact the police if you do not comply with our request.
            You will be trespassed from our locations.
        </li>
    </div>
  </main>

  <Footer banner_light="/logo/MCRblack.png" banner_dark="/logo/MCRwhite.png"  />
</template>
<style scoped>
@import url('@/assets/main.css');

.header {
  display: flex;
  width: 100%;
  justify-content: center;
}

.p-5 {
  margin: auto;
  max-width: 360.01pt;
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

@media(max-width: 550px) {
  .cls {
      width: fit-content !important;
      margin-left: 12pt !important;
      margin-right: 12pt !important;
  }
}

li {
  margin-bottom: 37px;
}

li:last-child {
  margin-bottom: 0;
}
</style>
<script>
import globalMixin from '@/mixins/globalMixin';

export default {
  mixins: [globalMixin],
}
</script>