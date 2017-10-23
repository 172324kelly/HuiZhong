<template>
  <section class="slider" @touchstart="move" @touchmove="move" @touchend="move" ref="sliderObj">
    <ul :style="{transform:'translateX('+sliderMove.x_move+'px)',transition:sliderMove.transVal}">
      <li v-if="(sliderData.length-1)!=-1"><router-link :to="sliderData[sliderData.length-1].linkUrl"><img :src="sliderData[sliderData.length-1].imgUrl" /></router-link></li>
      <li v-for="(item,key) in sliderData" :key="key">
        <router-link :to="item.linkUrl"><img :src="item.imgUrl" /></router-link>
      </li>
      <li v-if="(sliderData.length-1)!=-1"><router-link :to="sliderData[0].linkUrl"><img :src="sliderData[0].imgUrl" /></router-link></li>
    </ul>
    <section class="slider-btn">
      <span v-for="(item,key) in sliderData" :key="key" :class="{current:key==sliderMove.index}"></span>
    </section>
  </section>
</template>

<script>

export default {
  name: 'slider',
  data(){
    return{
      sliderData:[],//幻灯片图片链接数据
      sliderMove:{
        x_start:null,//touchstart得到的坐标x
        x_init:0,//幻灯片未移动时的坐标x
        x_move:0,//幻灯片移动动的结果坐标x
        transVal:"none",//过渡属性的值
        index:0//表示位置
      }
    }
  },
  mounted(){
    let _this=this;
    _this.$http({
    	method:"get",
    	url:"./static/api/slider.json"
    }).then(function(res){
    	_this.sliderData=res.data;
    },function(err){
    	console.log(err);
    });

    let width=_this.$refs.sliderObj.clientWidth;
    _this.sliderMove.x_init=-width;
  },
  methods:{
    move(e){
      let _this=this;
      let x=e.changedTouches[0].pageX;
      console.log(e.type);
      if(e.type=="touchstart"){
        _this.sliderMove.transVal="none";
        _this.sliderMove.x_move=_this.sliderMove.x_init;
        _this.sliderMove.x_start=x;
      }
      else if(e.type=="touchmove"){
        _this.sliderMove.x_move=_this.sliderMove.x_init+(x-_this.sliderMove.x_start);
      }
      else if(e.type=="touchend"){
        let distance=x-_this.sliderMove.x_start;//触屏手指移动距离
        let width=_this.$refs.sliderObj.clientWidth;//幻灯片可视宽度
        let result=0;//移动到的结果坐标
        _this.sliderMove.index=Math.abs(Math.round(_this.sliderMove.x_init/width))-1;//得到位置
        _this.sliderMove.transVal="transform 0.2s";//设置过渡的属性及时间
        if(Math.abs(distance)>width/3){
          if(distance>0){//向右
            result=_this.sliderMove.x_init+width;
            _this.sliderMove.index=_this.sliderMove.index==0?_this.sliderData.length-1:_this.sliderMove.index-1;//变为新位置
          }
          else{//向左
            result=_this.sliderMove.x_init-width;
            _this.sliderMove.index=_this.sliderMove.index==_this.sliderData.length-1?0:_this.sliderMove.index+1;//变为新位置
          }
        }
        else{
          result=_this.sliderMove.x_init;
        }
        _this.sliderMove.x_move=result;
        _this.sliderMove.x_init=-(_this.sliderMove.index+1)*width;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/px2rem.scss";
  .slider{
  	position:relative;
  	width:rem(640px);
  	height:rem(370px);
  	overflow:hidden;
  	ul{
  		display:flex;
  		width:1000%;
  		height:100%;
  	}
  	li{
  		flex:none;
  		width:10%;
  	}
  	img{
  		width:100%;
  		height:100%;
  	}
  }
  .slider-btn{
  	@include flexCenter();
  	position:absolute;
  	left:0;
  	bottom:0;
  	width:100%;
  	height:rem(44px);
    background:rgba(255,255,255,0.6);
  	span{
  		flex:none;
  		@include wh(16px,16px);
  		background:#fff;
  		border-radius:50%;
  		margin-left:rem(5px);
  	}
  	.current{
  		background:#6a605f;
  	}
  }
</style>























