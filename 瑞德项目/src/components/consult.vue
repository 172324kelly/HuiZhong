<template>
  <section>
    <section class="main">
      <section class="consult">
        <h3 class="title">在线客服咨询</h3>
        <label class="name">您的姓名：<input type="text" v-model="name"></label>
        <textarea class="text" v-model="text" placeholder="请输入咨询内容……"></textarea>
        <button class="submit" @touchstart="submit">提交</button>
      </section>
      <ul class="notice">
        <li v-for="(item,key) in allData" :key="key">{{item.name+":"+item.text}}</li>
      </ul>
    </section>
  </section>
</template>

<script>
import io from "socket.io-client";

export default {
  name:"consult",
  data(){
    return {
      ws:null,
      name:"",
      text:"",
      allData:[]
    }
  },
  mounted(){//装载完毕的时候触发
    let _this=this;
    _this.ws=io("http://10.66.4.220:8080");//this指组件对象
    _this.ws.on("connect",function(){
      console.log(123);
      console.log(_this.ws.id);

      _this.ws.on("allChat",function(data){
        _this.allData.push(data);
      });
    });
  },
  methods:{
    submit(){
      let name=this.name;
      let text=this.text;
      this.ws.emit("chat",{
        name,//该写法相当于name：name，
        text
      });
    }
  }
}

</script>

<style lang="scss" scoped>
  @import "../assets/css/px2rem";
  .title{
    height: rem(64px);
    border-radius:rem(4px);
    color: #fff;
    font-size: rem(36px);
    line-height: rem(64px);
    text-align: center;
    margin-bottom: rem(20px);
    font-weight: normal;
  }
  .consult{
    width: rem(491px);
    color: #443c3c;
    padding:rem(20px);
    margin: 0 auto;
    .title{
      width: 100%;
      background:#443c3c;
    }
    label{
      display: block;
      padding-bottom:rem(12px);
      line-height: rem(36px);
    }
    input{
      @include wh(355px,40px);
      border: 1px solid #ccc;
      border-radius: rem(4px);
      padding-left:rem(14px);
    }
    .text{
      display: block;
      width: 100%;
      height: rem(100px);
      font-size: rem(18px);
      line-height: rem(24px);
    }
    .submit{
      @include wh(491px,64px);
      background: url("../assets/img/btn-icon.png") no-repeat;
      background-size: rem(600px) rem(370px);
      text-align: center;
      color: #fff;
      line-height: rem(64px);
      font-size: rem(24px);
      border:0 none;
      margin: rem(20px) auto 0;
    }
  }
  .notice{
    width: rem(539px);
    margin: rem(20px) auto;
  }
  
</style>
