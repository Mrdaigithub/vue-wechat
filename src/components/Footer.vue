<template>
  <footer>
    <p class="text-center">一加微现场演示</p>
    <ul>
      <li><a id="indexBtn" class="icon1" v-link="{path:'home'}"></a></li>
      <li><a id="SignBtn" class="icon2" v-link="{path:'sigin'}"></a></li>
      <li><a id="msgBtn" class="icon3" v-link="{path:'msg'}"></a></li>
      <li><a id="rankBtn" class="icon4" v-link="{path:'rank'}"></a></li>
      <li><a id="timeBtn" class="icon5" v-link="{path:'time'}"></a></li>
      <li><a id="giftBtn" class="icon6" v-link="{path:'gift'}"></a></li>
      <li><a id="voteBtn" class="icon7" v-link="{path:'vote'}"></a></li>
      <li><a id="gameBtn" class="icon8" v-link="{path:'game'}"></a></li>
      <li><a id="setBtn" class="icon9" v-link="{path:'setbg'}"></a></li>
    </ul>
  </footer>
</template>
<style lang="scss">
  footer {
    width: 100%;
    height:50px;
    position: absolute;
    bottom: 0;
    left: 0;
    p,ul{
      transition: 0.5s;
      position: absolute;
      left:0;
      width: 100vw;
      height:50px;
      line-height: 50px;
    }
    p{
      bottom:0;
      font-size: (24rem/16);
    }
    ul{
      bottom:-50px;
      background-color: rgba(0,0,0,0.6);
      li{
        position: relative;
        width: 53px;
        height:40px;
        display: inline-block;
        vertical-align: middle;
        margin:0 0.5vw;
        a{
          width: 100%;
          height:40px;
          display: block;
          background: url("http://o7qephszd.bkt.clouddn.com/wechatIcon.png")no-repeat 0 0;
        }

      }
      .icon1{
        background-position: -161px -197px;
      }
      .icon2{
        background-position: -109px -197px;
      }
      .icon3{
        background-position: -4px -197px;
      }
      .icon4{
        background-position: -56px -197px;
      }
      .icon5{
        background-position: -266px -197px;
      }
      .icon6{
        background-position: -214px -197px;
      }
      .icon7{
        background-position: -371px -197px;
      }
      .icon8{
        background-position: -424px -197px;
      }
      .icon9{
        background-position: -319px -197px;
      }
    }
    .weui_mask_transparent{
      background-color: rgba(0,0,0,0.8);
    }
    &:hover{
      p{
        bottom: -50px;
      }
      ul{
        bottom: 0;
      }
    }
  }
</style>
