<template>
    <div class="choose-car-component">
        <div class="image">
            <img src="~/assets/images/choose-car/YBMpw2uiwh@2x.png" alt="background">
        </div>
        <div class="overlay pt-5">
        <p class="head-p">CAR CLASSES AND RATES</p>
        <h2 class="title">Choose Your Car</h2>
        <div class="container">
        <div class="row pt-5">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-image">
                        <img src="~/assets/images/choose-car/van.svg" alt="van">
                    </div>
                    <div class="card-content">
                        <h2>Share</h2>
                        <p>Our Car Service offers a big car selection from luxury vehicles to budget cars</p>
                        <p class="price">
                            20.9 SAR
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-image">
                        <img src="~/assets/images/choose-car/car1.svg" alt="van">
                    </div>
                    <div class="card-content">
                        <h2>Comfort</h2>
                        <p>Our Car Service offers a big car selection from luxury vehicles to budget cars</p>
                        <p class="price">
                            35.6 SAR
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-image">
                        <img src="~/assets/images/choose-car/car.svg" alt="van">
                    </div>
                    <div class="card-content">
                        <h2>Luxurious</h2>
                        <p>Our Car Service offers a big car selection from luxury vehicles to budget cars</p>
                        <p class="price">
                            47.8 SAR
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
</template>
<style lang="scss">
    .choose-car-component{
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
            overflow: hidden;
                .head-p{
                    color: #2680EB;
                    letter-spacing: 2px;
                    font-size: 18px;
                }
                .title{
                    font-size: 40px;
                    color: #fff;
                }
                .card{
                    background-color: #191717;
                    color: #fff;
                    border: 7px solid #191717;
                    padding: 15px;
                    position: relative;
                    transition: all .5s ease-in-out;
                    margin-top: 70px;
                    &:hover{
                        background-color: #2680EB;
                        border: 7px solid #2680EB;
                    }
                    &:hover .card-image{
                        border: 7px solid #2680EB;
                    }
                    &:hover .price{
                        color: #fff;
                    }
                    .card-image{
                        border: 7px solid #191717;
                        background-color: #2680EB;
                        border-radius: 50%;
                        width: 100px;
                        height: 100px;
                        margin: auto;
                        margin: 0;
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%, -65%);
                        transition: all .5s ease-in-out;
                        img{
                            margin-top: 20px;
                        }
                    }
                    .card-content{
                        padding-top: 40px;
                    }
                    .price{
                        color: #2680EB;
                    font-size: 18px;
                    transition: all .5s ease-in-out;
                    }
                }
            }
    }
        // start Responsive for choose-car-component
     @media only screen and ( max-width: 991px ) {
         .choose-car-component{
             .overlay{
                 padding-top: 15px !important;
                 .title{
                    font-size: 30px;
                    color: #fff;
                }
                 .card{
                     border: none;
                     &:hover{
                         border: none;
                     }
                     .card-content{
                         h2{
                             font-size: 22px;
                         }
                     }
                 }
             }
         }
     }
     @media only screen and ( max-width: 767px ) {
         .choose-car-component{
             .overlay{
                 .pt-5{
                     padding-top: 0px !important;
                 }
                 .card{
                     margin-top: 10px;
                        padding: 7px;
                     .card-image{
                         display: none;
                     }
                     .card-content{
                         padding-top: 0px !important;
                         h2{
                             font-size: 22px;
                         }
                     }
                 }
             }
         }
     }
</style>