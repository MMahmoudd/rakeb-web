<template>
  <div class="footer-container">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 pt-4">
          <img class="logo" src="~/assets/images/navbar/logo.svg" alt="logo image" />
          <p class="pt-3">
            We created rakeb app to help you to find 
            the most dependable and highest quality
            car services, anytime and anywhere
            without any problems
          </p>
        </div>
        <div class="col-lg-3 col-md-6 links-footer">
          <h2>Useful Links</h2>
          <div class="row pt-3">
            <ul class="col-6 list-unstyled">
              <li v-scroll-to="'#header'">
                <img src="~/assets/images/polygon.svg" alt="polygon"> Home
              </li>
              <li v-scroll-to="'#about-us'">
                <img src="~/assets/images/polygon.svg" alt="polygon"> About us
              </li>
              <li v-scroll-to="'#our-benefits'">
                <img src="~/assets/images/polygon.svg" alt="polygon"> Reviews
              </li>
            </ul>
            <ul class="col-6 list-unstyled">
              <li v-scroll-to="'#latest-news'">
                <img src="~/assets/images/polygon.svg" alt="polygon"> Our news
              </li>
              <li v-scroll-to="'#questions'">
                <img src="~/assets/images/polygon.svg" alt="polygon"> Contact us
              </li>
              <li v-scroll-to="'#signup'">
                <img src="~/assets/images/polygon.svg" alt="polygon"> Sign up
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 contact-footer">
          <h2>Contact Info</h2>
          <div class="contacts">
            <p>
              <i class="fas fa-envelope"></i> <a href="mailto:admin@rakeb.app">admin@rakeb.app</a>
            </p>
            <p>
              <i class="fas fa-phone-alt"></i> <a href="tel:+00966536480004">00966536480004</a>
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> Saudi Arabia Kingdom
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 subscribe-footer">
          <h2>Subscribe to us</h2>
          <div class="row">
            <div class="col-12">
          <p>
            Subscribe to Our Newsletters!
          </p>
          
          <b-input-group class="mt-3">
            <template #append>
              <b-input-group-text><img src="~/assets/images/massege.svg" alt=""></b-input-group-text>
            </template>
            <b-form-input></b-form-input>
          </b-input-group>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            I agree that my submitted data is being collected and stored
          </b-form-checkbox>
          </div>
          <!-- <div class="col-2">
          </div> -->
        </div>
        </div>
      </div>
    </div>
    <a class="btn toUp" v-scroll-to="'#header'">
            <i class="fas fa-chevron-up"></i>
      </a>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        status: 'not_accepted'
      }
    }
  }
</script>
<style lang="scss">
  .footer-container{
    position: relative;
      .logo{
        width: 70px;
      }
      .links-footer,
      .contact-footer,
      .subscribe-footer{
        padding-top: 60px;
      }
      .links-footer{
        ul{
          li{
            margin: 6px 0;
            cursor: pointer;
            transition: all .3s ease-in-out;
            &:hover{
              color: #007bff;
            }
          }
        }
      }
      .contact-footer{
        .contacts{
              margin-top: 30px;
        }
        p{
          margin: 6px 0;
          i{
            color: #007bff;
          }
          a{
            color: #fff;
            text-decoration: none;
            transition: all .3s ease-in-out;
            &:hover{
              color: #007bff;
            }
          }
        }
      }
      .subscribe-footer{
        .form-control{
          border: none;
          border-radius: 50px 0 0 50px;
          outline: none;
          box-shadow: none;
        }
        .input-group-text{
          background-color: #fff;
          border: none;
          border-radius:  0  50px 50px 0;
        }
      }
      .toUp{
        background-color: #007bff;
        color: #fff;
        position: absolute;
        right: 15px;
        bottom: 15px;
      }
  }
</style>