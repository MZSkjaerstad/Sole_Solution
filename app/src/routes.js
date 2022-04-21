import Home from './views/Home.vue';
import Sneaker from './views/Sneaker.vue';

export default [
   { name: 'home', path: '/', component: Home },
   { name: 'sneaker', path: '/:sneakerParam', component: Sneaker}
]