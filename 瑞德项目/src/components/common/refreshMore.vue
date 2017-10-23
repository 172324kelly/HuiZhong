<template>
  <section class="refreshMore" @touchstart="scroll" @touchmove="scroll" @touchend="scroll" @touchcancel="scroll" :style="{transform:'translateY('+moveY+'px)',transition:transition.val}">
    <span ref="span" class="refresh">{{refreshText.text}}</span>
    <section class="refreshMore-content">
      <slot>无内容</slot>
    </section>
    <span class="more">{{moreText.text}}</span>
  </section>
</template>

<script>

export default {
  name: 'refreshMore',
  props:{
    ajaxParam:{
      type:Object,
      default(){
        return {
          url:"",
          pageNum:1
        };
      }
    }
  },
  data(){
    return {
      refreshText:{
        text:"",
        init:"下拉刷新",
        release:"松开刷新",
        ing:"正在刷新"
      },
      moreText:{
        text:"",
        init:"加载更多",
        release:"松开加载",
        ing:"正在加载"
      },
      spanH:0,//span的高度;
      moveY:0,
      startY:0,//touchstart触发得到的坐标
      transition:{
        val:"none",
        none:"none",
        ani:"transform 0.2s"
      },
      symbol:"",//标记，表示独一无二的值
      ajaxSymbol:false,//false表示不请求，true表示请求新数据
    }
  },
  created(){
    let url=this.ajaxParam.url;
    let pageNum=this.ajaxParam.pageNum;
    this.$http({
      method:"get",
      url:url,
      params:{//get请求传参；params将参数添加到url之后
        pageNum:pageNum
      },
      data:{

      }
    }).then((res)=>{
      this.$store.commit("refreshMore_updateData",{
        data:res.data
      });
    },(err)=>{
      console.log("请求错误",err)
    });
  },
  methods:{
    getHeight(){//得到可视窗口的高度和实际高度
      let viewH=document.documentElement.clientHeight;//app可视高度
      let webH=document.documentElement.scrollHeight;//实际高度
      return {
        viewH,
        webH
      }
    },
    initText(){//文字初始化设置
      let viewH=this.getHeight().viewH;
      let webH=this.getHeight().webH;
      console.log(viewH,webH);
      if(viewH>=webH){
        this.refreshText.text=this.refreshText.init;
      }
      else{
        this.refreshText.text=this.refreshText.init;
        this.moreText.text=this.moreText.init;
      }

      this.spanH=this.$refs.span.clientHeight;//得到span节点的高度
    },
    scroll(e){//触屏事件不同时 触发不同行为
      var y=e.changedTouches[0].pageY;//pageY() 属性是鼠标指针的位置，相对于文档的上边缘
      var scrollY=document.documentElement.scrollTop+document.body.scrollTop;//滚动条移动距离
      if(e.type=="touchstart"){
        this.transition.val=this.transition.none;
        this.initText();
        this.startY=y;
        // console.log(this.startY,y,123);
      }
      else if(e.type=="touchmove"){
        var distance=this.startY-y;
        if(distance>=0){//手指向上滑动
          //此时要满足两个条件 才能显示加载更多 1、实际高度大于可视高度 2、已经拉到最下面
          let viewH=this.getHeight().viewH;
          let webH=this.getHeight().webH;
          if(scrollY>=webH-viewH-1){
            this.symbol="加载更多";
            this.moveY=-Math.abs(distance)/4;
            if(Math.abs(this.moveY)>this.spanH){
              this.moreText.text=this.moreText.release;
            }
          }
        }
        else{//手指向下滑动
          if(scrollY==0){//下拉刷新
            this.symbol="下拉刷新";
            this.moveY=Math.abs(distance)/4;
            if(this.moveY>this.spanH){
              this.refreshText.text=this.refreshText.release;
            }
          }
        }
      }
      else if(e.type=="touchend" || e.type=="touchcancel"){
        var pageNum;//表示第几页
        //动画
        this.transition.val=this.transition.ani;
        this.moveY=0;
        if(this.symbol=="下拉刷新"){
          pageNum=1;
        }
        else if(this.symbol=="加载更多"){
          this.ajaxParam.pageNum++;
          pageNum=this.ajaxParam.pageNum;
        }

        //判断是否需要请求
        if(this.ajaxSymbol){
          this.ajaxSymbol=false;
          let url=this.ajaxParam.url;
          if(pageNum==1){//刷新
            this.refreshText.text=this.refreshText.ing;
          }
          else{//加载更多
            this.moreText.text=this.moreText.ing;
          }

          this.$http({
            method:"get",
            url:url,
            params:{//get请求传参；params将参数添加到url之后
              pageNum:pageNum
            },
            data:{//http请求传参；http传输

            }
          }).then((res)=>{//res响应对象
            if(pageNum==1){//刷新
              this.$store.commit("refreshMore_updateData",{
                data:res.data
              });
              this.refreshText.text=this.refreshText.init;
            }
            else{//加载更多
              this.$store.commit("refreshMore_updateData",{
                data:res.data
              });
              this.moreText.text=this.moreText.init;
            }
            
          },(err)=>{//err错误对象
            console.log("请求错误",err)
          });
        }
      }
    }
  },
  mounted(){
    this.initText();
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/px2rem.scss";
  .refresh,.more{
    position: absolute;
    width: 100%;
    left: 0;
    line-height: rem(50px);
    color: #ccc;
    font-size: rem(32px);
    text-align:center;
    
  }
  .more{
    padding-top: rem(10px);
  }
  .refresh{
    top: rem(-50px);
    padding-bottom:rem(10px);
  }
</style>
