<template>
  <div id="app">
    666
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
// import jsonp from 'jsonp'
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return
  },
  mounted(){
    let url = "https://www.imooc.com/activity/servicetime"
    axios.get(url)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
