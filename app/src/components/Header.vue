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
   }

   .header__logo-button:hover {
      animation-name: highlightedColour;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
   }

   .header__cart-icon:hover {
      animation-name: highlightedColour;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
   }
</style>