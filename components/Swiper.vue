<template>
  <div>
    <ul class="nav" id="nav">
      <li
        v-for="(item, index) in navList"
        :key="index"
        :class="{active:index==n}"
        @click="changeN(index)"
      >{{item}}</li>
    </ul>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <Tui></Tui>
        </div>
        <div class="swiper-slide" v-for="(item, index) in navList1" :key="index"><Clothes :list="item"></Clothes></div>
        <!-- <div class="swiper-slide">3</div>
        <div class="swiper-slide">4</div>
        <div class="swiper-slide">5</div>
        <div class="swiper-slide">6</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import Swiper from 'swiper'

import BScroll from 'better-scroll'

import Tui from './Tui'

// import $ from "jquery"

import Clothes from "./Clothes"
import { async } from 'q'
export default {
  components: {
    Tui,
    Clothes
  },

  data() {
    return {
      navList: ['推荐','服饰', '美妆', '生鲜', '食品', '母婴'],
      navList1: ['服饰', '美妆', '生鲜', '食品', '母婴'],
      n: 0,

    }
  },
  methods: {
    changeN(ind) {
      this.n = ind
      this.swiper.slideTo(ind, 1500, false)
    }
  },
  mounted() {
    var _this = this
    
    this.swiper = new Swiper('.swiper-container', {
      on: {
        slideChange: async function() {
          _this.n = this.activeIndex
          // _this.ind=_this.navList[this.activeIndex]
          // console.log(_this.navList[this.activeIndex])
          // await $.ajax({
          //   url:"http://localhost:8000/shopList",
          //   type:"post",
          //   data:{
          //     type:_this.navList[this.activeIndex]
          //   }
          // }).then(res=>{
          //   this.result=res
          //   console.log(res)
          // })
        }
      }
    })
  }
}
</script>

<style >
.swiper-container {
  margin-top: 10px;
  /* height: 100%; */
  /* overflow: auto; */
}

.swiper-slide {
  width: 100%;
  height: 1365px;
}
/* #banner .siwper-slide {
  width: 100%;
  padding-top: 10px;
  border: 1px solid red;

  height: 4370px;
} */
.nav {
  display: flex;
  justify-content: space-around;
  /* position: fixed; */
  /* z-index: 990; */
  background: #fff;
  /* top: 57px; */
  /* left: 0; */
  width: 100%;
  height: 30px;
  /* overflow: hidden; */
  margin-top: 57px;
}
.nav li {
  list-style: none;
  font-size: 14px;
  /* flex-shrink: 0; */
}
.active {
  font-size: 15px;
  color: #fd3b6f;
  border-bottom: 2px solid #fd3b6f;
}
</style>