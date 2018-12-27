<template>
  <div>
    <ul>
      <li class="first"><a href="#">{{ title }}</a></li>
      <router-link v-for="tableName in tableNames" 
          :key="tableName" :to="{ path: '/'+tableName, query: { page: '1' }}" tag="li">{{ tableName }}</router-link>
    </ul>
    <div class="show">
      {{ selected | capitalize }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableBar',
  data: function() { 
    return { 
      title: 'background',
      tableNames: ['products','users'],
      selected: this.$route.path.replace("/",'')
  }},
  methods: {
    hover: function (tableName){
      this.hovered = tableName
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
}
</script>

<style scoped>
  ul  { background-color: #5F666A; padding: 10px 25px;}
  ul > li   { list-style: none;display: inline-block;padding: 5px 15px;border: 1px #5F666A solid;color: #CDBFA5;cursor: pointer;}
  ul > li > a { text-decoration: none; color: inherit;}
  ul > li:not(.first):hover{ color: white; border-radius: 15px;background-color: #7B8389; }

  .show { background-color: #E6E7E8; color: #5E6469;padding: 10px 40px;font-size: 40px;font-weight: 900}

  li.router-link-active {
    background-color: #7B8389 ;
    border-radius: 15px;
    color: white
  }
</style>
