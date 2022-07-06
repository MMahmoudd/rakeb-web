<template>
    <div class="testimonials-component">
        <div class="image">
            <img src="~/assets/images/9wksKEHsiq@2x.png" alt="background">
        </div>
        <div class="overlay pt-5">
            <p class="head-p">CAR CLASSES AND RATES</p>
            <h2 class="title">Choose Your Car</h2>
            <div class="slider">
                <div class="icon">
                    <img src="~/assets/images/comment.svg" alt="comment">
                </div>
                <div class="swiper-container">
                    <div v-swiper:mySwiper="swiperOption">
                        <div class="swiper-wrapper">
                            
                            <div class="swiper-slide">
                                    <p>
                                        We used you car for the first time after seeing good reports online. very efficient, and smart driver with a very clean vehicle. we want to say a big thank you for excellent servide and we would definitely recommend to friends and family and use your service again. you are the best. keep it going that way.
                                        <span class="person">
                                            Muhammed Awad , Suadi Arabia
                                        </span>
                                    </p>
                            </div>
                            <div class="swiper-slide">
                                    <p>
                                        We used you car for the first time after seeing good reports online. very efficient, and smart driver with a very clean vehicle. we want to say a big thank you for excellent servide and we would definitely recommend to friends and family and use your service again. you are the best. keep it going that way.
                                        <span class="person">
                                            Muhammed Awad , Suadi Arabia
                                        </span>
                                    </p>
                            </div>
                            <div class="swiper-slide">
                                    <p>
                                        We used you car for the first time after seeing good reports online. very efficient, and smart driver with a very clean vehicle. we want to say a big thank you for excellent servide and we would definitely recommend to friends and family and use your service again. you are the best. keep it going that way.
                                        <span class="person">
                                            Muhammed Awad , Suadi Arabia
                                        </span>
                                    </p>
                            </div>
                
                
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swiperOption: {
                spaceBetween: 0,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
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
    .testimonials-component{
        position: relative;
        width: 100%;
        height: 100vh;
        .image{
            width: 100%;
            height: 100vh;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .6);
            margin: auto;
            text-align: center;
            .head-p{
                    color: #2680EB;
                    letter-spacing: 2px;
                    font-size: 18px;
                }
                .title{
                    font-size: 40px;
                    color: #fff;
                }
            .slider{
                margin: 40px 0 0 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 300px;
                width: 50%;
                .icon{
                        background-color: #2680EB;
                        border-radius: 50%;
                        width: 100px;
                        height: 100px;
                        margin: auto;
                        margin: 0;
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        transition: all .5s ease-in-out;
                        z-index: 20;
                        img{
                            margin-top: 20px;
                        }
                }
                    .person{
                        color: #2680EB;
                        font-size: 18px;
                        margin-top: 20px;
                        display: block;
                    }
            }
        }
        .swiper-container {
                    width: 100%;
                    height: 100%;
                    border-radius: 15px;
                }

                    .swiper-slide {
                    text-align: center;
                    font-size: 18px;
                    background-color: rgba(0, 0, 0, .6);
                    color: #fff;
                    padding: 30px 10px 10px 10px;
                    
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
                        p{
                        padding-top: 30px;
                        }
                    }
                    .swiper-pagination-bullet{
                        background: #fff;
                    }
    }
    // start Responsive for testimonials component
     @media only screen and ( max-width: 991px ) {
         .slider{
                height: 300px;
                width: 60% !important;
                }
     }
     @media only screen and ( max-width: 767px ) {
         .slider{
                height: 300px;
                width: 75% !important;
                }
     }
     @media only screen and ( max-width: 576px ) {
         .slider{
                margin: 80px 0 0 0 !important;
                height: 400px !important;
                width: 100% !important;
                }
     }
</style>