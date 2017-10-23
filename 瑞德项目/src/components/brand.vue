<template>
  <section class="brand">
    <banner></banner>
    <ul class="detail-list">
      <li v-for="(item,key) in brandData" :to="item.url" :key="key">
        <router-link :to="item.url">{{item.name}}<i></i></router-link>
      </li>
    </ul>
  </section>
</template>

<script>
  import banner from "@/components/common/banner";
  export default {
    name: 'brand',
    data(){
      return{
        brandData:[
          {
            url:"/brand",
            name:"品牌故事"
          },
          {
            url:"/course",
            name:"品牌历史"
          },
          {
            url:"/activity",
            name:"师资团队"
          },
          {
            url:"/mba",
            name:"中心掠影"
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
