<template>
  <div class="message">
    <header>消息上墙</header>
    <div class="clearfix">
      <div class="pull-left">
        <img src="http://wx.ioneup.com/Uploads/Picture/2016-03-30/56fb9aa131895.jpg" alt="">
        <p>扫描二维码<br>参与互动上墙</p>
      </div>
      <ul class="pull-right">
        <li v-for="message of messages">
          <img :src="message['headImgUrl']">
          <strong>{{message.nickname}}</strong>
          <p>{{message.content}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
  .message{
    &>div{
      .pull-left{
        width: 20vw;
        text-align: center;
        margin-top: 10vh;
        img{
          width: 60%;
        }
        p{
          color: #FFFFFF;
          font-size: (20rem/16);
          line-height: (40rem/16);
          text-shadow: 0 1px 3px #000000;
        }
      }
      .pull-right{
        overflow-y: scroll;
        height:67vh;
        width: 58vw;
        li{
          background-color: #FFFFFF;
          box-shadow: 0 0 10px rgba(0,0,0,.8);
          padding:5px;
          border-radius: 3px;
          margin:2vw;
          overflow: hidden;
          img{
            width: 20%;
            border-radius: 50%;
          }
          div{
            display: inline-block;
            vertical-align: middle;
            margin-left: 1vw;
            p{
              font-size: (30rem/16);
              color: #532d5e;
            }
            strong{
              font-size: (40rem/16);
              color: #000;
            }
          }
        }
      }
    }
  }
</style>
<script>
  import {getMessages} from '../../store/getters'
  export default{
    vuex:{
      getters:{
        messages: getMessages
      }
    }
  }
</script>
