<template>
  <section class="list">
    <h1>活动详情页</h1>
    <p>活动详情页活动详情页活动详情页活动详情页活动详情页活动详情页活动详情页活动详情页活动详情页活动详情页活动详情页</p>
    <div>{{appCount}}</div>
    <div>{{listCount}}</div>
    <button @touchstart="actAdd">加</button>
    <button @touchstart="actReduce">减</button>
  </section>
</template>

<script>

  export default {
    name: 'activity',
    data(){
      return {
        msg:'activity',
      }
    },
    mounted(){

    },
    components:{//注册组件

    },
    methods:{//函数
      actAdd(){
        this.$store.commit("add",{msg:"加"});//commit提交到mutations//同步
      },
      actReduce(){
        this.$store.dispatch("reduce",{msg:"减"});//dispatch提交到actions//异步
      }
    },
    computed:{//computed计算属性；函数；只要函数中的属性发生改变即可触发；计算属性可以直接在模板中使用
      appCount(){
        return this.$store.state.app.count;
      },
      listCount(){
        return this.$store.state.list.count;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/px2rem";
  .ad-img{
    border-bottom: 1px solid #0a9fdb;
  }
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
