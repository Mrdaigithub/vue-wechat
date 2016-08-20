<template>
  <div class="app">
    <mask></mask>
    <wechat-header></wechat-header>
    <wechat-main></wechat-main>
    <wechat-footer></wechat-footer>
    <setbg-box></setbg-box>
  </div>
</template>
<style lang="scss">
  /* CSS Document */

  body {
    font-family: Helvetica, "Microsoft YaHei";
    font-size: 14px;
    color: #fff;
    margin: 0 auto;
  }

  div, ul, ol, li, h1, h2, h3, h4, h5, h6, form, input, p, button, a, img {
    padding: 0;
    margin: 0;
  }
  i{
    font-style: normal;
  }
  ul, li {
    list-style: none;
  }

  * {
    border: none;
  }

  b, strong {
    font-weight: 700;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
    -webkit-touch-callout: none;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  //流式布局，宽度100%
  .container-fluid {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .container {
    width: 90%;
    margin: 0 auto;
  }

  //文本左对齐
  .text-left {
    text-align: left;
  }

  //文本友对齐
  .text-right {
    text-align: right;
  }

  //文本居中对其
  .text-center {
    text-align: center;
  }

  //文本小写
  .text-lowercase {
    text-transform: lowercase;
  }

  //文本大写
  .text-uppercase {
    text-transform: uppercase;
  }

  //块居中
  .center-block {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  //右浮动
  .pull-right {
    float: right !important;
  }

  //左浮动
  .pull-left {
    float: left !important;
  }

  //父元素修复浮动的高度塌缩
  .clearfix {
    overflow: hidden;
  }

  //图片自适应
  .img-responsive {
    display: block;
    max-width: 100%;
    height: auto;
  }

  //三角形
  .caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }

  //显示dom
  .show {
    display: block;
  }

  //隐藏dom
  .hide {
    display: none;
  }
  .app{
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    padding:(20rem/16) 0;
    cursor: default;
  }
</style>
<script>

  import store from '../store/store'

  import {addUser} from '../store/actions'
  import {getUsers} from '../store/getters'

  import Mask from './Mask.vue'
  import Header from './Header.vue'
  import Main from './Main.vue'
  import Footer from './Footer.vue'
  import SetBg from './SetBg.vue'
  import sigin from './Main/Sigin.vue'


  export default{
    store,
    vuex:{
      actions:{
        addUser
      },
      getters:{
        users: getUsers
      }
    },
    components:{
      'wechat-header': Header,
      'wechat-main': Main,
      'wechat-footer': Footer,
      'setbg-box': SetBg,
      'mask': Mask
    },
    ready(){
      this.$http.get('http://120.26.53.25/wechat/Project/api/getActiveUser/').then((res)=>{
        JSON.parse(res.data).forEach((e)=>{
          this.addUser(e);
        });
      },(res)=>{
        console.log('err');
      });
    }
  }
</script>
