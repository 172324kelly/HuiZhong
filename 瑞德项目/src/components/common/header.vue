<template>
  <header class="header">
    <a @touchstart.prevent="appMove" class="nav-btn" href="javascript:void(0)"><i class="fa fa-bars"></i></a>
    <h1 class="logo"><img src="../../assets/img/logo.png" /></h1>
    <a class="tel" href="tel:15999999999"><i class="fa fa-phone"></i></a>
    <nav class="nav" ref="nav">
      <router-link v-for="(item,key) in navData" :to="item.url" :key="key"><i class="fa" :class="item.className"></i>{{item.name}}</router-link>
    </nav>
  </header>
</template>

<script>
import Bus from "@/assets/js/bus.js";

export default {
  name: 'header',
  data() {
    return {
      navData:[
        {
          url:"/",
          name:"首页",
          className:"fa-home"
        },
        {
          url:"/brand",
          name:"品牌",
          className:"fa-cube"
        },
        {
          url:"/course",
          name:"课程介绍",
          className:"fa-book"
        },
        {
          url:"/activity",
          name:"活动资讯",
          className:"fa-location-arrow"
        },
        {
          url:"/mba",
          name:"父母MBA",
          className:"fa-university"
        },
        {
          url:"/news",
          name:"新闻中心",
          className:"fa-newspaper-o"
        },
        {
          url:"/reserve",
          name:"预约试听",
          className:"fa-assistive-listening-systems"
        },
        {
          url:"/consult",
          name:"在线咨询",
          className:"fa-comments"
        }

      ]
    }
  },
  methods:{
    appMove(){
      let navNode=this.$refs.nav;
      let width=navNode.clientWidth;
      Bus.$emit("move",width);
    }
  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/px2rem.scss";
  .header{
    display:flex;
    width:100%;
    height:rem(84px);
    background: #473f3f;
  }
  .nav-btn{
    flex:none;/*保持宽度不变*/
    display:flex;
    justify-content:center;
    align-items:center;
    width:rem(95px);
    border-right:#241f1f 1px solid;
    color:#fff;
    font-size:rem(36px);
  }
  .logo{
    width:100%;
    @include flexCenter();
    border-left:#4a4141 1px solid;
    border-right:#322d2d 1px solid;
    img{
      @include wh(384px,51px);
    }
  }
  .tel{
    flex:none;
    display:flex;
    justify-content: center;
    align-items:center;
    width:rem(88px);
    color:#fff;
    font-size:rem(36px);
  }
  .nav{
    display:flex;
    flex-flow:row wrap;
    align-content:flex-start;
    position:fixed;
    z-index: 99999;
    left:rem(-288px);
    top:0;
    width:rem(288px);
    height:100%;
    background:#3c3535;
    a{
      text-decoration: none;
      box-sizing:border-box;
      flex:none;
      display:flex;
      align-items:center;
      width:100%;
      height:rem(96px);
      border-top:#1e1818 1px solid;
      border-bottom:#584c4c 1px solid;
      color:#fff;
      font-size:rem(32px);
      padding-left: rem(30px);
      i{
        margin-right: rem(10px);
      }
    }
  }
</style>
