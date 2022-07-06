<template>
  <div class="navbar-component">
    <b-navbar toggleable="lg" type="dark" :class="{ 'scrolled': !view.atTopOfPage }" 
              class="fixed flex w-full border-b items-center justify-between flex-wrap p-5 m-auto top-0 animated">
      <div class="container">
      <b-navbar-brand class="brand" href="/">
        <img src="~/assets/images/navbar/logo.svg" alt="Logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <i class="fas fa-bars"></i>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->

        <b-navbar-nav class="ml-auto">
          <b-nav-item v-scroll-to="'#header'">HOME</b-nav-item>

          <b-nav-item v-scroll-to="'#about-us'">ABOUT US</b-nav-item>

          <b-nav-item v-scroll-to="'#our-benefits'">REVIEWS</b-nav-item>

          <b-nav-item v-scroll-to="'#latest-news'">OUR NEWS</b-nav-item>

          <b-nav-item v-scroll-to="'#questions'">CONTACT US</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
          </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      searchStatus: false,
      view: {
            atTopOfPage: true
        }
    };
  },  
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
},
  mounted() {
    // window.addEventListener("scroll", function(e) {
    //   if (window.scrollY > 100) {
    //     console.log("jjjjj");
    //   }
    // });
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    // the function to call when the user scrolls, added as a method
    handleScroll(){
        // when the user scrolls, check the pageYOffset
        if(window.pageYOffset>0){
            // user is scrolled
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
        }else{
            // user is at top of page
            if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
    }
  },
};
</script>
<style lang="scss">
.navbar-component{
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    background-color: transparent !important;
    transition: all .5s ease-in-out;
    .brand{
      transition: all .2s ease-in-out;
      img{
        width: 100%;
      }
    }
    .navbar-nav{
    li{
      .nav-link{
        color: #2680EB;
        margin: 0 5px;
        padding: 5px 25px;
        line-height: 2;
        transition: all .3s ease-in-out;
        &:hover, &:active, &:focus{
          color: #fff;
          background-color: #2680EB;
          border-radius: 40px;
        }
      }
    }
  }
  .navbar-dark .navbar-toggler{
    color: #2680EB;
    border-color: #2680EB;
    padding: 10px 15px;
  }
  .navbar-dark .navbar-toggler-icon{
    background-image: unset !important;
  }
}
  nav {
    z-index: 10;
    transition: all .5s ease-in-out;
}

nav.scrolled {
    background-color: #000 !important;
    border-bottom: 0px;
    padding: 5px !important;
    height: 70px;
    .brand{
      width:40px ;
      img{
        width: 100%;
      }
    }
}

// start Responsive for navbar 
@media only screen and ( max-width: 991px ) {
    .navbar-nav{
    li{
      .nav-link{
        background-color: #2680EB !important;
        color: #fff !important;
        margin: auto;
        text-align: center;
        padding: 10px !important;
        transition: all .3s ease-in-out;
        &:hover{
          color: #2680EB !important;
          background-color: #fff !important;
          border-radius: 40px;
        }
      }
    }
  }
  }
  @media only screen and ( max-width: 567px ) {
    nav.scrolled{
      background-color: transparent !important;
      .p-5{
        padding: 2px;
      }
    }
    .navbar-component{
    background-color: #000 !important;
    border-bottom: 0px;
    padding: 5px !important;
    height: 70px;
    .brand{
      width:40px ;
      img{
        width: 100%;
      }
    }
  }
  }
</style>
