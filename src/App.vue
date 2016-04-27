<template>
  <div id="app">
    <div id="tempTopRouter">
      <a v-link="{ path: '/' }">主页</a>
      <a v-link="{ path: '/rubLesson' }">蹭课</a>
      <a v-link="{ path: '/grades' }">成绩与学分</a>
    </div>

    <div id="component-container">
      <router-view></router-view>
    </div>
    <div class="copyright">
      <img src="./assets/logo.png" class="logo">
      <ul class="copyright-words">
        <li>版权申明：©2016红岩网校工作站 </li>
        <li>数据支持：重庆邮电大学教务处 </li>
      </ul>
    </div>
  </div>
</template>

<!-- normalize.css is not scoped -->
<style lang="less">
  @import '../node_modules/normalize.css';

  html {
    font-family: Source Sans Pro, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    height: 100%;
  }
  a {
    text-decoration: none;
    color: #000;
  }

  #app {
    width: 100%;
  }

  #tempTopRouter {
    background-color: rgba(0, 0, 0, 0.2);
    height: 30px;
    a {
      font-size: 12px;
    }
  }

  #component-container {
    overflow: hidden;
  }

  .copyright {
    padding: 15px 0;
    text-align: center;
    .logo {
      margin-right: 20px;
    }
  }
  .copyright-words {
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 12px;
    color: #B6B6B6;
  }

</style>

