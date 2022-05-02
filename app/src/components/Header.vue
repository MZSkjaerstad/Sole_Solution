<template>
   <header class="header">
      <router-link :to="'/'">
         <button class="header__button header__logo-button">
            <img class="header__icon" src="/assets/vector/solesolution-logo.svg" alt="Sole Solution logo, link back to frontpage.">
         </button>
      </router-link>

      <div class="header__cart">
         <button class="header__button header__cart-button" @click="toggleMenu">
            <img class="header__cart-icon" src="/assets/vector/cart.svg" alt="Cart menu button">

            <div class="header__cart-counter" v-if="cart.length > 0">{{cart.length}}</div>
         </button>

         <Cart v-if="cartToggled === true" :toggleMenu="toggleMenu"/>
      </div>
   </header>
   <div class="header-buffer"></div>
</template>

<script>
   import Cart from './Cart.vue'

   export default {
      components: {
         Cart
      },

      data() {
         return {
            cartToggled: false
         }
      },

      computed: {
         cart() {
            return this.$store.getters.getCart
         }
      },

      methods: {
         toggleMenu() {
            this.cartToggled = !this.cartToggled;
         }
      }
   }
</script>

<style>
   .header {
      position: fixed;
      width: 100%;
      height: 90px;
      background: var(--primary-color);
      display: flex;
      justify-content: space-between;
      z-index: 16;
   }

   .header-buffer {
      height: 90px;
   }

   .header__button {
      height: 100%;
      width: auto;
      padding: var(--spacing-small);;
      background: none;
      border: none;
      cursor: pointer;
   }

   .header__icon{
      height: 100%;
      width: auto;
   }

   .header__cart-button {
      position: absolute;
      width: 90px;
      height: 90px;
      padding: var(--spacing-small);
      top: 0;
      right: 0;
   }

   .header__cart-icon {
      width: auto;
      height: 100%;
      border-radius: 10px 0 10px 0;
   }

   .header__cart-counter {
      height: 0.8rem;
      width: 0.8rem;
      font-size: 0.6rem;
      font-weight: 600;
      transform: translateY(-1.1rem) translateX(2rem);
      z-index: 20;
      background: var(--primary-color);
      border-radius: 50%;
      filter: drop-shadow(0px 0px 1.4px);
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .header__logo-button:hover {
      animation-name: highlightedColour;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }

   .header__cart-icon:hover {
      animation-name: highlightedColour;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }
</style>