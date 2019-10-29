<template>
  <div class="big-box">
    <div class="section">
      <nuxt />
    </div>
    <div class="footer">
      <Foot></Foot>
    </div>
  </div>
</template>
<script>
import Foot from '../components/Foot'
export default {
  components: {
    Foot
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-style: normal;
}
html,body{
  width: 100%;
  height: 100%;
}
.big-box{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.section{
  flex: 1;
  /* overflow: auto; */
}
.footer{
  height: 55px;
  width: 100%;
  position: fixed;
  background: #fff;
  z-index: 111;
  bottom: 0;
  left: 0;
}
#__nuxt,#__layout{
  width: 100%;
  height: 100%;
}
/* .nuxt-link-active {
  background: #fd3b6f;
} */
</style>
