<template>
  <router-view></router-view>
  <div class="signIn">
    <header>签到墙<span>共{{users.length}}人签到</span></header>
    <ul>
      <li v-for="user of users">
        <img :src="user['headImgUrl']">
        <p>{{user.nickname}}</p>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  .signIn{
    ul{
      height:67vh;
      overflow-y: scroll;
      li{
        display: inline-block;
        margin:2vh;
        text-align: center;
        img{
          width: 92px;
          margin:0 auto;
          border-radius: 50%;
        }
        p{
          line-height: (25rem/16);
          font-size: (16rem/16);
        }
      }
    }
  }
</style>
<script>
  import {getUsers} from '../../store/getters'
  export default{
    vuex:{
      getters:{
        users: getUsers
      }
    }
  }
</script>
