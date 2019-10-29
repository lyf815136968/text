<template>
  <div>
    <div class="box">
      <nuxt-link to="/" exact>
        <span class="el-icon-s-home icon"></span>
        <span>首页</span>
      </nuxt-link>
      <nuxt-link to="/xiuchang">
        <span class="el-icon-camera icon"></span>
        <span>秀场</span>
      </nuxt-link>
      <nuxt-link to="/pindian">
        <span class="el-icon-discount icon"></span>
        <span>拼店</span>
      </nuxt-link>
      <nuxt-link to="/shopcar">
        <span class="el-icon-shopping-cart-2 icon"></span>
        <span>购物车</span>
      </nuxt-link>
      <nuxt-link to="/mine">
        <span class="el-icon-user icon"></span>
        <span>我的</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #888;
}
.box a {
  color: #888;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
}
.nuxt-link-active {
  background: #83c7f8;
}
.icon {
  font-size: 24px;
  color: #fd3b6f;
}
</style>