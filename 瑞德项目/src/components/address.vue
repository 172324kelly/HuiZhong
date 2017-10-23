<template>
  <section class="address">
    <h3 class="title">中心位置查询</h3>
    <section class="Add">
      <select name="add-select" id="">
        <option value="">选择你想要查询的瑞德启蒙的中心</option>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
    </section>
  </section>
</template>

<script>

  export default {
    name: 'address',
    data(){
      return{

      }
    },
    mounted(){

    },
    components:{//注册组件

    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/px2rem";
  section,option{
    margin: 0;
    padding: 0;
  }
  select{
    border: none;
  }
  .title{
    height: rem(71px);
    line-height: rem(71px);
    font-size: rem(30px);
    color: #3c3535;
    padding-left: rem(30px);
    font-weight: normal;
    background: url("../assets/img/course-title-bg.jpg") repeat-x;
  }
  .Add{
    background: #f1f2f2;
    padding: rem(30px) 0 0 rem(36px);
    .add-select{
      @include wh(475px,60px);
      background: #fff;
      border: 1px solid #d8d8d8;
    }
  }
</style>
