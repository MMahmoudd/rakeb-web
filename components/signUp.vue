<template>
    <div class="signUp-component">
            <div class="row m-0">
                <div class="col-md-6 m-0 p-0">
                    <div class="image">
                        <img src="~/assets/images/signup.png" alt="background">
                    </div>
                    <div class="overlay">
                        <div class="content">
                            <p>MAKE MONEY ON YOUR SCHEDULE</p>
                            <h1>Drive With Rakeb And Be a Captin</h1>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 m-0 p-0 bg-color">
                    <div class="image right-img">
                        <img src="~/assets/images/Group 4825@2x.png" alt="graph">
                    </div>
                    <div class="overlay right-overlay">
                        <div class="card">
                            <b-form>
                                <h2 class="head">Create a new account</h2>
                                <b-form-group
                                    id="input-group-5"
                                    label-for="input-10">
                                    <vue-tel-input
                                    id="input-10"
                                    type="tel"
                                    required
                                    v-bind="bindProps"
                                    />
                                </b-form-group>
                                
                                <b-form-group id="input-group-3" label-for="input-3">
                                    <b-form-select
                                        id="input-3"
                                        :options="cities"
                                        required>
                                    </b-form-select>
                                </b-form-group>

                                <div class="row">
                                    <div class="col-md-6">
                                        <b-form-group id="input-group-2" label-for="input-2">
                                            <b-form-input
                                            id="input-2"
                                            required
                                            placeholder="First Name"
                                            ></b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6">
                                        <b-form-group id="input-group-4" label-for="input-3">
                                            <b-form-input
                                            id="input-4"
                                            required
                                            placeholder="Last Name"
                                            ></b-form-input>
                                        </b-form-group>
                                    </div>
                                </div>
                                <b-form-group
                                    label-for="input-1">
                                    <b-form-input
                                    id="input-1"
                                    type="email"
                                    required
                                    placeholder="Enter email"
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group
                                    label-for="input-6">
                                    <b-form-input
                                    id="input-6"
                                    type="password"
                                    required
                                    placeholder="Create Password"
                                    ></b-form-input>
                                </b-form-group>

                            <b-button block type="submit" variant="primary">Sign Up Now</b-button>
                            </b-form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="second-row">
                <h2>Drive when you want</h2>
                <div class="row">
                    <div class="col-md-4">
                        <div class="image">
                            <img src="~/assets/images/Calendar@2x.png" alt="Calendar">
                        </div>
                        <div class="content">
                            <p class="first">Be your own boss</p>
                            <p class="second">Full time? Part time? With Rakeb you work on your own time.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="image">
                            <img src="~/assets/images/money (6)@2x.png" alt="money">
                        </div>
                        <div class="content">
                            <p class="first">Make your own money</p>
                            <p class="second">You decide how much money you make and when you make it.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="image">
                            <img src="~/assets/images/power-plug@2x.png" alt="power-plug">
                        </div>
                        <div class="content">
                            <p class="first">Control your own life</p>
                            <p class="second">Take charge and achieve what you're working for, on your own terms.</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<style lang="scss">
    .signUp-component{
        position: relative;
        width: 100%;
        .image{
            height: 400px;
            overflow: hidden;
            img{
                width: 100%;
                height: 400px;
            }
        }
        .overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(38, 128, 235, .8);
            color: #fff;
            .content{
                width: 50%;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

            }
            .card{
                color: #000;
                padding: 25px 15px;
                text-align: center;
                margin-top: 20px;
                max-width: 80%;
                box-shadow: 0 3px 10px 3px #4b4747;
                .head{
                    text-align: left;
                    padding-bottom: 20px;
                }
                form{
                    .custom-select{
                        height: 55px;
                    }
                    input{
                        padding: 25px 15px;
                    }
                    .vti__input{
                        padding: 15px;
                    }
                }
            }
        }
        .bg-color{
            background-color: rgba(38, 128, 235, .8);
            .right-img{
                width: 100%;
                height: 400px;
            }
            .right-overlay{
                background-color: transparent !important;
            }
        }
        .second-row{
            padding-top: 250px;
            text-align: center;
            margin: auto;
            .image{
                width: 100px;
                height: 100px;
                margin: auto;
                margin-top: 25px;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .content{
                width: 60%;
                margin: auto;
                margin-top: 10px;
                .first{
                    letter-spacing: 1.5px;
                    font-weight: bold;
                }
            }
        }
    }
    // Start Responsive 
    @media only screen and ( max-width: 991px ) {
        .signUp-component {
            .overlay{
               .content {
                   width: 60%;
                   h1{
                       font-size: 30px  !important;
                   }
               }
            } 
        }
    }
    @media only screen and ( max-width: 767px ) {
        .signUp-component{
            .overlay{
                .card{
                    margin: 20px auto  !important;
                }
            }
        }
    }
</style>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        cities: ['Jeddah', 'Tabuk', 'Medina', 'Yanbu', 'Duba', 'Hail', 'Riyadh'],
        show: true,
        bindProps: {
        mode: "international",
        disabledFetchingCountry: false,
        disabledFormatting: false,
        defaultCountry: "SA",
        placeholder: "phone number",
        required: true,
        enabledCountryCode: false,
        type: "tel",
        formattedNumber: true,
        autocomplete: "on",
        // autofocus: true,
        name: "telephone",
        validCharactersOnly: true,
        dropdownOptions: {
          disabledDialCode: true,
        },
        inputOptions: {
          showDialCode: true,
        },
      },
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.cities = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>