import { createRouter, createWebHashHistory } from 'vue-router'

import CollectionView from './views/CollectionView.vue'
import HomeView from './views/HomeView.vue'
import DiyView from './views/DiyView.vue'
import UserCardsView from './views/UserCardsView.vue'
import SavedPosterView from './views/SavedPosterView.vue'
import ProductsView from './views/ProductsView.vue'

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
      component : UserCardsView,
      name : 'user',
      path: '/user/:inputFromUser'
    },
    {
      component : SavedPosterView,
      name: 'poster',
      path : '/poster'
    },
    {
      component : ProductsView,
      path :  "/products"
    }
  ]
})
