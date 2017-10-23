<template>
  <footer class="footer">
    <section class="footerNav">
      <a href="tel:15888888888">
        <i class="fa fa-phone"></i>
        咨询电话
      </a>
      <router-link to="/address">
        <i class="fa fa-map-marker"></i>
        联系地址
      </router-link>
    </section>
    <section class="version">
      <router-link to="">移动版</router-link>
      <router-link to="">标准版</router-link>
    </section>
    <section class="footerCopy">瑞德启蒙教育&copy; 2016 版权所有</section>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/px2rem.scss";
  .footer{
    font-size:rem(18px);
  }
  .footerNav{
    display:flex;
    height:rem(66px);
    line-height:rem(66px);
    text-align:center;
    color: #3a3a3a;
    background:#eaeaea;
    border-top:#f1f2f2 rem(4px) solid;
    border-bottom:#00afd5 rem(4px) solid;
    a{
      flex:1;
      border-right:#dadada 1px solid;
      &:nth-child(2){
        border-right:0 none;
        border-left:#fff 1px solid;
      }
    }
  }
  .version{
    background: #e6e6e6;
    @include flexCenter();
    color: #747474;
    line-height: rem(18px);
    a{
      padding: 0 rem(10px);
      margin: rem(17px) 0 rem(14px);
    }
    & >:nth-child(1){
      border-right: solid 1px #b5b5b5;
    }
    & >:nth-child(2){
      border-left: solid 1px #f7f7f7;
    }
  }
  .footerCopy{line-height:rem(46px); text-align:center; background:#fff; color: #858585;}
</style>
