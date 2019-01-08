<template>
  <div>
    <table-bar v-if="ajaxed"/>
    <list :objs="objs" :cols="cols" :keyCol="keyCol" v-if="ajaxed" @transferObjs="transferObjs($event)"/>
    <bar  :defaultNums="defaultNums" :nums="nums" :bars="bars" v-if="ajaxed" @transferObjs="transferObjs($event)"/>    
  </div>
</template>
<script>
import  List from './default/List.vue'
import  Bar  from './default/Bar.vue'
import  TableBar from './default/TableBar.vue'
export default {
  name: "productList",
  created: function () { 
    this.initData()
    console.log(this.$route.matched);
    
  },
  data: function () { 
    return { 
      ajaxed: false,
      // Bar组件
      defaultNums: Number,
      nums: Number,
      bars: Number,
      // List组件
      objs: [], 
      cols: [],
      keyCol: String
    }
  },
  components: {
    List,
    Bar,
    TableBar
  },
  methods: { 
    transferObjs: function (data) { 
      this.setData(data.data)
    },
    setData: function(data){
      this.objs = data.products,
      this.cols = data.cols,
      this.keyCol = data.keyCol,
      this.defaultNums = data.defaultNums,
      this.nums = data.products.length,
      this.bars = data.bars
    },
    initData: function () { 
      let path  = this.$route.path
      let query = this.$route.query
      query = JSON.stringify(query) === "{}"? { page: '1' }:query
      this.$router.replace({ path: path,query: query })  
      let url = this.$route.fullPath
      console.log('第一次加载数据->'+url)
      this.$http
        .get(url)
        .then(response => (
              this.setData(response.data),
              this.ajaxed = true  
      ))
    }   
  },


}
</script>
<style>
</style>

