import Vue from 'vue'
import ToDoApp from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ToDoApp)
}).$mount('#ToDoApp')
