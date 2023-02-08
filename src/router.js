import { createRouter, createWebHashHistory } from 'vue-router'

import CollectionView from './views/CollectionView.vue'
import HomeView from './views/HomeView.vue'
import DiyView from './views/DiyView.vue'
import UserPosterView from './views/UserPosterView.vue'
import CrazyCornerView from './views/CrazyCornerView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: CollectionView,
      path: '/collection'
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
    },
    {
      component : CrazyCornerView,
      path : '/crazyCorner'
    }

  ]
})
