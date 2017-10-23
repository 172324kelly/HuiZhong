<template>
  <section class="activity">
    <banner></banner>
    <ul class="detail-list">
      <li v-for="(item,key) in activityData" :to="item.url" :key="key">
        <router-link :to="item.url">{{item.name}}<i></i></router-link>
      </li>
    </ul>
    <activityTest></activityTest>
  </section>
</template>

<script>
  import activityTest from "@/components/activity-test";
  import banner from "@/components/common/banner";
  export default {
    name: 'activity',
    data(){
      return{
        activityData:[
          {
            url:"/activity/latestActivity",
            name:"最新活动"
          },
          {
            url:"/activity",
            name:"活动预约"
          },
          {
            url:"/activity",
            name:"往期回顾"
          }
        ]
      }
    },
    mounted(){

    },
    components:{//注册组件
      activityTest,
      banner
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/px2rem";
  .detail-list{
    background: #f1f2f2;
    padding:rem(47px) rem(31px) 0 rem(34px);
    li{
      border: 1px solid #d4d4d4;
      background: #f9f9f9;
      border-radius: rem(5px);
      margin-bottom: rem(4px);
      text-align: center;
      width: rem(574px);
      height: rem(88px);
      a{
        position: relative;
        display: block;
        color: #3c3535;
        font-size: rem(30px);
        line-height: rem(88px);
        i{
          position: absolute;
          top:rem(30px);
          right: rem(32px);
          @include wh(15px,20px);
          background: url("../assets/img/public-icon.png") no-repeat;
          background-position: rem(-585px) rem(-10px);
        }
        .cur-i{
          background-position: rem(-585px) rem(-60px);
        }
      }
    }
    .current{
      width: rem(574px);
      height: rem(88px);
      background: url("../assets/img/public-icon.png");
    }
  }
</style>
