<template>
  <div @click="proxy($event)">
      display {{ this.$route.path.replace("/","") }}  {{ selected*defaultNums-defaultNums+1 }} ~ {{ defaultNums*selected-(defaultNums-nums) }} of {{ bars }} in total 
      <input type="button" value="<<" @click="prev"> 
      <input type="button" v-for="i in btnNum" :key="i" @click="click(startNum +(i-1))" :value="startNum +(i-1)" :class="{ active: selected === startNum+(i-1) }"/>
      <input type="button" value=">>" @click="next"> 
  </div>
</template>
<script>
export default {
  name: 'pageBar',
  props: {
    defaultNums: Number,
    nums: Number,
    bars: Number,    
  },
  data: function () { 
    return {
      selected: parseInt(this.$route.query.page) || 1, 
      btnMaxNum: Math.ceil(this.bars/this.defaultNums),
      btnNum: Number,
      startNum: Number
    }
  },
  mounted: function () { 
    this.btnNum = this.btnMaxNum < 5 ? this.btnMaxNum : 5
    this.startNum = (this.btnMaxNum - this.selected) >= 5 ? this.selected : this.selected - (this.btnNum - (this.btnMaxNum-this.selected+1))
  },
  methods: {
    proxy: function (e) { 
      // console.log(e.target.style.visibility='hidden')
    },

    click:function (selected) { 
      if(selected===this.selected) return
      this.push(selected)
    },
    prev: function () { 
      if(this.selected === 1) return
      this.push(this.selected - 1)
    },
    next: function () { 
      if(this.selected === this.btnMaxNum) return
      this.push(this.selected + 1)
    },
    push: function(page) {
      this.$router.push({path:this.$route.path,query:{
        page : page,
        order: this.$route.query.order
    }})},
  },
  watch: {
    selected: function() {
      this.startNum = (this.btnMaxNum - this.selected) >= 5 ? this.selected : this.selected - (this.btnNum - (this.btnMaxNum-this.selected+1))
    },
    '$route.query.page': function () { 
        this.selected = parseInt(this.$route.query.page)
        console.log('ajax->'+this.$route.fullPath)
        this.$http
          .get(this.$route.fullPath)
          .then(response => (
              this.$emit('transferObjs',response)
      ))
     }
  }
}
</script>
<style scoped>
  div {
    margin-left: 35px;
    display: inline-block
  }
  input[type="button"]{
    width: 25px;
    height: 25px;
  }
  .active {
    background-color: red;
  }
</style>



