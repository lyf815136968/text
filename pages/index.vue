<template>
  <div class="index">
    <div class="header">
      <span>
        <img src="../static/logo.png" alt />
      </span>
      <nuxt-link to="/search" class="search">
        <el-input placeholder="请输入关键词搜索" class="ipt"></el-input>
      </nuxt-link>
      <div class="info">
        <img src="../static/info.png" alt />
      </div>
    </div>
    <div class="swiper">
      <Swiper></Swiper>
    </div>
    <!--以下看需要添加-->
  </div>
</template>

<script>
import Swiper from '../components/Swiper'
export default {
  components: {
    Swiper
  },
  data() {
    return {
      arr:[]
    }
  },
}
</script>

<style >
.index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;
  width: 100%;
  height: 59px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding-top: 20px; */
}
.search {
  width: 80%;
  height: 35px;
}

.el-input__inner {
  border-radius: 20px;
  height: 34px;
}
.ipt {
  display: block;
  height: 30px;
}
.swiper {
  width: 100%;
  flex: 1;
  /* background: red; */
  /* margin-top: 10px; */
  overflow: hidden;
}
</style>
