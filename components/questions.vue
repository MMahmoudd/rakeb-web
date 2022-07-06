<template>
    <div class="questions-component">
        <div class="container">
            <p class="head-p">HOW CAN WE HELP YOU?</p>
            <h2 class="title">Have Questions?</h2>
            <p class="w-5">If you have any comments, suggestions or questions, please do not hesitate to contact us. Our high-quality office staff will help you and answer all your questions.</p>
            <div class="row pt-5">
                <div class="col-md-4">
                    <div class="icon">
                        <img src="~/assets/images/maps.png" alt="maps">
                    </div>
                    <div class="content">
                        <h2>OUR ADDRESS</h2>
                        <p>Saudi Arabia Kingdom</p>
                    </div>
                </div>
                <div class="col-md-4 border-left border-right">
                    <div class="icon">
                        <img src="~/assets/images/calling.png" alt="calling">
                    </div>
                    <div class="content">
                        <h2>OUR PHONES</h2>
                        <p>00966536480004</p>
                        <p>00966536480004</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="icon">
                        <img src="~/assets/images/msg.png" alt="msg">
                    </div>
                    <div class="content">
                        <h2>OUR MAIL</h2>
                        <p>admin@rakeb.org</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-us p-5 mt-5">
            <div class="container">
                <b-form>
                <div class="row">
                    <div class="col-md-6">
                        <b-form-input
                            id="inline-form-input-name1"
                            class="mb-2 mr-sm-2 mb-sm-0 mt-3"
                            required
                            placeholder="Your Name">
                        </b-form-input>
                        <b-form-input
                            id="inline-form-input-name2"
                            class="mb-2 mr-sm-2 mb-sm-0 mt-3"
                            type="tel"
                            required
                            placeholder="Your Phone">
                        </b-form-input>
                    </div>
                    <div class="col-md-6">
                        <b-form-input
                            id="inline-form-input-name3"
                            class="mb-2 mr-sm-2 mb-sm-0 mt-3"
                            type="email"
                            required
                            placeholder="Your E-mail">
                        </b-form-input>
                        <b-form-input
                            id="inline-form-input-name4"
                            class="mb-2 mr-sm-2 mb-sm-0 mt-3"
                            required
                            placeholder="Your City">
                        </b-form-input>
                    </div>
                    <div class="col-md-12">
                        <b-form-textarea
                            id="inline-form-input-name5"
                            class="mb-2 mr-sm-2 mb-sm-0 mt-3"
                            required
                            placeholder="Your Question">
                        </b-form-textarea>
                    </div>
                </div>
                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0 mt-5">I agree that my submitted data is being collected and stored.</b-form-checkbox>
                <b-button class="btn" variant="primary">Send a Request</b-button>
                </b-form>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .questions-component{
        margin: auto;
        text-align: center;
        padding: 40px 0 0 0;
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
            .w-5{
                width: 60%;
                margin: auto;
            }
        .row{
            .icon{
                width: 80px;
                height: 80px;
                margin: auto;
                margin-bottom: 15px;
                img{
                    width: 100%;
                    
                }
            }
        }
        .contact-us{
            background-color: #F7F7F7;
            padding: 20px 0;
            .btn{
                margin-top: 20px;
                width: 200px;
                padding: 10px;
                border-radius: 25px;
                background-image: linear-gradient(180deg, #2680EB, #174A86);
            }
        }
    }
</style>