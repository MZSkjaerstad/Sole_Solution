import Home from './views/Home.vue';
import Sneaker from './views/Sneaker.vue';
import Checkout from './views/Checkout.vue'

export default [
   { name: 'home', path: '/', component: Home },
   { name: 'sneaker', path: '/:sneakerParam', component: Sneaker},
   { name: 'checkout', path: '/checkout', component: Checkout}
]