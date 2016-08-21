<template>
  <div class="time">
    <header>倒计时</header>
    <canvas id="timeBox"></canvas>
    <button id="startBtn" type="button" @click="toDraw(sumTime,true)">start</button>
  </div>
</template>
<style lang="scss">
  .time{
    position: relative;
    width: 100%;
    height:75vh;
    button{
      color: #DDDDDD;
      position: absolute;
      bottom:5vh;
      left:5vh;
      background-color: rgb(0, 100, 0);
      padding:10px 20px;
      border-radius: 5px;
      &:hover{
        color: #FFFFFF;
      }
    }
  }
</style>
<script>
  export default{
    data:function () {
      return {
        width:0,
        height:0,
        sumTime:60,
        timeBox: null
      }
    },
    computed:{
      pos:function () {
        return {x:this.width / 2,y:this.height / 2}
      },
      r:function () {
        return this.width / 6
      },
      ctx:function () {
        return this.timeBox.getContext('2d')
      }
    },
    methods:{
//      画个圆
      drawArc(x,y,r,sAngle,eAngle,fillColor){
        this.ctx.beginPath();
        this.ctx.arc(x,y,r,sAngle,eAngle);
        this.ctx.closePath();
        this.ctx.fillStyle = fillColor;
        this.ctx.fill();
      },
      toDraw(time,key=false){
//        画背景圆
        this.drawArc(this.pos.x,this.pos.y,this.r,0,2*Math.PI,'#d13c36');
//        画进度环
        this.ctx.beginPath();
        this.ctx.moveTo(this.pos.x,this.pos.y);
        this.ctx.arc(this.pos.x,this.pos.y,this.r,Math.PI*1.5,Math.PI*(1.5+2*(600-time*10)/600),false);
        this.ctx.closePath();
        this.ctx.fillStyle = '#fff';
        this.ctx.fill();
//        画内填充圆
        this.drawArc(this.pos.x,this.pos.y,this.r-20,0,2*Math.PI,'#e45534');
//        填充文字
        this.ctx.font = "bold 40pt Microsoft YaHei";
        this.ctx.fillStyle = '#fff';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(`${time}`, this.pos.x, this.pos.y);

        time = (time-0.1).toFixed(1);
        if (time < 0 || !key) return;
        setTimeout(()=>{
          this.toDraw(time,key);
        },100);
      }
    },
    ready(){
      /**
       * 获取canvas大小
       */
      let getTimeBoxSize = ()=>{
        let parentHeight = parseInt(window.getComputedStyle(this.$el,null).getPropertyValue('height')),
          headerHeight = parseInt(window.getComputedStyle(this.$el.querySelector('header'),null).getPropertyValue('height'));
        this.width = parseInt(window.getComputedStyle(this.$el,null).getPropertyValue('width'));
        this.height = parentHeight - headerHeight;
      }
      getTimeBoxSize();

      this.timeBox = this.$el.querySelector('#timeBox');

//        设置size
      this.timeBox.width = this.width;
      this.timeBox.height = this.height;
      this.toDraw(this.sumTime);
    }
  }
</script>
