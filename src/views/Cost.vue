<template>
  <div class="cost">
    <Header  :showText='showText'></Header>
     <div class="contextes">
      费用
    </div>

        
   
    
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'cost',
  components: {
    Header
  },
  data() {
    return {
       showText:true,
       showHeader:false,
    }
  },
}
</script>
<style scoped>
.contextes{
    width: 100%;
    margin-top:100px;
    height: 2000px;
    background:paleturquoise;
  }
</style>