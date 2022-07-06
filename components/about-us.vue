<template>
    <div class="aboutus-component">
        <p class="first-p">WHAT WE OFFER</p>
        <h2>Welcome To Us</h2>
        <p class="second-p">We created our app For every one who want to feel safety, familirity, easiness & meet his, her or even their requirements, like privacy, number of riders, price & reapeted directions & their nature.  </p>
        <div class="row images">
            <div class="col-md-3">
                <div class="image">
                <img src="~/assets/images/about-us/maps.png" alt="maps">
                </div>
                <h2 class="img-title">Address Pickup</h2>
                <p class="img-p">We Always pick up our clients on time, 24/7 availability</p>
            </div>
            <div class="col-md-3">
                <div class="image">
                <img src="~/assets/images/about-us/route.png" alt="routs">
                </div>
                <h2 class="img-title">Long Distance</h2>
                <p class="img-p">We offer you a long distance car service to anywhere</p>
            </div>
            <div class="col-md-3">
                <div class="image">
                <img src="~/assets/images/about-us/money.png" alt="Money">
                </div>
                <h2 class="img-title">Budget-friendly options</h2>
                <p class="img-p">Compare prices on every kind of ride, from daily commutes to  evenings out.</p>
            </div>
            <div class="col-md-3">
                <div class="image">
                <img class="img-car" src="~/assets/images/about-us/car.png" alt="car">
                </div>
                <h2 class="img-title">City To City</h2>
                <p class="img-p">Tell us your city application allows you to move between cities</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .aboutus-component{
        text-align: center;
        background-color: #fff;
        .first-p{
            color: #2680EB;
            letter-spacing: 2px;
            font-size: 19px;
            font-weight: bold;
        }
        h2{
            font-size: 35px;
            font-weight: bold;
        }
        .second-p{
            font-size: 19px;
            color: #000;
        }
        .images{
            padding-top: 50px;
            .image{
                width: 100px ;
                height: 100px;
                margin: auto;
                img{
                    max-width: 100%;
                    max-height: 100%;
                }
                .img-car{
                    margin-top: 25px;
                }
            }
            .img-title{
                padding-top: 20px;
                font-weight: 100;
                font-size: 25px;
            }
            .img-p{
                font-weight: 100;
            }

        }
    }
</style>