<template>
  <div class="building">
    <Header :showText='showText'></Header>
      网页建站
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'building',
  components: {
    Header,
  },
  data() {
    return {
      showText:true,
    }
  },
}
</script>
<style scoped>

</style>
