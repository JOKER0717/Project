<template>
  <div class="container"
       ref="scrllele"
       @scroll="soll">
    <Header :showHeader='showHeader'></Header>
    <div class="const">
      <Swiper></Swiper>
    </div>

  </div>
</template>

<script>
import Header from "../components/Header";
import Swiper from "../components/Home/Swiper";
export default {
  name: "home",
  components: {
    Swiper,
    Header
  },
  data() {
    return {
      // showText:true,
      showHeader: true
    };
  },

  methods: {
    // 滚动加载事假
    soll() {
      let { scrollTop, scrollHeight, clientHeight } = this.$refs.scrllele;
      console.log(scrollTop, scrollHeight, clientHeight);
      if (scrollTop > 20) {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
    }
  }
};
</script>
<style lang="less">
.const {
  height: 2000px;
  widows: 100%;
  background: pink;
}
</style>