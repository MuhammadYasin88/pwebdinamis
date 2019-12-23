/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
    {path:'/tambah-blog', component: require('./components/Blog/TambahBlog.vue').default},
    {path:'/data-blog', component: require('./components/Blog/DataBlog.vue').default},
    {path:'/user', component: require('./components/Blog/User.vue').default},
    {path:'/category', component: require('./components/Blog/Category.vue').default},
    {path:'/masuk', component: require('./components/masuk.vue').default}
]

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    router
});
