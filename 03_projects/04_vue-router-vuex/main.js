import Vue from  'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './src/App';
import Page from './src/Page';

Vue.use(VueRouter);
Vue.use(Vuex);


const store = new Vuex.Store({
    modules:{
        module1:{
            namespaced: true,
            state: {
                count: 0
            },
            mutations: {
                increment: state => state.count++,
                decrement: (state, count) => {state.count = state.count - count;}
            },
            actions: {
                increment (context) {
                    context.commit('increment')
                },
                decrement (context, count) {
                    context.commit('decrement', count)
                }
            }
        }
    }
});

const routes = [
    {path:'/', component: App},
    {path: '/page', component: Page},
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

const app = new Vue({
    store,
    router
}).$mount('#app')
