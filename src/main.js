import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import DepartmentView from './components/DepartmentView'

Vue.config.productionTip = false

let bus = new Vue()
Object.defineProperties(Vue.prototype, {
    $bus: {
        get () {
            return bus;
        }
    }
})

Vue.use(VueRouter)

const routes = [
    {path: "/department/:id", component: DepartmentView}
]

const router = new VueRouter({routes})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

