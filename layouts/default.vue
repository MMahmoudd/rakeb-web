<template>
  <div>
    
      <mainNavbar />

    <div class="pages">
      <nuxt />
    </div>
    
    <div class="main-footer">
      <mainFooter />
    </div>
  </div>
</template>

<script>
import mainNavbar from '~/components/layout/navbar/navbar';
import mainFooter from '~/components/layout/footer/footer';
export default {
    components: {
      mainNavbar,
      mainFooter
    },
      methods: {
   
  },
}
</script>
<style lang="scss">
.pages{
  background-color: #fff;
  width: 100%;
}
@media only screen and ( max-width: 567px ){
  .pages{
    margin-top: 70px !important;
  }
}
</style>
