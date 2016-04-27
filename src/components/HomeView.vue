<template>
  <ul class="pg-home">
    <li class="home-tab">
      <img src="../assets/home/wdkb.png">
      <h2 class="desc">我的课表</h2>
    </li>
    <li class="home-tab">
      <img src="../assets/home/wyck.png">
      <h2 class="desc">我要蹭课</h2>
    </li>
    <li class="home-tab">
      <img src="../assets/home/cjyxf.png">
      <h2 class="desc">学分与成绩</h2>
    </li>
    <li class="home-tab">
      <img src="../assets/home/ksap.png">
      <h2 class="desc">考试安排</h2>
    </li>
    <li class="home-tab">
      <img src="../assets/home/tkbm.png">
      <h2 class="desc">统考报名</h2>
    </li>
    <li class="home-tab">
      <img src="../assets/home/tkcj.png">
      <h2 class="desc">统考成绩</h2>
    </li>
    <li class="home-tab">
      <img src="../assets/home/xkxt.png">
      <h2 class="desc">选课系统</h2>
    </li>
    <li class="home-tab">
      <img src="../assets/home/kjs.png">
      <h2 class="desc">空教室</h2>
    </li>
    <li class="home-tab">
      <img src="../assets/home/jssq.png">
      <h2 class="desc">教室申请</h2>
    </li>
    <li class="home-tab">
      <img src="../assets/home/jwxw.png">
      <h2 class="desc">教务新闻</h2>
    </li>
  </ul>
</template>
<style scoped>
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  .pg-home {
    display: flex;
    flex-wrap: wrap;
  }

  .home-tab {
    box-sizing: border-box;
    width: 50%;
    padding: 25px 0;
    border-bottom: 1px solid rgb(239,239,239);
    text-align: center;
  }

  .home-tab:nth-child(odd) {
    border-right: 1px solid rgb(239,239,239);
  }

  .home-tab:nth-child(even) {

  }
  .desc {
    margin: 7px 0 0 0;
    font-weight: normal;
    font-size: 12px;
  }
</style>
<script></script>
