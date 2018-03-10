import Vue from 'vue'
import ToDoApp from './ToDoApp.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ToDoApp)
}).$mount('#ToDoApp')
