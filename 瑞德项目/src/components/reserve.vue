<template>
  <section class="reserve">
    <i class="gift"></i>
    <h3 class="title">课程试听预约</h3>
    <section class="main">
      <p>免费名额有限，现在就留下您的电话号码，我们的顾问会尽快联系您，并为您预约一个合适的时间。</p>
      <section class="reserve-form" action="">
        <label for="">宝宝姓名：<input type="text"></label>
        <label for="">宝宝年龄：
          <section>
            <select name="year" id="">
              <option value="">选择年</option>
              <option value="">2000年</option>
              <option value="">2001年</option>
              <option value="">2002年</option>
            </select>
          </section>
          <section>
            <select name="month" id="">
              <option value="">月</option>
              <option value="">9月</option>
              <option value="">10月</option>
              <option value="">11月</option>
            </select>
          </section>
          <section>
            <select name="date" id="">
              <option value="">日</option>
              <option value="">1日</option>
              <option value="">2日</option>
              <option value="">3日</option>
            </select>
          </section>
        </label>
        <label for="">联系电话：<input type="text" placeholder="请输入手机号码"></label>
        <label for="">课程选择：
          <section>
            <select name="course" id="">
              <option value="">选择你需要试听的课程</option>
              <option value="">xxxx课</option>
              <option value="">xxxx课</option>
            </select>
          </section>
        </label>
        <label for="">最近中心：
          <section>
            <select name="center" id="">
              <option value="">选择离你最近的中心</option>
              <option value="">xxxx</option>
              <option value="">xxxx</option>
            </select>
          </section>
        </label>
        <label for="">哪里知道：
          <section>
            <select name="know" id="">
              <option value="">选择你从哪里知道瑞德启蒙</option>
              <option value="">xxxx</option>
              <option value="">xxxx</option>
            </select>
          </section>
        </label>
      </section>
    </section>
  </section>
</template>

<script>

  export default {
    name: 'reserve',
    data(){
      return {
        
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
  .reserve{
    width: rem(596px);
    padding-bottom:rem(8px);
    margin: rem(24px) rem(22px) 0;
    background:#443c3c;
    border-radius: rem(4px);
    .title{
      font-size: rem(36px);
      color: #fff;
      padding-left: rem(32px);
      line-height: rem(104px);
      font-weight: normal;
    }
    .main{
      background:#fff;
      border:1px solid #cbcaca;
      padding:rem(14px) rem(13px) 0;
      p{
        padding:rem(14px) rem(56px) rem(14px) rem(34px);
        background:#f0f0f0;
        color: #666;
        font-size: rem(18px);
        line-height: rem(34px);
        border-radius: rem(4px);
      }
    }
    .gift{
      position: absolute;
      top: rem(95px);
      right: rem(10px);
      @include wh(206px,202px);
      background:url("../assets/img/btn-icon.png") no-repeat;
      background-size:rem(600px) rem(370px);
      background-position: 0 rem(-157px);
    }
  }
  .reserve-form{
    padding:rem(21px) rem(40px) rem(100px) rem(35px);
    font-size: rem(20px);
    color: #353535;
    line-height: rem(44px);
    label{
      display: flex;
      justify-content: space-between;
      padding-bottom:rem(12px);
    }
    input{
      @include wh(356px,40px);
      border:rem(2px) solid #e2e2e2;
      padding-left:rem(14px);
      // color: #c5c5c5;
    }
    select{
      @include wh(95px,40px);
      border-right:0 none;
      border:2px solid #e2e2e2;
      background-color:transparent;
      padding-left: rem(5px);
      appearance:none;
      -webkit-appearance: none; 
      background:url("../assets/img/sel-icon.jpg") no-repeat right;
      background-size:rem(40px) rem(44px);
    }
    select[name="year"]{
      @include wh(145px,40px);
    }
    select[name="course"],select[name="center"],select[name="know"]{
      @include wh(374px,40px);
    }
  }
  
</style>




















