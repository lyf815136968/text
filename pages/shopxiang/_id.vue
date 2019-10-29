<template>
  <div class="shopxiang">
    <!-- 商品详情{{this.$route.params.id}} -->
    <el-carousel height="270px" :autoplay="true" :interval="5000">
      <el-carousel-item v-for="(item, index) in list.imgArr_nav" :key="index">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="price">
      <span class="s1">￥{{list.price}}</span>
      <span class="s2">￥{{list.origin_price}}</span>
    </div>
    <div class="pin">
      <span class="s1">
        拼店价
        <i>￥{{list.pin_price}}</i>
      </span>
      <span class="s2">加入拼店</span>
    </div>
    <mt-button type="danger" @click="changePop">购物车</mt-button>
    <mt-popup v-model="popupVisible" position="bottom">
     <div class="che">
       <span class="left">购买数量</span>
       <div class="right">
         <button v-if="list.count>0">-</button>
         <span v-if="list.count>0">{{list.count}}</span>
         <button>+</button>
       </div>
     </div>
     <mt-button type="danger" class="queren" @click="popupVisible=false">确认</mt-button>
    </mt-popup>
    <div class="name">{{list.name}}</div>
    <div class="des">{{list.descrip}}</div>
    <div class="xiang">
      <div class="title">商品详情</div>
      <ul>
        <li v-for="(item, index) in list.imgArr_list" :key="index">
          <img :src="item" alt />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Button } from 'mint-ui'
import Vue from 'vue'
import { Popup } from 'mint-ui'

Vue.component(Popup.name, Popup)

Vue.component(Button.name, Button)
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      popupVisible:false
    }
  },
  mounted() {
    this.changeID(this.$route.params.id)
    this.get()
  },
  methods: {
    ...mapMutations(['changeID']),
    ...mapActions(['get']),
    changePop() {
      this.popupVisible = true
    }
  },
  computed: {
    ...mapState(['shopCar', 'list']),
    ...mapGetters(['addCount'])
  }
}
</script>

<style scoped>
.shopxiang img {
  width: 100%;
  /* height: 350px; */
}
.shopxiang .price {
  padding: 10px;
}
.shopxiang .price .s1 {
  color: red;
  font-size: 24px;
}
.shopxiang .price .s2 {
  color: #666;
  text-decoration: line-through;
}
.pin {
  width: 94%;
  margin: 5px auto;
  background: #ddd;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  line-height: 45px;
}
.pin i {
  color: red;
  font-size: 16px;
  margin-left: 10px;
}
.pin .s2 {
  color: red;
}
.name {
  padding: 10px;
  line-height: 30px;
  font-size: 20px;
}
.des {
  padding-left: 10px;
}
.xiang {
  background: #eee;
  margin-top: 10px;
}
.xiang .title {
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.car {
  width: 30%;
  height: 50px;
  line-height: 50px;
  background: #fd3b6f;
  margin: 5px auto;
  text-align: center;
  border-radius: 25px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
.che{
  width: 400px;
  height: 100px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
}
.che .left{
  font-size: 18px;
  font-weight: bold;
}
.queren{
  width: 100%;
}
</style>