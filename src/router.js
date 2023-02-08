import { createRouter, createWebHashHistory } from 'vue-router'

import CollectionView from './views/CollectionView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import DiyView from './views/DiyView.vue'
import UserPosterView from './views/UserPosterView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: CollectionView,
      path: '/collection'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: DiyView,
      path: '/diy'
    },
    {
      component: HomeView,
      path: '/'
    },
    {
      component : UserPosterView,
      name : 'user',
      path: '/user/:inputFromUser'
    }
  ]
})
