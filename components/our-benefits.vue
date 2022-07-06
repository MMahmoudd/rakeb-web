<template>
    <div class="our-benefits-component">
        <p class="first-p">MAIN FEATURES</p>
        <h2>Our Benefits</h2>
        <div class="row mt-5">
            <div class="col-md-3">
                <div class="left brdr d-flex">
                    <div class="icon">
                        <img src="~/assets/images/price-tag.png" alt="price-tag">
                    </div>
                    <div class="left-content">
                        <h2>Fixed Price</h2>
                        <p>The fixed fare is set in every carmeter as the main traiff.</p>
                    </div>
                </div>
                <div class="left brdr d-flex">
                    <div class="icon">
                        <img src="~/assets/images/surface.png" alt="surface">
                    </div>
                    <div class="left-content">
                        <h2>No Fee</h2>
                        <p>We guaranlee fixed price and you should not pay tips.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img class="center-car" src="~/assets/images/car.png" alt="car">
            </div>
            <div class="col-md-3">
                <div class="right brdr d-flex">
                    <div class="right-content">
                        <h2>100% Pleasure</h2>
                        <p>We have a lot of standing Customers and high ratings.</p>
                    </div>
                    <div class="icon">
                        <img src="~/assets/images/like.png" alt="price-tag">
                    </div>
                </div>
                <div class="right brdr d-flex">
                    <div class="right-content">
                        <h2>City To City</h2>
                        <p>application allows you to move between cities</p>
                    </div>
                    <div class="icon">
                        <img src="~/assets/images/world.png" alt="surface">
                    </div>
                </div>


                <div class="right-res brdr">
                    <div class="icon">
                        <img src="~/assets/images/like.png" alt="price-tag">
                    </div>
                    <div class="right-content">
                        <h2>100% Pleasure</h2>
                        <p>We have a lot of standing Customers and high ratings.</p>
                    </div>
                </div>
                <div class="right-res brdr">
                    <div class="icon">
                        <img src="~/assets/images/world.png" alt="surface">
                    </div>
                    <div class="right-content">
                        <h2>City To City</h2>
                        <p>application allows you to move between cities</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .our-benefits-component{
        .first-p{
            color: #2680EB;
            font-weight: bold;
            letter-spacing: 2px;
        }
        text-align: center;
        img{
            width: 100%;
        }
        .left{
            padding-top: 20px;
            .icon{
                width: 100px;
                margin-top: 15px;
                img{
                    width: 100%;
                }
            }
            .left-content{
                text-align: left;
                margin-left: 5px;
                h2{
                    font-size: 25px;
                }
            }
        }
        .right{
            padding-top: 20px;
            .icon{
                width: 100px;
                margin-top: 15px;
                img{
                    width: 100%;
                }
            }
            .right-content{
                text-align: right;
                margin-right: 5px;
                h2{
                    font-size: 25px;
                }
            }
        }
        .right-res{
            display: none;
        }
    }
    // start Responsive for our benefits component 
@media only screen and ( max-width: 991px ) {
    .our-benefits-component{
        .center-car{
            margin-top: 30%;
        }
    .left{
        display: unset !important;
        .icon{
                width: 50px !important;
                margin: auto;
                text-align: center;
                    padding-bottom: 15px;
                img{
                    width: 100%;
                }
            }
            .left-content{
                text-align: center !important;
                h2{
                    font-size: 20px;
                }
            }
        }
        .right{
            display: none !important;
        }
        .right-res{
            display: block !important;
            .icon{
                width: 50px !important;
                margin: auto;
                margin-top: 15px;
                text-align: center;
                padding-bottom: 15px;
                img{
                    width: 100%;
                }
            }
            .right-content{
                text-align: center !important;
                order: 2;
                display: block;
                h2{
                    font-size: 20px;
                }
            }
        }
    }
}
@media only screen and ( max-width: 767px ) {
    .our-benefits-component{
        .center-car{
            margin-top: 0%;
        }
    }
}
</style>