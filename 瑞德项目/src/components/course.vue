<template>
  <section class="course">
    <banner></banner>
    <h3 class="title">特色课程</h3>
    <ul class="detail-list">
      <li v-for="(item,key) in specialData" :to="item.url" :key="key">
        <router-link :to="item.url">{{item.name}}<i></i></router-link>
      </li>
    </ul>
    <h3 class="title">启蒙基础课程</h3>
    <ul class="detail-list">
      <li v-for="(item,key) in basicData" :to="item.url" :key="key">
        <router-link :to="item.url">{{item.name}}<i></i></router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  import banner from "@/components/common/banner";
  export default {
    name: 'course',
    data(){
      return{
        specialData:[
          {
            url:"/course",
            name:"脑神经课程"
          },
          {
            url:"/course",
            name:"环球音乐之旅"
          },
          {
            url:"/course",
            name:"天才艺术"
          },
          {
            url:"/course",
            name:"瑞德英语"
          }
        ],
        basicData:[
          {
            url:"/course",
            name:"毛毛虫班"
          },
          {
            url:"/course",
            name:"小乌龟班"
          },
          {
            url:"/course",
            name:"小企鹅班"
          },
          {
            url:"/course",
            name:"小猴子班"
          },
          {
            url:"/course",
            name:"小袋鼠班"
          }
        ]
      }
    },
    mounted(){

    },
    components:{//注册组件
      banner
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/px2rem";
  .course{
    min-height: 100%;
  }
  .detail-list{
    background: #f1f2f2;
    padding:rem(47px) rem(31px) rem(66px) rem(34px);
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
  .title{
    height: rem(71px);
    line-height: rem(71px);
    font-size: rem(30px);
    color: #008dce;
    text-align: center;
    font-weight: normal;
    background: url("../assets/img/course-title-bg.jpg") repeat-x;
  }
</style>
