import Vue from 'vue';
import Router from 'vue-router';
import Main from './main.vue';
// import './reset.less';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            "path":"/",
            component: resolve => require(['./index.vue'], resolve)
        },
        {
            "path":"/signup",
            component: resolve => require(['./signup/sign.vue'], resolve)
        },
        {
            "path":"/index",
            component: resolve => require(['./index/index.vue'], resolve)
        }
    ]
});

new Vue({
    router,
    render: h => h(Main)
}).$mount("#app");