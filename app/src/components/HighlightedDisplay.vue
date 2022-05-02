<template>
   <section class="highlighted">
      <div class="highlighted__header">
         <h2>This weeks selection</h2>
      </div>

      <div class="highlighted__container">
         <router-link class="highlighted__thumbnail" :to="`/${product.slug}`" v-for="product in highlighted">
            <div class="highlighted__detail">
               <img class="highlighted__logo" :src="product.brand.brandLogo">

               <h2 class="highlighted__title"> {{ product.name }} </h2>
                  
               <p class="highlighted__price"> {{ product.price }},- </p>
            </div>

            <img class="highlighted__image" :src="product.colours[0].thumbnail" alt="">
         </router-link>
      </div>
   </section>
</template>

<script>
   export default {
      computed: {
         highlighted() {
            return this.$store.getters.getHighlighted;
         }
      }
   }
</script>

<style>
   /* Header */

   .highlighted {
      padding: var(--spacing-medium) 0;
   }

   .highlighted__header {
      padding: var(--spacing-medium) 0;
      display: flex;
      justify-content: center;
   }

   /* Container */

   .highlighted__container {
      width: 100%;
      max-width: 100%;
      display: flex;
      overflow-x: scroll;
   }

   .highlighted__container::-webkit-scrollbar {
      display: none;
}

   .highlighted__thumbnail {
      width: 30rem;
      height: 20rem;
      min-width: 30rem;
      position: relative;
      margin-right: var(--spacing-small);
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .highlighted__thumbnail:first-child {
      margin: 0 var(--spacing-small);
   }

   .highlighted__detail {
      position: absolute;
      display: none;
      width: 100%;
      height: 100%;
      color: var(--secondary-color);
      object-fit: contain;
      z-index: 14;
      animation-name: highlightedColourTr;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }

   .highlighted__logo {
      width: auto;
      height: 11%;
      margin-bottom: 6px;
   }

   .highlighted__price {
      padding-top: var(--spacing-padding);
      font-weight: 600;
   }
      
   .highlighted__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   /* Hover*/
   
   .highlighted__thumbnail:hover .highlighted__detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   .highlighted__thumbnail:hover .highlighted__image {
      width: 140%;
      transition: ease-out 0.2s;
   }
</style>