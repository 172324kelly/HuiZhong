<template>
  <section id="app" :style="{transform:'translate('+appMove+'px)'}">
    <appHeader class="header"></appHeader>
    <transition :enter-active-class="ani_enter" :leave-active-class="ani_leave">
      <router-view class="content"></router-view>
    </transition>
    <appfooter class="footer"></appfooter>
  </section>
</template>

<script>
  import Bus from "@/assets/js/bus.js";
  import appHeader from "@/components/common/header";
  import appfooter from "@/components/common/footer";
  import flexible from "./assets/js/flexible.js";
  flexible();

  export default {
    name: 'app',
    data(){
      return {
        appMove:0
      }
    },
    components:{
      appHeader,
      appfooter
    },
    beforeUpdate(){
      let path=this.$route.path;
      var arr=path.match(/\//g);
      console.log(path,arr);
      this.$store.commit("ani_transition",{
        class:arr.length
      });
      console.log(123)
    },
    computed:{
      ani_enter(){
        return this.$store.state.ani.ani_enter;
      },
      ani_leave(){
        return this.$store.state.ani.ani_leave;
      }
    },
    mounted(){
      let _this=this;
       Bus.$on("move",function(data){
       if(_this.appMove==0){
       _this.appMove=data;
       }
       else{
       _this.appMove=0;
       }
       });
    },
    methods:{
//      moveFun(data){
//        let _this=this;
//        if(_this.appMove==0){
//          _this.appMove=data;
//        }
//        else{
//          _this.appMove=0;
//        }
//      }
    }
  }
</script>

<style lang="scss">
  @import "./assets/css/px2rem.scss";
  @import "./assets/css/font-awesome.min.css";
  @import "./assets/css/animate.min.css";
  @import "./assets/css/reset.css";

  html,body{
    height:100%;
  }
  a{
     text-decoration: none;
   }
  .content{
    width: rem(640px);
  }
  #app {
    transition:transform 0.2s;
    position:relative;
    box-sizing:border-box;
    padding:rem(84px) 0 rem(100px);
    min-height:100%;
    padding-bottom: rem(167px);
  }
  .animated{
    position:fixed; z-index:999;
  }
  .header{
    position:absolute;
    z-index: 9999;
    left:0;
    top:0;
    width:100%;
  }
  .footer{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
  }
  .leave{
    animation-name: leave;
  }
  @keyframes leave{
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(-20%);
    }
  }
  .enter{
    animation-name: enter;
  }
  @keyframes enter{
    0%{
      transform: translateX(100%);
    }
    100%{
      transform: translateX(0);
    }
  }
</style>











