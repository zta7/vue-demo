<template>
  <div id="Batch">
    <span :class="{ active: hasSelectedId }" class="batch" @click="showChoose($event)">Batch Actions
      <i class="iconfont icon-down"></i>
    </span>
    <div v-show="hasSelectedId && isShow">
      <div class="triangle"></div>
      <div class="choose">
        <span>Delete Selected</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Batch",
  props: {
    hasSelectedId: Boolean
  },
  data: function() {
    return {
      isShow: false
    };
  },
  methods: {
    showChoose: function(e) {
      this.hasSelectedId ? this.isShow = !this.isShow : undefined
    }
  }
};
</script>
<style scoped>
#Batch {
  display: inline-block;
}
.batch {
  color: #afb2b4;
  font-weight: 700;
  padding: 5px 12px;
  display: inline-block;
  border: 1px #e2e2e2 solid;
  border-radius: 15px;
  margin-bottom: 5px;
  cursor: pointer;
}
.choose {
  padding: 10px 15px;
  display: inline-block;
  border: 5px #464a4e solid;
  font-size: 12px;
}
.triangle {
  width: 0;
  height: 0;
  border-width: 0 6px 6px;
  border-style: solid;
  border-color: transparent transparent #333; /*灰 透明 透明 */
  margin: 0px auto;
}
.choose:hover {
  background-color: #71a9d6;
  color: white;
  cursor: pointer;
}
.active {
  color: #5e6469;
}
</style>

