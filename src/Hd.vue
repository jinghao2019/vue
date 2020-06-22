<template>
  <div id="hd">
      <h1>这是Manner的  hd组件<span>MannerCoffee.com</span></h1>
      <li v-for="v in goods">
          {{v.title}}
      </li>
      <hr>
      <li v-for="v in user">
          {{v.name}}
      </li>
  </div>
</template>

<script>
import Home from './org/Home'
export default {
  name: 'hd',
  components:{Home},
  computed: {
      goods(){
          return this.$store.getters.getAllNews;
      },
      user(){
          return this.$store.getters.getUser;
      }
  }
}
</script>

<style scoped="">
    h1{
        background-color: rgb(172, 172, 172);
    }
</style>
