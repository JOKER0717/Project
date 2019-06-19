<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
ul li{
  list-style: none;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: red;
    }
  }
}
.container {
  width: 100%;
  position: fixed;
  top: 0px;
  bottom: 0;
  overflow-y: scroll;
   -webkit-overflow-scrolling: touch;
}
</style>
