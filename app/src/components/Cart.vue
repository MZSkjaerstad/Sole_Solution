<template>
   <menu class="cart">
      <div class="cart__top">
         <div class="cart__header">your shopping cart</div>

         <button class="cart__button" @click="toggleMenu">
            <img class="cart__icon" src="/assets/vector/return.svg" alt="Return back to page button">
         </button>
      </div>
   </menu>
</template>

<script>
   export default {
      props: {
         toggleMenu: Function
      }
   }
</script>

<style>
   .cart {
      position: absolute;
      top: 0;
      right: 0;
      width: 35%;
      height: 100vh;
      background: var(--tetriary-color);
      z-index: 20;
   }

   .cart__top {
      height: 90px;
      padding: var(--spacing-small);
      display: flex;
      justify-content: space-between;
   }

   .cart__button {
      background: none;
      border: none;
      cursor: pointer;
   }

   .cart__icon {
      width: auto;
      height: 100%;
   }

   .cart__icon:hover {
      animation-name: highlightedColour;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
   }
</style>
