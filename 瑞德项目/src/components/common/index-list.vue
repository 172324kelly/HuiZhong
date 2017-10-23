<template>
  <section class="index-list">
    <ul class="list">
      <li v-for="(item,key) in navData" :to="item.url" :key="key">
        <router-link :to="item.url">{{item.name}}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'index-list',
    data() {
      return {
        navData:[
          {
            url:"/brand",
            name:"瑞德品牌"
          },
          {
            url:"/course",
            name:"课程介绍"
          },
          {
            url:"/activity",
            name:"活动资讯"
          },
          {
            url:"/mba",
            name:"父母MBA"
          },
          {
            url:"/news",
            name:"新闻中心"
          },
          {
            url:"/reserve",
            name:"预约试听"
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/px2rem";
 .list{
   display: flex;
   flex-flow:row wrap;
   padding: rem(13px) rem(10px) rem(0px);
   font-size: rem(18px);
   justify-content: space-between;
   li{
     flex: none;
     @include wh(192px,148px);
     margin-bottom: rem(24px);
     text-align: center;
     border-radius: rem(4px);
     a{
       display: block;
       width: 100%;
       height: 100%;
       color: #fff;
       font-size: rem(18px);
       line-height: rem(18px);
       background-size:rem(600px) rem(300px);
       background: url("../../assets/img/index-icon.png") no-repeat;
       padding-top: rem(113px);
     }
   }
   & >:nth-child(1){
     background: #0bbebb;

   }
   & >:nth-child(2){
     background: #afd23a;
     a{
       background-position: rem(-200px) 0;
     }
   }
   & >:nth-child(3){
     background: #f48221;
     a{
       background-position: rem(-400px) 0;
     }
   }
   & >:nth-child(4){
     background: #de0000;
     a{
       background-position: 0 rem(-150px);
     }
   }
   & >:nth-child(5){
     background: #3eb7ee;
     a{
       background-position: rem(-200px) rem(-150px);
     }
   }
   & >:nth-child(6){
     background: #6eb943;
     a{
       background-position: rem(-400px) rem(-150px);
     }
   }
 }
</style>
