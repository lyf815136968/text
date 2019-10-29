<template>
  <div class="tui">
    <div class="banner">
      <mt-swipe :auto="4000" :stopPropagation=true>
        <mt-swipe-item>
          <img src="../static/1.gif" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../static/2.gif" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../static/8.gif" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="img1">
      <img src="../static/8.gif" alt />
    </div>
    <div class="xianshi">
      <p class="buy">限时购</p>
      <section id="BSwrap" ref="wrapper">
        <!-- 滑动模块 -->
        <ul id="ul">
          <li
            v-for="(item, index) in timeList"
            :key="index"
            class="li"
            @click="changeInd(index)"
            :id="'list'+index"
            :class="{BSactive:n==index}"
          >
            <span class="s1">{{item}}</span>
            <span class="s2">每日精选</span>
          </li>
        </ul>
      </section>
    </div>
    <TuiList></TuiList>
  </div>
</template>

<script>
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import { Swipe, SwipeItem } from 'mint-ui'

import BScroll from 'better-scroll'

import TuiList from "./TuiList"

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  components:{
    TuiList
  },
  methods: {
    changeInd(ind) {
      // console.log(ind)
      if (ind > 3) {
        this.n = ind
        this.bs.scrollToElement('#list' + (ind - 2), 1000)
      } else {
        this.n = ind
        this.bs.scrollToElement('#list' + (ind - 1), 1000)
      }
    }
  },
  data() {
    return {
      timeList: [
        '8:00',
        '10:00',
        '12:00',
        '14:00',
        '16:00',
        '18:00',
        '20:00',
        '22:00'
      ],
      n: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.bs = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        tap: true,
        click: true,
        stopPropagation: true
      })
    })
  }
}
</script>

<style >
.tui {
  width: 100%;
  height: 100%;
}
.banner {
  width: 95%;
  height: 150px;
  margin: 0 auto;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
.text {
  width: 95%;
  height: 30px;
  margin: 10px auto;
}
.xianshi {
  width: 100%;
  height: 50px;
  margin: 10px auto;
  /* background: gray; */
}
.buy{
  text-indent: 20px;
  line-height: 40px;
}
.xianshi #BSwrap {
  width: 95%;
  height: 100%;
  overflow: hidden;
  margin: 5px auto;
}
.xianshi #BSwrap #ul {
  width: 160%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* background: red; */
}
.xianshi #BSwrap #ul li {
  list-style: none;
  height: 100%;
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.xianshi #BSwrap #ul li .s1 {
  font-size: 20px;
  font-weight: bold;
}
.xianshi #BSwrap #ul li .s2 {
  font-size: 16px;
}
.BSactive {
  background: #fc0153;
}
.img1{
  width: 95%;
  height: 150px;
  margin: 10px auto;
}
.img1 img{
  width: 100%;
  height: 100%;
  display: block;
}
</style>