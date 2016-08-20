<template>
  <main class="center-block">
    <router-view></router-view>
  </main>
</template>
<style lang="scss">
  main{
    width: 80vw;
    height: 75vh;
    box-sizing: border-box;
    background-color: rgba(0,0,0,0.4);
    div{
      header{
        line-height: 8vh;
        text-indent: (25rem/16);
        font-size: (20rem/16);
        span{
          display: inline-block;
          vertical-align: middle;
          font-size: (16rem/16);
          background-color: rgba(0,0,0,0.9);
          line-height: (28rem/16);
          padding: 0 (25rem/16);
          margin-left: (10rem/16);
        }
      }
    }
  }
</style>
