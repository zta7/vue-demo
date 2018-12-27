<template>
  <div id="Login">
      <div class="log-bg">
          <div class="log-logo">Welcome!</div>
          <div class="log-text">@background</div>
      </div>
      <div class="log-admin">
          <input type="text" placeholder="Admin" class="log-input" v-model="account">
          <input type="password" placeholder="Password" class="log-input" v-model="password">
          <a href="javascript:;" class="log-btn" @click="login">Login</a>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data: function () { 
    return { 
      account:'',
      password:'' 
    }
  },
  created: function () { 
   
    if( this.hasLogin() ) {
      this.$router.push('/products')  
    }
  },
  methods: {
    login: function(){
      if( this.account && this.password ){
        localStorage.token = Math.random().toString(16).substring(3,7)
        this.$router.push('/products')  
      }
    },
    hasLogin: function () { 
      return !!localStorage.token
    }
  },
}
</script>
<style scoped>
  #Login{position: fixed; overflow: hidden;left: 50%; margin-left: -250px; top:50%; margin-top: -350px; width: 500px; min-height: 555px; z-index: 10; right: 140px; background: #fff;-webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px; -webkit-box-shadow:  0px 3px 16px -5px #070707; box-shadow:  0px 3px 16px -5px #070707}
  .log-close{display: block; position: absolute; top:12px; right: 12px; opacity: 1;}

  .log-bg{background: url(../../assets/images/login-bg.jpg); width: 100%; height: 312px; overflow: hidden;}

  .log-logo{height: 80px; margin: 120px auto 25px; text-align: center; color: #1fcab3; font-weight: bold; font-size: 40px;}
  .log-text{color: #57d4c3; font-size: 13px; text-align: center; margin: 0 auto;}
  .log-logo,.log-text{z-index: 2}
  .close{height:16px;width:16px;background-position:-13px 0;}
  .login-email{height:17px;width:29px;background-position:-117px 0;}

  .log-btns{padding: 15px 0; margin: 0 auto;}
  .log-btn{width:402px; display: block; text-align: left; line-height: 50px;margin:0 auto 15px; height:50px; color:#fff; font-size:13px;-webkit-border-radius: 5px; background-color: #3B5999;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  position: relative;}
  .log-btn.tw{background-color: #13B4E9}
  .log-btn.email{background-color: #50E3CE}
  .log-btn:hover,.log-btn:focus{color: #fff; opacity: .8;}

  .log-admin{text-align: center; margin-top: 20px;}
  .log-admin .log-btn{background-color: #50E3CE;text-align: center;}

  .log-btn .text{left: 95px; line-height: 50px; text-align: left; position: absolute;}
  .log-input{width: 370px;overflow: hidden; padding: 0 15px;font-size: 13px; border: 1px solid #EBEBEB; margin:0 auto 15px; height: 48px; line-height: 48px; -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;}
  .log-input.warn{border: 1px solid #f88787}
</style>

