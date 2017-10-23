<template>
  <section class="mba">
    <section class="banner">
      <img class="banner-img" src="../assets/img/ad-img02.jpg" alt="">
    </section>
    <dl class="mba-dl" v-for="(item,key) in mbaData" :key="key">
      <dt class="title"><i></i>{{item.title}}</dt>
      <dd v-for="(items,key) in item.list" :key="key">{{items}}</dd>
    </dl>
  </section>
</template>

<script>
import banner from "@/components/common/banner";
  export default {
    name: 'brand',
    data(){
      return{
        mbaData:[
          {
            url:"/",
            title:"成长指标",
            list:[
              "两岁到两岁半的儿童如何运动？",
              "一岁半到两岁的宝宝如何运动？",
              "14-18个月的宝宝如何做运动？",
              "10-14个月的宝宝如何做运动？",
              "0-10个月的宝宝如何做运动",
              "宝宝从小做运动有什么好处"
            ]
          },
          {
            url:"/",
            title:"智力开发",
            list:[
              "两岁到两岁半的儿童如何运动？",
              "一岁半到两岁的宝宝如何运动？",
              "14-18个月的宝宝如何做运动？",
              "10-14个月的宝宝如何做运动？",
              "0-10个月的宝宝如何做运动",
              "宝宝从小做运动有什么好处"
            ]
          },
          {
            url:"/",
            title:"情商培养",
            list:[
              "两岁到两岁半的儿童如何运动？",
              "一岁半到两岁的宝宝如何运动？",
              "14-18个月的宝宝如何做运动？",
              "10-14个月的宝宝如何做运动？",
              "0-10个月的宝宝如何做运动",
              "宝宝从小做运动有什么好处"
            ]
          },
          {
            url:"/",
            title:"语言能力",
            list:[
              "两岁到两岁半的儿童如何运动？",
              "一岁半到两岁的宝宝如何运动？",
              "14-18个月的宝宝如何做运动？",
              "10-14个月的宝宝如何做运动？",
              "0-10个月的宝宝如何做运动",
              "宝宝从小做运动有什么好处"
            ]
          },
          {
            url:"/",
            title:"语言能力",
            list:[
              "两岁到两岁半的儿童如何运动？",
              "一岁半到两岁的宝宝如何运动？",
              "14-18个月的宝宝如何做运动？",
              "10-14个月的宝宝如何做运动？",
              "0-10个月的宝宝如何做运动",
              "宝宝从小做运动有什么好处"
            ]
          },
          {
            url:"/",
            title:"入学须知",
            list:[
              "两岁到两岁半的儿童如何运动？",
              "一岁半到两岁的宝宝如何运动？",
              "14-18个月的宝宝如何做运动？",
              "10-14个月的宝宝如何做运动？",
              "0-10个月的宝宝如何做运动",
              "宝宝从小做运动有什么好处"
            ]
          },
          {
            url:"/",
            title:"入学须知",
            list:[
              "两岁到两岁半的儿童如何运动？",
              "一岁半到两岁的宝宝如何运动？",
              "14-18个月的宝宝如何做运动？",
              "10-14个月的宝宝如何做运动？",
              "0-10个月的宝宝如何做运动",
              "宝宝从小做运动有什么好处"
            ]
          },
          {
            url:"/",
            title:"胎教宝典",
            list:[
              "两岁到两岁半的儿童如何运动？",
              "一岁半到两岁的宝宝如何运动？",
              "14-18个月的宝宝如何做运动？",
              "10-14个月的宝宝如何做运动？",
              "0-10个月的宝宝如何做运动",
              "宝宝从小做运动有什么好处"
            ]
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
  .banner{
    height: rem(182px);
  }
  .banner-img{
    width:100%;
    height: rem(183px);
  }
  .mba-dl{
    width: rem(640px);
    dd{
      border-top:1px solid #fff;
      border-bottom:1px solid #d4d4d4;
      font-size:rem(24px);
      color: #3c3535;
      line-height: rem(57px);
      padding-left:rem(53px);
    }
    & > dd:nth-child(1){
        border-top:0 none;
        line-height: rem(66px);
    }
  }
  .title{
    position:relative;
    height: rem(71px);
    line-height: rem(71px);
    font-size: rem(30px);
    color: #454545;
    padding-left: rem(60px);
    font-weight: normal;
    background: url("../assets/img/course-title-bg.jpg") repeat-x;
    i{
      position:absolute;
      left: rem(40px);
      top: rem(22px);
      display: block;
      @include wh(4px,33px);
      background:url("../assets/img/title-icon.png") no-repeat;
    }
  }
</style>
