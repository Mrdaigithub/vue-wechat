<template>
  <!--设置界面-->
  <div id="setBgBox" style="display:none">
    <h3 class="text-center">微信大屏幕风格选择<a id="setCloseBtn" href="javascript:;">+</a></h3>
    <ul class="text-center">
      <li><img src="http://o7qephszd.bkt.clouddn.com/wechatBg1.jpg" alt="background" data-flag="bg1Url"><p>bg1</p></li>
      <li><img src="http://o7qephszd.bkt.clouddn.com/wechatBg2.jpg" alt="background" data-flag="bg2Url"><p>bg2</p></li>
      <li><img src="http://o7qephszd.bkt.clouddn.com/wechatBg3.jpg" alt="background" data-flag="bg3Url"><p>bg3</p></li>
      <li><img src="http://o7qephszd.bkt.clouddn.com/wechatBg4.jpg" alt="background" data-flag="bg4Url"><p>bg4</p></li>
      <li><img src="http://o7qephszd.bkt.clouddn.com/wechatBg5.jpg" alt="background" data-flag="bg5Url"><p>bg5</p></li>
      <li><img src="http://o7qephszd.bkt.clouddn.com/wechatBg6.jpg" alt="background" data-flag="bg6Url"><p>bg6</p></li>
      <li><img src="http://o7qephszd.bkt.clouddn.com/wechatBg7.jpg" alt="background" data-flag="bg7Url"><p>bg7</p></li>
      <li><img src="http://o7qephszd.bkt.clouddn.com/wechatBg8.jpg" alt="background" data-flag="bg8Url"><p>bg8</p></li>
      <li><img src="http://o7qephszd.bkt.clouddn.com/wechatBg9.jpg" alt="background" data-flag="bg9Url"><p>bg9</p></li>
      <li><img src="http://o7qephszd.bkt.clouddn.com/wechatBg10.jpg" alt="background" data-flag="bg10Url"><p>bg10</p></li>
      <li><img src="http://o7qephszd.bkt.clouddn.com/wechatBg11.jpg" alt="background" data-flag="bg11Url"><p>bg10</p></li>
      <li><img src="http://o7qephszd.bkt.clouddn.com/wechatBg12.jpg" alt="background" data-flag="bg12Url"><p>bg10</p></li>
    </ul>
  </div>
</template>
<style lang="scss">
  #setBgBox{
    transition: 0.5s;
    position: fixed;
    left:50%;
    top:15vh;
    margin-left: -35vw;
    width: 70vw;
    overflow: hidden;
    background-color: #FFFFFF;
    h3{
      color: #747474;
      line-height: (50rem/16);
      font-size: (20rem/16);
      font-weight: 500;
      #setCloseBtn{
        color: #CCCCCC;
        font-size: (35rem/16);
        position: absolute;
        right:(10rem/16);
        display: inline-block;
        transform: rotate(45deg);
      }
    }
    ul{
      position: static;
      width: 100%;
      height:65vh;
      overflow-y: scroll;
      color: #191919;
      li{
        display: inline-block;
        vertical-align: top;
        width: 30%;
        margin:1%;
        img{
          cursor: pointer;
          width: 100%;
          border:4px solid #e6e6e6;
        }
        p{
          line-height: (30rem/20);
          font-size: (14rem/16);
          text-align: left;
        }
      }
    }
  }
</style>
