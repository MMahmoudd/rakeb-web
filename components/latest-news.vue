<template>
    <div class="latest-news-component">
        <p class="head-p">STAY IN TOUCH</p>
        <h2 class="title">Latest News</h2>
        <div class="row">
            <div class="col-md-4">
                <b-card
                    img-src="../assets/images/latest-news/NoPath - Copy (3)@2x.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-2"

                >
                    <b-card-text>
                    How to Get Discount With Our Mobile Application
                    </b-card-text>
                    <p v-if="!readMoreActivated1" v-html="Text1"></p>
                    <span v-if="readMoreActivated1" v-html="Text2"></span>
                        <br>
                    <b-button href="#" v-if="!readMoreActivated1" @click="activateReadMore1">Read More</b-button>
                    <b-button href="#" v-if="readMoreActivated1" @click="activateReadLess1">Read Less</b-button>

                </b-card>
            </div>
            <div class="col-md-4">
                <b-card
                    img-src="../assets/images/latest-news/NoPath - Copy (6)@2x.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-2"
                >
                    <b-card-text>
                    Get the Best Price Of Car In Your Town
                    </b-card-text>
                    <p v-if="!readMoreActivated2" v-html="Text3"></p>
                    <span v-if="readMoreActivated2" v-html="Text4"></span>
                        <br>
                    <b-button href="#" v-if="!readMoreActivated2" @click="activateReadMore2">Read More</b-button>
                    <b-button href="#" v-if="readMoreActivated2" @click="activateReadLess2">Read Less</b-button>
                </b-card>
            </div>
            <div class="col-md-4">
                <b-card
                    img-src="../assets/images/latest-news/NoPath - Copy (5)@2x.png"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-2"
                >
                    <b-card-text>
                    Which City Has The Largest Car Cab Fleet In The World?
                    </b-card-text>
                    <p v-if="!readMoreActivated3" v-html="Text5"></p>
                    <span v-if="readMoreActivated3" v-html="Text6"></span>
                        <br>
                    <b-button href="#" v-if="!readMoreActivated3" @click="activateReadMore3">Read More</b-button>
                    <b-button href="#" v-if="readMoreActivated3" @click="activateReadLess3">Read Less</b-button>

                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            Text1: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tincidunt ut laoreet`,
            Text2: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh  tincidunt ut laoreet`,
            Text3: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tincidunt ut laoreet`,
            Text4: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh  tincidunt ut laoreet`,
            Text5: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tincidunt ut laoreet`,
            Text6: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tincidunt ut laoreet Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh  tincidunt ut laoreet`,
            readMoreActivated1: false,
            readMoreActivated2: false,
            readMoreActivated3: false
        }
    },
    methods: {
        activateReadMore1(){
            this.readMoreActivated1 = true
            },
        activateReadLess1(){
            this.readMoreActivated1 = false
        },
        activateReadMore2(){
            this.readMoreActivated2 = true
            },
        activateReadLess2(){
            this.readMoreActivated2 = false
        },
        activateReadMore3(){
            this.readMoreActivated3 = true
            },
        activateReadLess3(){
            this.readMoreActivated3 = false
        },
    }
}
</script>
<style lang="scss">
    .latest-news-component{
        text-align: center;
        padding: 40px 0;
        .head-p{
                color: #2680EB;
                letter-spacing: 2px;
                font-weight: bold;
                font-size: 18px;
            }
            .title{
                font-size: 40px;
                padding-bottom: 30px;
            }
            .card{
                text-align: left;
                border: unset;
                height: 650px;
                position: relative;
                &:hover{
                    box-shadow: 0 3px 10px 3px #cccccc;
                    cursor: pointer;
                }
                .btn{
                        background-image: linear-gradient(180deg, #2680EB, #174A86);
                        position: absolute;
                        bottom: 15px;
                }
            }
    }
    @media only screen and ( max-width: 767px ) {
    .latest-news-component{
        .card{
            height: 750px !important;
        }
    }
}
@media only screen and ( max-width: 480px ) {
    .latest-news-component{
        .card{
            height: 650px !important;
        }
    }
}
</style>