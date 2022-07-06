<template>
  <div class="wrapper">
    <section class="header-section" id="header">
          <headerComponent />
    </section>

     <section class="aboutUs-section section" id="about-us">
      <div class="container">
        <aboutUsComponent />
      </div>
    </section>

    <section class="download-app-section" id="download-app">
        <downloadAppComponent/>
    </section>

    <section class="our-benefits-section section" id="our-benefits">
      <div class="container">
        <ourBenefitsComponent />
      </div>
    </section>

    <section class="choose-car-section" id="choose-car">

        <chooseCarComponent />

    </section>

    <section class="latest-news-section" id="latest-news">
      <div class="container">
        <latestNewsComponent />
      </div>
    </section>

    <section class="testmonials-section" id="testmonials">
 
        <testmonialsComponent />

    </section>

    <section class="questions-section" id="questions">
        <questionsComponent />
    </section>

    <section class="signup-section" id="signup">

        <signUpComponent />

    </section>

  </div>
</template>

<script>
import headerComponent from '../components/header-component'
import aboutUsComponent from '../components/about-us'
import downloadAppComponent from '../components/download-app'
import ourBenefitsComponent from '../components/our-benefits'
import chooseCarComponent from '../components/choose-car'
import testmonialsComponent from '../components/testimonials'
import latestNewsComponent from '../components/latest-news'
import questionsComponent from '../components/questions'
import signUpComponent from '../components/signUp'






export default {
  name: "HomePage",

  components: {
    headerComponent,
    aboutUsComponent,
    downloadAppComponent,
    ourBenefitsComponent,
    chooseCarComponent,
    testmonialsComponent,
    latestNewsComponent,
    questionsComponent,
    signUpComponent
  }
};
</script>
<style lang="scss">
  .aboutUs-section,
  .latest-news-section,
  .questions-section{
    max-width: 100%;
  }
</style>