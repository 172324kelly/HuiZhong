<template>
  <section>
    <slider></slider>
    <indexList></indexList>
  </section>
</template>

<script>
import slider from "@/components/common/slider";
import indexList from "@/components/common/index-list";
export default {
  name: 'index',
  data(){
    return {
      
    }
  },
  mounted(){

  },
  components:{//注册组件
    slider,
    indexList
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/px2rem";
</style>
