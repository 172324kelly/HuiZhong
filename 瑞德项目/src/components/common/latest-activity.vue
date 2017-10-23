<template>
  <section class="activities">
    <img class="ad-img" src="../../assets/img/ad-img01.jpg" alt="">
    <h3 class="title">标题</h3>
    <dl class="details">
    </dl>
  </section>
</template>

<script>

  export default {
    name: 'latestActivity',
    data(){
        return {

        }
    },
    mounted(){

    },
    components:{//注册组件

    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/px2rem";
  .details{
    width: rem(592px);
    background:#fff;
    height: rem(10px);
  }
  .title{
    height: rem(71px);
    line-height: rem(71px);
    font-size: rem(30px);
    color: #008dce;
    padding-left: rem(30px);
    font-weight: normal;
    background: url("../../assets/img/course-title-bg.jpg") repeat-x;
  }
</style>
