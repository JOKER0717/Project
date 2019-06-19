<template>
  <div class="contact">
    <Header :showText='showText'></Header>
    联系
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'contact',
  components: {
    Header
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