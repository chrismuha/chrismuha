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
  <PageBanner banner="services" />
  <TopSection />

  <div class="text-center centered-content location">
        <p class="read-more"
            style="font-family: 'Poppins'; font-size:14px; text-transform: uppercase; text-align: center; margin: auto; /* border: orange solid 2px; */ border-radius: 6pt; padding: 6pt; margin-top: 37px;">
            We currently operate out of the owner's residence.
            Per our covid policy, we do not provide in-person services without an appointment.
            You can schedule services by using one of the schedule buttons on this website.
            You can view all our polices on the <a href="policies">POLICIES PAGE</a> of this website.
        </p>
        <br><br>
    </div>
    <main class="container" style="margin-top: 0;">
        <div class="text-center centered-content" style="padding-bottom: 42px;">
            <p class="read-more"
                style="font-family: 'Poppins'; font-size:14px; text-align: center; width: 90%; margin: auto;">Please
                refer to the footer of each page of this website to view our hours.
                <br> You can contact us using the contact information on this website to setup servicing too.
                <br> EXIGENCIES are 24/7! <br> Please leave a voicemail if the phone is not answered. <br> We will get
                back to you as soon as possible.
            </p>
        </div>

        <div class="pricing row centered-content">
            <div class="col-12  mb-3 scrollclick" id="quickservices">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title " style="font-size: 16.5px !important;">QUICK SERVICES </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins'">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 21px 0;">$20 (FIXED PRICE) <br> </h3>
                        <p>This service is for miscellaneous services (Other Technical Assistance) that take under one
                            hour.</p>
                    </div>
                </div>
            </div>

            <div class="col-12  mb-3 scrollclick" id="tuneup">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title " style="font-size: 16.5px !important;">SOFTWARE TUNE-UP </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins'">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 21px 0;">$60 (FIXED PRICE) </h3>
                        <p> This service includes a System Optimization, which will clear your cache, such as temporary
                            files, and delete your cookies to make your PC feel like new again!
                            <br>
                        <div class="break"></div> <i style="font-size: 11px;">*YOU WILL BE ADVISED OTHERWISE</i>
                        <br>
                        <div class="break"></div> <span style="font-size: 11px;"> <i>*A HARDWARE UPGRADE (OR MULTIPLE)
                                MAY BE REQUIRED FOR THE BEST EFFECT OF THIS SERVICE.</i>
                            <i>YOU WILL BE ADVISED WHAT IS RIGHT FOR YOU.</i>
                            <br>
                            <div class="break"></div> *VIRUSES MAY BE REMOVED AS AN EXTRA BENEFIT!
                        </span>
                        <br>
                        <div class="break"></div> <span style="font-size: 11px;">*OLD VERSIONS OF FILES SUCH AS WORD
                            DOCUMENTS THAT HAVE BEEN OVERWRITTEN WILL BE DELETED.</span>
                        <br>
                        <div class="break"></div> <span style="font-size: 11px;"> <i>*YOU MAY HAVE TO LOG BACK TO YOUR
                                ONLINE ACCOUNTS.</i> </span>
                        <br>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-12  mb-3 scrollclick" id="softwarerepair">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title " style="font-size: 16.5px !important;">SOFTWARE REPAIR </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins'">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 21px 0;">$50/HR. </h3>
                        <p> You may require one or more of the following services:
                            <br> Virus Removal (Restoring an Operating System to factory settings may be required, you
                            will be advised what is right for you).
                            <br> Resolving Printing Issues
                            <br> Software Tune-Up (This service will make your PC feel like new again!)
                            <br>
                        <div class="break"></div> <span style="font-size: 11px;">
                            <i>*A HARDWARE UPGRADE (OR MULTIPLE) MAY BE REQUIRED FOR THE BEST EFFECT OF THIS SERVICE.
                                YOU WILL BE ADVISED WHAT IS RIGHT FOR YOU.</i> </span>
                        <br>
                        <div class="break"></div> <span style="font-size: 11px;">*OLD VERSIONS OF FILES SUCH AS WORD
                            DOCUMENTS THAT HAVE BEEN OVERWRITTEN WILL BE DELETED.</span>
                        <br>
                        <div class="break"></div> <span style="font-size: 11px;"> <i>*YOU MAY HAVE TO LOG BACK TO YOUR
                                ONLINE ACCOUNTS.</i> </span>
                        <br>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-3 scrollclick" id="afterhours">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title" style="font-size: 16.5px !important;">AFTER HOURS SERVICES </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins'">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 0 0;">$200 FEE FOR AFTER HOURS SERVICES
                            ADDED TO BILL TOTAL. </h3>
                        <span class="fw-bold"
                            style="font-size: 11px; font-family: 'Poppins', sans-serif; margin-bottom: 21px;">*IF WE ARE
                            UNAVAILABLE, PLEASE LEAVE A VOICEMAIL, SEND US A TEXT MESSAGE AND/OR AN EMAIL. </span>
                        <p>This fee is for services that require immediate assistance, after hours.</p>
                    </div>
                </div>
            </div>

            <div class="col-12  mb-3 scrollclick" id="softwareupdate">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title " style="font-size: 16.5px !important;">SOFTWARE UPDATE & INSTALLATION
                        </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins'">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 21px 0;">$30/HR. </h3>
                        <p> You may require one or more of the following services:
                            <br> Software Installations
                            <br> Software Re-installations
                            <br> Software Updates
                            <br> System Setup
                            <br> Changing System Settings/Preferences
                            <br>
                        <div class="break"></div> <span style="font-size: 11px;">
                            <i>*OPERATING SYSTEM SOLD SEPARATELY.</i>
                            <i>OTHER PAID SOFTWARE SOLD SEPARATELY.</i> </span>
                        <br>
                        <div class="break"></div> <span style="font-size: 11px;">*OLD VERSIONS OF FILES SUCH AS WORD
                            DOCUMENTS THAT HAVE BEEN OVERWRITTEN WILL BE DELETED.</span>
                        <br>
                        <div class="break"></div> <span style="font-size: 11px;"> <i>*YOU MAY HAVE TO LOG BACK TO YOUR
                                ONLINE ACCOUNTS.</i> </span>
                        <br>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-12  mb-3 scrollclick" id="techassist">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title " style="font-size: 16.5px !important;">OTHER TECHNICAL ASSISTANCE </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins'">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 21px 0;">$30/HR. <br> </h3>
                        <p>This service is for miscellaneous services that exceed one hour. Services under this category
                            include services such as completing and uploading documentation online, email setup, email
                            troubleshooting, and even computer tutorials to teach you what you need (or want) to know.
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-3 scrollclick" id="printing">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title " style="font-size: 16.5px !important;">PRINTING, FAXING, & SCANNING </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins'">
                        <h3 style="text-transform: uppercase; font-size: 14.5px !important; margin: -4px 0 21px 0;">
                            $0.25/page (per side) <br> $5/package for package drop-off </h3>
                        <p> We can existing documentation.
                            <br>
                            <br> We can create new documentation.
                            <br>
                            <br> We can print documentation.
                            <br>
                            <br> We can scan and fax documentation.
                            <br>
                            <br> We can convert file types to do things such as resolve documentation issues and/or
                            restrict edits to your documentation before emailing it.
                            <br>
                            <br> In addition to the bullets above, we can print shipping labels on thermal labels, which
                            have the sticky back for a hassle-free experience.
                            We even cover package drop-off, so you do not have to!
                            For only $5, we will take your packages to an authorized shipping provider for the shipping
                            label you have, such as UPS or FedEx.
                            We can even print shipping labels on thermal paper, which has a sticky back for a
                            hassle-free experience.
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-3 scrollclick" id="databackup">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title " style="font-size: 16.5px !important;">DATA BACKUP & RECOVERY </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins';">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 0 0;">$40/HR. </h3>
                        <br>
                        <p>This service includes the backup and/or recovery of data from a Hard Drive or other Storage
                            Disk.</p>
                    </div>
                </div>
            </div>

            <div class="scrollclick" id="hardwarereplace">
                <div class="card-header">
                    <h2 class="card-title " style="font-size: 16.5px !important;">HARDWARE SERVICES </h2>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title " style="font-size: 15.5px !important;">HARDWARE UPGRADE & REPLACEMENT
                        </h2>
                    </div>
                    <div class="card-body" style=" font-family: 'Poppins'">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 21px 0;">$30/HR. <br> <i><b>*(PARTS SOLD
                                    SEPARATELY)</b></i> </h3>
                        This service includes upgrading or replacing hardware components.
                        <br> This service also includes dusting.<br>
                        <br>
                        <p> <span class="fst-italic"
                                style="text-transform: uppercase; font-size: 11px; font-family: 'Poppins', sans-serif;">*WE
                                DO NOT SERVICE LIQUID COOLERS. </span>
                            <br><br> <span class="fst-italic"
                                style="text-transform: uppercase; font-size: 11px; font-family: 'Poppins', sans-serif;">*WE
                                DO NOT REPAIR BROKEN SCREENS OR SERVICE THE HARDWARE IN APPLE COMPUTERS. </span>
                            <br><br> <span class="fst-italic"
                                style="text-transform: uppercase; font-size: 11px; font-family: 'Poppins', sans-serif;">*WE
                                DO NOT REPAIR PRINTER HARDWARE (ONLY PRINTER SOFTWARE BUT WE CAN CHANGE INK CARTRIDGES
                                AND TROUBLESHOOT AND DIAGNOSIS PRINTER HARDWARE ISSUES). </span>
                        </p>
                    </div>
                    <div class="col-12 mb-3 scrollclick-larger" id="comassembly">
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title " style="font-size: 15.5px !important;">COMPUTER ASSEMBLY </h2>
                            </div>
                            <div class="card-body" style=" font-family: 'Poppins';">
                                <h3 style="font-size: 14.5px !important; margin: -4px 0 0 0;">$200-$300 (PRICE VARIES)
                                </h3>
                                <br>
                                <p> We can build you a computer for your small office, <br> home office, or personal
                                    use.</p>
                                <p>SMALL OFFICE/HOME OFFICE PC BUILDS COST $200 LABOR.</p>
                                <p>GAMING PC BUILDS COST $300 FOR LABOR.</p>
                                <div class="break2"></div> <span class="fst-italic"
                                    style="font-size: 11px; font-family: 'Poppins', sans-serif;">*A CONSULTATION IS
                                    NECESSARY. </span>
                                <br>
                                <div class="break"></div> <span class="fst-italic"
                                    style="font-size: 11px; text-transform: uppercase; font-family: 'Poppins', sans-serif;">*ALL
                                    HARDWARE COSTS ARE DUE UP FRONT. </span>
                                <br>
                                <div class="break"></div> <span class="fst-italic"
                                    style="font-size: 11px; font-family: 'Poppins', sans-serif; text-transform: uppercase"><b>*DOWN
                                        PAYMENT FOR HALF OF THE COST OF LABOR IS REQUIRED. REMAINING LABOR COSTS DUE
                                        AFTER COMPLETION OF SERVICE.</b></span>
                                    <br><br>
                                    <div class="break"></div> <span class="fst-italic"
                                        style="font-size: 11px; font-family: 'Poppins', sans-serif; text-transform: uppercase">*We
                                        build with premium components only.</span>
                                        <br>
                                        <div class="break"></div> <span class="fst-italic"
                                            style="font-size: 11px; font-family: 'Poppins', sans-serif; text-transform: uppercase">*We
                                            do not install Liquid Coolers.</span>
                                            <br>
                                            <div class="break"></div> <span class="fst-italic"
                                                style="font-size: 11px; font-family: 'Poppins', sans-serif;">*OPERATING
                                                SYSTEM AND INSTALLATION SERVICE SOLD SEPARATELY. </span>
                                            <br>
                                            <div class="break"></div> <span class="fst-italic"
                                                style="font-size: 11px; font-family: 'Poppins', sans-serif;">*OTHER PAID
                                                SOFTWARE INSTALLATION SOLD SEPARATELY. </span>
                                            <br>
                                            <div class="break"></div> <span class="fst-italic"
                                                style="font-size: 11px; font-family: 'Poppins', sans-serif;">*SOFTWARE
                                                INSTALLATION SOLD SEPARATELY. </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-3 scrollclick" id="hookup">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title " style="font-size: 16.5px !important;">SYSTEM HOOK-UP </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins'">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 21px 0;">$10 (FIXED PRICE) </h3>
                        <p> This service is for plugging in computers, printers, routers, modems, and etcetera only.
                            <br> It does not include a computer purchase, software purchase, or any service other
                            than plugging in the system.
                            <br>
                        <div class="break"></div> <span class="fst-italic" style="font-size:11px;">*OTHER SERVICES
                            ARE SOLD SEPARATELY. </span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-12  mb-3 scrollclick" id="diagnostics">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title " style="font-size: 16.5px !important;">CONSULTATION & DIAGNOSTICS
                        </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins'">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 21px 0;"> *FREE <br> </h3>
                        <p> A conversation to discuss your problem(s) and/or need(s).
                            We can provide you with a free quote over the phone, via text, or via email.</p>
                        <p> A Diagnosis is extensive troubleshooting to come to a hardware and/or software
                            diagnostics. <br></p>
                        <div class="break"></div>
                        <p> <span
                                style="text-transform: uppercase; font-style: italic; font-size: 11px; font-family: 'Poppins', sans-serif;">*Any
                                Diagnosis that takes longer than one hour will be charged at an
                                hourly rate of $30. If you choose to move forward with services with us, you will
                                receive a
                                discount on your order to cover a one-hour diagnostic. However, you will be charged
                                at the hourly rate of $30 if you decide
                                not to move forward with any service(s) with us or if we cannot replicate the issues
                                you are
                                experiencing. </span>
                            <br>
                            <span
                                style="font-size: 11px; font-family: 'Poppins', sans-serif; text-transform: uppercase;">
                                <b><i>
                                        *A consultation is necessary for us to diagnosis.</i></b> </span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-12  mb-3 scrollclick" id="websites">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title " style="font-size: 16.5px !important;">WEBSITE DEVELOPMENT </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins'">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 21px 0;">STARTING AT $250.00 </h3>
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 21px 0;">$250 MINIMUM, $250.00 DOWN
                            PAYMENT REQUIRED </h3>
                        <p> This service is for having us develop you or your business a website.
                            We offer high-quality web development using HTML, CSS, and JavaScript code to be able to
                            provide a wide array of features and flexibility.
                            WordPress, Google Sites, and etcetera lack customizability, flexibility, and user
                            friendliness.
                            We code to ensure the best user experience to those viewing and using a website to do
                            things such as to get information or book an appointment.
                            We can provide you with a free quote over the phone, via text, or via email.
                            From basic websites with only a few paragraphs to a website with fancy animations, we
                            got that covered.
                            If you already have a website, we would be happy to look at it, make changes, fix bugs
                            and etcetera.
                            We strive to ensure all your dreams and envisions become reality with no exceptions to
                            what a website can have.
                            After initial development, we will be happy to revise things (at an extra cost).
                            We will fix errors made on our end for free and will work out any other kinks and to
                            ensure ease of use.
                            <br> <span style="font-size: 11px; font-family: 'Poppins', sans-serif;"><i
                                    style="text-transform: none !important;">We will more than likely recommend
                                    redevelopment of a website if it is not code based to ensure our high-quality
                                    standards are met.</i> </span>
                            <br> <span style="font-size: 11px; font-family: 'Poppins', sans-serif;"><b><i>*A
                                        CONSULTATION IS NECESSARY.</i></b> </span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-3 scrollclick" id="minimumservice">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title" style="font-size: 16.5px !important;">MINIMUM SERVICE FEE </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins'">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 0 0;">$100 FEE ADDED TO ORDERS UNDER
                            $125. </h3>
                        <p><i>THIS FEE DOES NOT APPLY TO CONSULTATION & DIAGNOSTICS.</i></p>
                        <p> This fee is for ensuring we meet a minimum to cover our travel costs and any time we
                            spend servicing quick needs instead of taking on bigger jobs.
                            We charge this fee because we need to ensure we meet our minimum if we are going to
                            service our customers on a first come first serve basis.
                        </p>
                        <p> <span class="fw-bold"
                                style="font-size: 11px; font-family: 'Poppins', sans-serif; margin-bottom: 21px; text-transform: uppercase;">
                                <i>This fee will not apply if the services you needed meets our minimum fee.</i>
                            </span> </p>
                        <p> <span class="fw-bold"
                                style="font-size: 11px; font-family: 'Poppins', sans-serif; margin-bottom: 21px;">*IF
                                WE ARE UNAVAILABLE, PLEASE LEAVE A VOICEMAIL, <br> TEXT MESSAGE, OR SEND AN E-MAIL.
                            </span> </p>
                        <br>
                    </div>
                </div>
            </div>

            <div class="col-12 mb-3 scrollclick" id="annualsub">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title" style="font-size: 16.5px !important;">ANNUAL SERVICES SUBSCRIPTION
                        </h2>
                    </div>
                    <div class="card-body" style="font-family: 'Poppins'">
                        <h3 style="font-size: 14.5px !important; margin: -4px 0 0 0;">$1000 </h3>
                        <p> <br> This service is an annual package to allow you to have services when you need them
                            most, at an annual rate to save you money. </p>
                        <p> <i>*IF YOU DO NOT USE THE SUBSCRIPTION, YOU WILL STILL BE CHARGED, LIKE ANY OTHER
                                SUBSCRIPTION.</i> </p>
                        <p>*THIS SUBSCRIPTION DOES NOT INCLUDE THE COSTS OF HARDWARE COMPONENTS, PERIPHERALS, OR
                            ACCESSORIES.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

  <Reviews />
  <Footer banner_light="/logo/MCRblackNred.png" banner_dark="/logo/MCRwhiteNred.png"  />
</template>
<style scoped>
@import url('@/assets/main.css');

.card-body p {
    font-size: 14px;
}

.fst-italic {
    font-weight: 500 !important;
}

.mb-3 {
    margin-bottom: 30px !important;
}

.h4 {
    font-size: 12.667px !important;
}

.h4 b {
    font-size: 14px;
}

.break {
    padding-top: 8px;
}

.break2 {
    padding-top: 0px;
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

@media screen and (max-width: 600px) {
    .squad-table {
        width: 90% !important;
    }
}
</style>
<script>
import globalMixin from '@/mixins/globalMixin';

export default {
  mixins: [globalMixin],
}
</script>