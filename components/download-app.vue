<template>
    <div class="download-app-component">
        <div class="image">
            <img src="~/assets/images/download-app/background.png" alt="download app">
        </div>
        <div class="overlay">
            <div class="container">
            <div class="content">
                <p class="first-p">DOWNLOAD FOR FREE</p>
                <h2 class="title">Download the App</h2>
                <p class="second-p">Download Rakeb app to your smartphone and discover just how easy booking a 
                    car can be. with Rakeb application, you can order a car quickly.</p>
                    <div class="buttons d-flex">
                        <a class="btn" href="">
                            <div class="icon">
                                <img src="~/assets/images/Google_Play.png" alt="Google play">
                            </div>
                            <div class="btn-content">
                                <p>GIT IT ON</p>
                                <h2>Google Play</h2>
                            </div>
                        </a>
                        <a class="btn" href="">
                            <div class="icon">
                                <i class="fab fa-apple"></i>
                            </div>
                            <div class="btn-content">
                                <p>Download on the</p>
                                <h2>App Store</h2>
                            </div>
                        </a>
                    </div>
            </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .download-app-component{
        position: relative;
        width: 100%;
        .image{
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
            color: #fff;
            .content{
                max-width: 600px;
                margin-top: 25%;
                .first-p{
                    color: #2680EB;
                    font-weight: bold;
                    letter-spacing: 2px;
                    font-size: 18px;
                }
                .title{
                    font-size: 40px;
                }
                .buttons{
                    margin-top: 40px;
                    a{
                        background-color: #000;
                        margin: 10px;
                        color: #fff;
                        width: 300px;
                        height: 80px;
                        position: relative;
                        display: flex;
                        padding: 5px;
                        .icon{
                            width: 25%;
                            img{
                                width: 80%;
                            }
                            i{
                                font-size: 60px;
                            }
                        }
                        .btn-content{
                            text-align: left;
                            margin: auto;
                            p{
                                margin: 0;
                            }
                            h2{
                                margin: 0;
                            }
                        }
                    }
                }
            }
        }
    }
        // start Responsive for download app component
     @media only screen and ( max-width: 991px ) {
         .download-app-component .overlay .content{
             margin-top: 20px;
             .first-p{
                 font-size: 16px !important;
             }
             .title {
                font-size: 30px;
            }
            .second-p{
                font-size: 16px !important;
                letter-spacing: 1px !important;
            }
         }
     }
     @media only screen and ( max-width: 767px ) {
         .download-app-component .overlay .content{
             .second-p{
                display: none;
            }
            .buttons {
                margin-top: 10px
            }
             .d-flex{
             a{
                width: 200px !important;
                height: 60px !important;
                 img {
                    width: 60% !important;
                }
                i{
                    font-size: 30px !important;
                }
                .btn-content{
                    p{
                        font-size: 16px !important;
                        margin: 0 !important;
                    }
                    h2{
                        font-size: 18px !important;
                    }
                }
             }
         }
         }
     }
          @media only screen and ( max-width: 576px ) {
            .download-app-component{
                  height: 60vh;
                  text-align: center;
                  margin: auto;
                  .image{
                    img{
                        height: 60vh;
                    }
                }
                .content{
                    .d-flex{
                        display: unset !important;
                        a{
                            margin: 10px auto !important;
                        }
                    }
                }
            }
          }
</style>