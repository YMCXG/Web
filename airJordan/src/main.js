import Vue from 'vue'
import App from './App'

import router from '@/router'
import css from '@/assets/css/app.css'

new Vue({
  el:"#app",
  template:'<App />',
  router:router,
  components:{
    App
  }
})