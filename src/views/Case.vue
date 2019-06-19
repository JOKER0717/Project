<template>
  <div class="case">
    <Header :showText='showText'></Header>
    案例
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'case',
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