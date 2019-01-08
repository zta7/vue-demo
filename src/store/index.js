import auth from './auth' 
import global from './global'
import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: { auth, global },
  plugins: []
})
