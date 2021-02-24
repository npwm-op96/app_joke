import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
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
      {
        path: '/login',
        component: Login
      },
      {
        path: '/register',
        component: Register
      },


  ]
});
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});
