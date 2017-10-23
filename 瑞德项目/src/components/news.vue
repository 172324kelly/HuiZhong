<template>
  <section class="news">
    <refreshMore :ajaxParam="ajaxParam">
      <section class="ad">
        <img class="ad-img" src="../assets/img/ad-img01.jpg" alt="">
      </section>
      <dl class="mba-dl" v-for="(item,key) in mbaData" :key="key">
        <dt class="title"><i></i>{{item.title}}</dt>
        <dd v-for="(items,key) in item.list" :key="key">{{items}}</dd>
      </dl>
    </refreshMore>
  </section>
</template>

<script>
  import refreshMore from "@/components/common/refreshMore";
  export default {
    name: 'news',
    data(){
      return{
        ajaxParam:{
          url:"./static/api/news.json",
          pageNum:1
        }
      }
    },
    mounted(){
  
    },
    components:{//注册组件
      refreshMore
    },
    computed:{
      mbaData(){
        //console.log(this.$store.state.refreshMore.dataJson)
        return this.$store.state.refreshMore.dataJson;
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "../assets/css/px2rem";
  .ad{
    height: rem(182px);
  }
  .ad-img{
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
