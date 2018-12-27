<template>
  <div id="List">
    <Batch :has-selected-id="selectedId.length > 0"/>
    <table cellspacing="0">
      <thead>
        <th>
          <input type="checkbox" @click="toggle" :checked="selectAll"/>
        </th>
        <th v-for="col in cols" :key="col" @click="colClick(col)" :class="{colSelected: col===selectedCol.colName}">      
            <i class="iconfont icon-up"   v-show="selectedCol.colName!=col || selectedCol.order!='desc'"></i>
            <i class="iconfont icon-down" v-show="selectedCol.colName!=col || selectedCol.order!='asce'"></i>
            <span>{{ col }}</span>
        </th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="obj in objs" :key="obj[keyCol]">
          <td><input type="checkbox" v-model="selectedId" :value="obj[keyCol]"/></td>
          <td v-for="(col,index) in cols" :key="index">
            {{ obj[col] }}
          </td>
          <td>
            <router-link :to="{ name: 'users', params: { id: obj[keyCol] }}">View</router-link>
            <a href="#">Edit</a>
            <a href="#">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Batch from './Batch.vue'
export default {
  name: "List",
  components: {
    Batch
  },
  props: {
    objs: Array,
    cols: Array,
    keyCol: String
  },
  data: function () { 
    return {
      
      selectedCol: { "colName":"","order":"asce" },
      selectedId: [],
      selectAll: false,

    }
  },
  mounted: function () { 
    let order = (this.$route.query.order || "").split('_')
    if(order.length === 2) {
      this.selectedCol.colName = order[0]
      this.selectedCol.order   = order[1]
    }

  },

  methods: { 
    toggle: function () { 
      if (!this.selectAll) { 
        this.selectAll = true;
        this.selectedId = [];
        this.objs.forEach(e => {
          this.selectedId.push(e.id)
        });
     }
      else{ 
        this.selectAll = false;
        this.selectedId = [];
      }         
    },
    colClick: function (colName) {
        if(this.selectedCol.colName != colName){
          this.push(colName+'_'+"asce")
        }else{
          if(this.selectedCol.order === "asce"){
            this.push(colName+'_'+"desc")
          }else{
            this.push(colName+'_'+"asce")
          }
        }        
    },
    push: function (order) { 
　　 　this.$router.push({ path: this.$route.path,query: { 
        page:  this.$route.query.page,
        order: order 
      }})
    }
  },
  watch: {
    '$route.query.order': function () { 
        let order = (this.$route.query.order || "").split('_')
        if(order.length === 2) {
          this.selectedCol.colName = order[0]
          this.selectedCol.order   = order[1]
        }else {
          this.selectedCol.colName = []
          this.selectedCol.order   = "asce"
        }
        console.log('ajax->'+this.$route.fullPath )
        this.$http
          .get(this.$route.fullPath)
          .then(response => {
            this.$emit('transferObjs',response)
        })
     }
  }
}
</script> 
<style scoped>
  #List {margin:15px 35px;}
  table tr:nth-child(odd) { background:#F4F4F4;}
  table th,table td { padding: 12px;text-align: left; }
  table th { background-color: #E5E6E7; cursor: pointer; }
  table th > i:nth-child(1) { position: absolute; margin-top: -1px;}
  table th > i:nth-child(2) { position: absolute; margin-top: 5px;}
  table th > span { margin-left:20px; }
  tbody a {padding-right: 15px;color: #72679A;}

  .colSelected {
    background-color: #DCDDDD;
  }
  .batchAction {
    color: #5E6469;
    border-color: #5E6469;
  }
</style>

