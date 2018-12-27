<template>
    <div id="Batch">
      <span :class="{ active: hasSelectedId }" class="batch" @click="showChoose($event)">Batch Actions<i class="iconfont icon-down"></i></span>
      <div v-show="hasSelectedId && this.$store.state.flag">
        <div class="triangle"></div>
        <div class="choose">
          <span>Delete Selected</span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Batch',
  props:{
    hasSelectedId: Boolean
  },
  data:function () { return {
   
  }},
  methods: {
    showChoose: function(e){
      e.stopPropagation();
      if( this.hasSelectedId && this.$store.state.flag === false ){ this.$store.commit('toggle') }
      else if( this.hasSelectedId && this.$store.state.flag === true ) { this.$store.commit('toggle') }
    },
  },
}
</script>
<style scoped>
  #Batch { display: inline-block; }
  .batch { color: #AFB2B4; font-weight: 700; padding: 5px 12px;display: inline-block;
    border: 1px #E2E2E2 solid; border-radius: 15px; margin-bottom: 5px;cursor: pointer;}
  .choose{
    padding: 10px 15px;display: inline-block;
    border: 5px #464A4E solid;
    font-size: 12px;
  }
  .triangle {
    width:0;
    height:0;
    border-width:0 6px 6px;
    border-style:solid;
    border-color:transparent transparent #333;/*灰 透明 透明 */
    margin:0px auto;
  }
  .choose:hover{
    background-color: #71A9D6;
    color: white;
    cursor: pointer;
  }
  .active {
    color: #5E6469
  }
</style>

