<template>
   <section class="checklist">
      <h1 class="checkout__header">checkout</h1>

      <div class="checkout__item-container">
         <p class="checkout__empty" v-if="cartData.length === 0">Your cart is empty..</p>

         <div class="checkout__item" v-for="(sneaker, index) in cartData" v-else >
            <figure class="checkout__figure">
               <img class="checkout__item-image" :src="sneaker.colour.thumbnail" alt="">
            </figure>

            <div class="checkout__item-info">
               <p class="checkout__item-counter"> {{ index + 1 }}. </p>
               <div class="checkout__item-details">
                  <h3 class="checkout__item-name"> {{ sneaker.name }} </h3>

                  <p> {{ sneaker.colour.colourName }} </p>

                  <p> Size {{ sneaker.size.EU }} </p>

                  <p> {{ sneaker.price }},- </p>
               </div>

               <button class="checkout__remove-button" @click="removeItem(index)">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3.06161 1.32896C2.47635 0.742651 1.5266 0.741801 0.940289 1.32706C0.353979 1.91233 0.353129 2.86207 0.938392 3.44838L3.06161 1.32896ZM10.9384 13.4663C11.5237 14.0526 12.4734 14.0534 13.0597 13.4682C13.646 12.8829 13.6469 11.9332 13.0616 11.3469L10.9384 13.4663ZM0.938392 3.44838L10.9384 13.4663L13.0616 11.3469L3.06161 1.32896L0.938392 3.44838Z" fill="#444444"/>
                     <path d="M0.938392 11.347C0.353129 11.9333 0.353979 12.8831 0.940289 13.4683C1.5266 14.0536 2.47635 14.0528 3.06161 13.4664L0.938392 11.347ZM13.0616 3.44854C13.6469 2.86223 13.646 1.91249 13.0597 1.32723C12.4734 0.741963 11.5237 0.742813 10.9384 1.32912L13.0616 3.44854ZM3.06161 13.4664L13.0616 3.44854L10.9384 1.32912L0.938392 11.347L3.06161 13.4664Z" fill="#444444"/>
                  </svg>
               </button>
            </div>
         </div>
      </div>

      <div class="checkout__data">
            <p>Items x{{ cartData.length }}</p>

            <p>Total {{ cartPriceTotal }},-</p>
      </div>
   </section>
</template>

<script>
   export default {
      props: {
         cartData: Array,
      },

      computed: {
         cartPriceTotal() {
            return this.cartData.reduce(function(total, item) {
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
   .checklist {
      width: 55%;
      height: 82vh;
      padding: var(--spacing-medium) 0 var(--spacing-medium) var(--spacing-medium);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow-x: hidden;
   }

   .checkout__header {
      padding-top: var(--spacing-medium);
      color: var(--tetriary-color);
   }

   .checkout__item-container {
      display: flex;
      overflow-x: scroll;
   }

   .checkout__empty {
      padding-left: var(--spacing-large);
   }

   .checkout__item {
      height: 40vh;
      width: 30vh;
      margin-right: var(--spacing-medium);
      font-size: var(--font-size-body-small);
   }

   .checkout__item-counter {
      line-height: 150%;
   }

   .checkout__figure {
      height: 50%;
      width: 30vh;
      margin-bottom: var(--spacing-padding);
   }

   .checkout__item-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   .checkout__item-info {
      display: flex;
      align-items: flex-start;
   }

   .checkout__item-details {
      padding-left: var(--spacing-padding);
   }

   .checkout__remove-button {
      right: 0%;
      background: none;
      border: none;
      padding: var(--spacing-padding);
      transform: translate(1.2rem, -0.15rem);
      margin-right: var(--spacing-small);
      border-radius: 8px 0 8px 0;
   }

   .checkout__remove-button:hover {
      animation-name: highlightedColour;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }
</style>