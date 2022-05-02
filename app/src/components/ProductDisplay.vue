<template>
   <section class="products">
      <h2 class="products__header">
         our grand collection
      </h2>

      <div class="products__grid">
         <div class="procucts__thumbnail" v-for="product in productList">
            <router-link class="products__content" :to="`/${product.slug}`">
               <div class="product__detail">
                  <img class="products__logo" :src="product.brand.brandLogo">

                  <h2 class="products__title"> {{ product.name }} </h2>
                     
                  <p class="products__price"> {{ product.price }},- </p>
               </div>

               <figure class="products__image-frame">
                  <img class="products__image" :src="product.colours[0].thumbnail">
               </figure>
            </router-link>
         </div>
      </div>
   </section>
</template>

<script>
   export default {
      computed: {
         productList() {
            return this.$store.getters.getProductList
         }
      }
   }
</script>


<style>
   .products {
      padding: 0 var(--spacing-medium) var(--spacing-medium) var(--spacing-medium);
   }

   .products__header {
      padding: var(--spacing-medium) 0;
   }

   .products__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--spacing-small) var(--spacing-small);
   }

   .procucts__thumbnail {
      position: relative;
      width: 100%;
      height: 40vh;
      border: none;
      overflow: hidden;
   }

   .procucts__content {
      width: 100%;
      height: 100%;
   }

   .product__detail {
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

   .products__logo {
      width: auto;
      height: 11%;
      margin-bottom: 6px;
   }

   .products__logo path {
      fill-opacity: 0.5;
   }

   .products__price {
      padding-top: var(--spacing-padding);
      font-weight: 600;
   }

   .products__image-frame {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .products__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1
   }

   /* Hover effects */

   .procucts__thumbnail:hover .product__detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   .procucts__thumbnail:hover .products__image {
      width: 140%;
      height: 140%;
      transition: ease-out 0.2s;
   }
</style>