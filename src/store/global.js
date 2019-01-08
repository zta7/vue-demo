const global = {
  state: {
    // 全屏点击事件
    flag: false
  },
  mutations: {
    toTrue (state) {
      state.flag = true
    },
    toFalse (state) {
      state.flag = false
    }
  },
  actions: {
    
  }
}
export default global