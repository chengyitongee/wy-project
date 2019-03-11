import Cart from '../pages/Cart/Cart.vue'
import Sort from '../pages/Sort/Sort.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import person from '../pages/person/person.vue'
import See from '../pages/See/See.vue'

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/person',
    component: person,
  },
  {
    path: '/sort',
    component: Sort,
  },
  {
    path: '/see',
    component: See,
  },
  {
    path: '/cart',
    component: Cart,
  },
]
