import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/components/HomeView';
import TrailerView from '@/components/TrailerView';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/trailer',
      name: 'trailer',
      component: TrailerView,
      props: true
    }
  ]
});
