<template>
<div>
  <div class="tit">
    <div class="search">
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索"
        
        @click="search"
      ></mt-search>
    </div>
    <span class="el-icon-arrow-right back" @click="back"></span>
  </div>
  <div class="result">
    <ul v-if=searchRes>
      <li v-for="(item, index) in searchRes" :key="index">{{item[0]}}</li>
    </ul>
  </div>
</div>
  
</template>

<script>
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Search } from 'mint-ui'
import Vue from 'vue'
import $ from "jquery"

Vue.component(Search.name, Search)
export default {
  data() {
    return {
      value: '',
      searchRes:[]
    }
  },
  methods: {
    back() {
      location = '/'
    },
    search() {
      console.log(111)
    }
  },
  watch: {
      value(){
         setTimeout(()=>{
             this.$.ajax({
               url:"http://suggest.taobao.com/sug?code=utf-8&q="+this.value+"&callback=cb",
               dataType:"jsonp"
             }).then(res=>{
              //  console.log(res.result)
               this.searchRes=res.result
             })
         },2000)
      }
  },
  mounted(){
    console.log(this.$store)
  }
}
</script>

<style >
.tit {
  display: flex;
}
.back {
  /* float: right; */
  width: 15%;
  display: block;
  font-size: 35px;
  height: 66px;
  line-height: 66px;
  text-align: center;
  background: #fd3b6f;
  color: #fff;
}
.tit .search {
  flex: 1;
  /* float: left; */
  /* width: 85%; */
  height: 66px;
}
.mint-search{
    height: 100%;
}
.mint-searchbar-inner {
  height: 50px;
  font-size: 25px;
}
.mint-searchbar-core {
  font-size: 20px;
}
.result{
  padding:10px;
}
.result li{
  margin-bottom:10px;
  font-size:18px;
  cursor: pointer;
}
</style>