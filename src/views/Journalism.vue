<template>
  <div class="journalism">
    <Header :showText='showText'></Header>
    <div class="contextes">
      <Banner></Banner>
      <Companynews></Companynews>
      <Swipernews></Swipernews>
      <Last></Last>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Banner from "../components/Journalism/Banner";
import Companynews from "../components/Journalism/Companynews.vue";
import Swipernews from "../components/Journalism/Swipernews.vue";
import Last from "../components/Journalism/Last";
export default {
  name: "journalism",
  components: {
    Header,
    Banner,
    Companynews,
    Swipernews,
    Last
  },
  data() {
    return {
      showText: true
    };
  }
};
</script>
<style scoped>
.contextes {
  width: 100%;
  margin-top: 100px;
  height: 2000px;
  /* background: paleturquoise; */
}
</style>

