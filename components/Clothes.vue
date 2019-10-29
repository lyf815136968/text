<template>
  <div>
    <ul class="nav">
      <li v-for="(item, index) in result.nav" :key="index">
        <span>
          <img :src="item.img" alt />
        </span>
        <span class="s2">{{item.name}}</span>
      </li>
    </ul>
    <div class="paixu">
      <div class="d1">综合</div>
      <div class="d1">销量</div>
      <div class="d1">价格</div>
    </div>
    <ul class="list">
        <li v-for="(item, index) in result.list" :key="index">
            <span class="img">
                <img :src="item.clothes_img" alt="">
            </span>
            <span class="name">{{item.name}}</span>
            <span class="price">￥{{item.price}}起</span>
        </li>
    </ul>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  data() {
    return {
      result: {}
    }
  },
  props: ['list'],
  mounted() {
    // console.log(this.list)
    this.$.ajax({
      url: 'http://localhost:8000/shopList',
      type: 'post',
      data: {
        type: this.list
      }
    }).then(res => {
      this.result = res
      // console.log(this.result)
    })
  }
}
</script>

<style scoped>
.nav{
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    height: 200px;
}
.nav li{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 80px;
    margin-bottom: 15px;

}
.nav li img{
    width: 50px;
    height: 50px;
    display: block;
}
.nav .s2{
    font-size: 14px;
    margin-top: 10px;
}
.list{
    display: flex;
    width: 95%;
    margin: 10px auto;
    flex-wrap: wrap;
    justify-content: space-around;
}
.list li{
    width: 170px;
    height: 200px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    background: #ffffaa;
    box-shadow: 10px 10px 10px gray;
}
.list li img{
    width: 100px;
    height: 100px;
    display: block;
}
.list li .name{
  text-align: center;
}
.paixu{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
}
.paixu div{
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
}
</style>