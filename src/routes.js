import Home from './components/pages/home.vue';
import contents from './contents';

//basic routes
let routes = [
  {
    label: 'Home',
    path: '/',
    name: 'home',
    component: Home,
    meta: { pageTitle: 'Home' }
  }
];

export default routes;
