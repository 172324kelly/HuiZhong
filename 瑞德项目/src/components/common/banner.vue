<template>
  <section class="banner">
    <img class="banner-img" src="../../assets/img/ad-img01.jpg" alt="">
  </section>
</template>

<script>
export default {
  name: 'banner',
  data() {
    return {
      
    }
  },
  methods:{

  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/px2rem.scss";
  .banner{
    height: rem(182px);
  }
  .banner-img{
    width:100%;
    height: rem(183px);
    border-bottom: 1px solid #0a9fdb;
  }
</style>
