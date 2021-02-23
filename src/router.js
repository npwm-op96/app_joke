import Vue from 'vue';
import Router from 'vue-router';
import Listall_joke from './views/Listall_joke.vue';
import MyJoke from './views/MyJoke.vue';



Vue.use(Router);


export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Listall_joke',
      component: Listall_joke
    },
    {
        name:'MyJoke',
        path: '/MyJoke',
        component: MyJoke
      },


  ]
});
