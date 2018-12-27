<template>
  <div id="app" @click="click($event)">
    <router-view></router-view>
  </div>
</template>

<script>
import   UserList      from    './components/UserList.vue'
import   ProductList   from    './components/ProductList.vue'

export default {
  name: 'app',
  components: {
    UserList,
    ProductList
  },
  methods: {
    click : function(e){
      // console.log(e.target.classList)
      if( this.$store.state.flag === true){
        this.$store.commit('toggle')
      }
    }
  },
}
</script>

<style>
@import url('//at.alicdn.com/t/font_970540_pxy5569rr9f.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
}
* {
  margin: 0;padding: 0;
}
</style>


