import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
      return {selector: to.hash}
      //Or for Vue 3:
      //return {el: to.hash}
  } else {
      return { x: 0, y: 0 }
  }
}

const router = new VueRouter({
  routes,
  scrollBehavior,
  mode: 'history',
  base: '/',
  linkActiveClass: 'is-current',
});

export default router;
