<template>
  <div class="tuilist">
    <ul>
      <li v-for="(item, index) in shoplist" :key="index">
        <nuxt-link :to="'/shopxiang/'+item.id">
          <div class="img">
            <img :src="item.shop_img" alt />
          </div>
          <div class="content">
            <p class="name">{{item.name}}</p>
            <p class="des">{{item.description}}</p>
            <div class="money">
              <div class="zhe">{{item.discount}}折</div>
              <div class="left">
                <span class="price">{{item.current_price}}</span>
                <span class="origin">{{item.origin_price}}</span>
              </div>
              <div class="right">马上抢</div>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from '@nuxtjs/axios'
// import $ from "jquery"
export default {
  data() {
    return {
      shoplist: []
    }
  },
  mounted() {
    this.$axios({
      url: 'http://localhost:8000/miaoKill',
      method: 'get'
    }).then(res => {
      // console.log(res.data)
      this.shoplist = res.data
    })
  }
}
</script>

<style scoped>
.tuilist {
  margin-top: 60px;
  width: 100%;
}
.tuilist ul {
  width: 95%;
  margin: 0 auto;
}
.tuilist ul li {
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
}
.tuilist ul li a{
    color: #555;
    width: 100%;
    height: 100%;
}
.img {
  float: left;
  width: 35%;
  height: 100%;
}
.img img {
  width: 100%;
  height: 100%;
  display: block;
}
.content {
  float: left;
  margin-left: 10px;
}
.content .name {
  font-size: 20px;
}
.content .des {
  font-size: 12px;
  color: red;
  margin-top: 5px;
}
</style>