<template>
   <menu class="cart">
      <div class="cart__top">
         <div class="cart__header"><h2>your shopping cart</h2></div>

         <button class="cart__button" @click="toggleMenu">
            <img class="cart__icon" src="/assets/vector/return.svg" alt="Return back to page button">
         </button>
      </div>

      <div class="cart__display">
         <div class="cart__empty" v-if="cart.length === 0"> Your cart is empty.. </div>

         <div class="cart__item" v-for="(sneaker, index) in this.cart" v-else>
            <p> {{ index + 1 }}. </p>

            <img class="cart__item-image" :src="sneaker.colour.thumbnail" alt="">

            <div class="cart__item-details">
               <h3 class="cart__item-name"> {{ sneaker.name }} </h3>

               <p> {{ sneaker.colour.colourName }} </p>

               <p> Size {{ sneaker.size.EU }} </p>

               <p> {{ sneaker.price }},- </p>
            </div>

            <button class="cart__remove-button" @click="removeItem(index)">
               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.06161 1.32896C2.47635 0.742651 1.5266 0.741801 0.940289 1.32706C0.353979 1.91233 0.353129 2.86207 0.938392 3.44838L3.06161 1.32896ZM10.9384 13.4663C11.5237 14.0526 12.4734 14.0534 13.0597 13.4682C13.646 12.8829 13.6469 11.9332 13.0616 11.3469L10.9384 13.4663ZM0.938392 3.44838L10.9384 13.4663L13.0616 11.3469L3.06161 1.32896L0.938392 3.44838Z" fill="#444444"/>
                  <path d="M0.938392 11.347C0.353129 11.9333 0.353979 12.8831 0.940289 13.4683C1.5266 14.0536 2.47635 14.0528 3.06161 13.4664L0.938392 11.347ZM13.0616 3.44854C13.6469 2.86223 13.646 1.91249 13.0597 1.32723C12.4734 0.741963 11.5237 0.742813 10.9384 1.32912L13.0616 3.44854ZM3.06161 13.4664L13.0616 3.44854L10.9384 1.32912L0.938392 11.347L3.06161 13.4664Z" fill="#444444"/>
               </svg>
            </button>
         </div>
      </div>

      <div class="cart__content">
         <div class="cart__data">
            <p>Items x{{ cart.length }}</p>

            <p>Total {{ cartPriceTotal }},-</p>
         </div>

         <router-link :to="'/checkout'" class="cart__checkout">
            <h3>CHECKOUT</h3>
         </router-link>
      </div>
   </menu>
</template>

<script>
   export default {
      props: {
         toggleMenu: Function
      },

      computed: {
         cart() {
            return this.$store.getters.getCart
         },

         cartPriceTotal() {
            return this.cart.reduce(function(total, item) {
               return total + item.price;
            }, 0);
         }
      },

      methods: {
         removeItem(index) {
            this.$store.dispatch('removeItem', index)
         }
      }
   }
</script>

<style>
   /* 1.0 Cart default */

   .cart {
      position: absolute;
      top: 0;
      right: 0;
      width: 30rem;
      height: 100vh;
      background: var(--tetriary-color);
      z-index: 20;
   }

   .cart__top {
      height: 90px;
      padding: var(--spacing-small);
      display: flex;
      justify-content: space-between;
      align-content: center;
   }

   .cart__header {
      height: 100%;
      display: flex;
      align-items: center;
   }

   .cart__button {
      background: none;
      border: none;
      cursor: pointer;
   }

   .cart__icon {
      width: auto;
      height: 100%;
      border-radius: 10px 0 10px 0;
   }

   .cart__icon:hover {
      animation-name: highlightedColour;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
   }

   /* 2.0 Cart items */

   .cart__display {
      height: 72%;
      padding: 0 var(--spacing-small) 0 var(--spacing-medium);
      overflow-y: scroll;
   }

   .cart__empty {
      width: 95%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .cart__item {
      width: 100%;
      height: 6rem;
      font-size: var(--font-size-body-small);
      margin: var(--spacing-small) 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
   }

   .cart__item-image {
      height: 100%;
      margin: 0 var(--spacing-small);
   }

   .cart__item-name {
      white-space: nowrap;
   }

   .cart__remove-button {
      position: absolute;
      right: 0%;
      background: none;
      border: none;
      padding: var(--spacing-padding);
      margin-right: var(--spacing-small);
      border-radius: 8px 0 8px 0;
   }

   .cart__remove-button:hover {
      animation-name: highlightedColour;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }

   /* 3.0 Cart content */

   .cart__content {
      padding: var(--spacing-medium);
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .cart__data {
      font-weight: 600;
   }

   .cart__checkout {
      color: var(--secondary-color);
      text-decoration: none;
      background: var(--secondary-color-tr);
      padding: var(--spacing-padding);
      border-radius: 10px 0 10px 0;
   }

   .cart__checkout:hover {
      animation-name: highlightedColour;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }

   

</style>
