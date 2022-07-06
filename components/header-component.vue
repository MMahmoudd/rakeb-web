<template>
    <div class="header-component">
        <!-- Swiper -->
        <div class="swiper-container">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              
                <div class="swiper-slide">
                  <div class="wrapper-style">
                    <img src="~/assets/images/header/Group6.png" alt="screen-1" />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="wrapper-style">
                    <img src="~/assets/images/header/image2-2x.png" alt="screen-2" />
                  </div>
                </div>
    
    
            </div>
        </div>
        </div>
        <div class="content">
          <p>WITH RAKEB YOU`RE IN SAFE HANDS</p>
          <h1>Best Car Service</h1>
          <b-button v-scroll-to="'#signup'" class="btn">Sign up to drive</b-button>
        </div>    
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
              loop: true,

              autoplay: {
                delay: 3000,
              },
                // Responsive breakpoints
                // breakpoints: {
                //     // when window width is <= 320px
                //     320: {
                //         slidesPerView: 1,
                //         spaceBetween: 10
                //     },
                //     // when window width is <= 480px
                //     480: {
                //         slidesPerView: 2,
                //         spaceBetween: 20
                //     },
                //     // when window width is <= 640px
                //     640: {
                //         slidesPerView: 3,
                //         spaceBetween: 30
                //     }
                // }
            }
        };
    }
}
</script>
<style lang="scss">

.header-component {
  width: 100%;
  position: relative;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 90;
    text-align: center;
    transform: translate(-50%, -50%);
    p{
      color: #2680EB;
      letter-spacing: 2px;
      font-size: 19px;
    }
    h1{ 
      font-weight: Bold;
      font-size: 60px;
      letter-spacing: 2px;
      color: #fff;
    }
    .btn{ 
      color: #fff;
      background-image: linear-gradient(180deg, #2680EB, #174A86);
      border: none;
      &:focus{
        box-shadow: unset !important;
      }
    }
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
}
  .header-component img {
    width: 100%;
    height: 100%;
  }
  // start header component responive 
  @media only screen and ( max-width: 991px ) {
    .content {
    p{
      letter-spacing: 1px !important;
      font-size: 19px !important;
    }
    h1{ 
      font-size: 35px !important;
      letter-spacing: 1px !important;
    }
    }
  }
  @media only screen and ( max-width: 567px ) {
    .content {
    p{
      letter-spacing: 1px !important;
      font-size: 14px !important;
    }
    h1{ 
      font-size: 30px !important;
      letter-spacing: 1px !important;
    }
    }
  }
</style>