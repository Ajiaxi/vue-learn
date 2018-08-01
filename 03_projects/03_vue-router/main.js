import Vue from  'vue';
import VueRouter from 'vue-router';
import App from './src/App';
import Page1 from './src/Page1';
import Page2 from './src/Page2';

Vue.use(VueRouter)

const routes = [
    {path:'/', component: App},
    {path: '/page1', component: Page1},
    {path: '/page2', component: Page2}
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

const app = new Vue({
    router
}).$mount('#app')
