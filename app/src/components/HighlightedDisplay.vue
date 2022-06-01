<template>
   <section class="highlighted">
      <div class="highlighted__header">
         <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.368 25.3973L20.3091 24.3349L19.2432 25.3973L20.3091 26.4597L21.368 25.3973ZM26.4308 18.2333L20.3091 24.3349L22.4269 26.4597L28.5487 20.3581L26.4308 18.2333ZM20.3091 26.4597L26.4308 32.5613L28.5487 30.4365L22.4269 24.3349L20.3091 26.4597Z" fill="#444444"/>
            <path d="M9.18248 25.3973L8.12357 24.3349L7.05766 25.3973L8.12357 26.4597L9.18248 25.3973ZM14.2453 18.2333L8.12357 24.3349L10.2414 26.4597L16.3631 20.3581L14.2453 18.2333ZM8.12357 26.4597L14.2453 32.5613L16.3631 30.4365L10.2414 24.3349L8.12357 26.4597Z" fill="#444444"/>
            <path d="M33.6117 25.3973L32.5528 24.3349L31.4869 25.3973L32.5528 26.4597L33.6117 25.3973ZM38.6745 18.2333L32.5528 24.3349L34.6706 26.4597L40.7923 20.3581L38.6745 18.2333ZM32.5528 26.4597L38.6745 32.5613L40.7923 30.4365L34.6706 24.3349L32.5528 26.4597Z" fill="#444444"/>
         </svg>

         <h2 class="higlighted__header-title">This weeks selection</h2>

         <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.6055 24.4063L28.6644 25.4687L29.7303 24.4063L28.6644 23.3439L27.6055 24.4063ZM22.5427 31.5703L28.6644 25.4687L26.5466 23.3439L20.4249 29.4455L22.5427 31.5703ZM28.6644 23.3439L22.5427 17.2423L20.4249 19.3671L26.5466 25.4687L28.6644 23.3439Z" fill="#444444"/>
            <path d="M39.7912 24.4063L40.8501 25.4687L41.916 24.4063L40.8501 23.3439L39.7912 24.4063ZM34.7283 31.5703L40.8501 25.4687L38.7322 23.3439L32.6105 29.4455L34.7283 31.5703ZM40.8501 23.3439L34.7283 17.2423L32.6105 19.3671L38.7322 25.4687L40.8501 23.3439Z" fill="#444444"/>
            <path d="M15.3621 24.4063L16.421 25.4687L17.4869 24.4063L16.421 23.3439L15.3621 24.4063ZM10.2993 31.5703L16.421 25.4687L14.3032 23.3439L8.18145 29.4455L10.2993 31.5703ZM16.421 23.3439L10.2993 17.2423L8.18144 19.3671L14.3032 25.4687L16.421 23.3439Z" fill="#444444"/>
         </svg>
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
      },

      mounted() {
         this.centerScroll()
      },

      methods: {
         async centerScroll() {
            const container = document.querySelector('.highlighted__container')
            let scrollLength = container.offsetWidth;
            let halfLength = scrollLength / 2;
            container.scrollTo({left: halfLength})
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
      padding: var(--spacing-medium) 0 var(--spacing-padding) 0;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .higlighted__header-title {
      padding: 0 var(--spacing-small) 0 var(--spacing-small);
   }

   /* Container */

   .highlighted__container {
      padding: var(--spacing-medium) 0;
      width: 100%;
      max-width: 100%;
      display: flex;
      overflow-x: scroll;
      transition: 0.4s;
      scroll-behavior: smooth;
   }

   .highlighted__container::-webkit-scrollbar {
      display: none;
}

   .highlighted__thumbnail {
      width: 30rem;
      height: 35vh;
      min-width: 30rem;
      position: relative;
      margin-right: var(--spacing-small);
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .highlighted__thumbnail:first-child {
      margin: 0 var(--spacing-small) 0 var(--spacing-large);
   }

   .highlighted__thumbnail:last-child {
      margin: 0 var(--spacing-large) 0 0;
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

   .highlighted__container:hover {
      background: var(--secondary-color);
      transition: 0.4s;
   }
   
   .highlighted__thumbnail:hover .highlighted__detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   .highlighted__thumbnail:hover .highlighted__image {
      width: 150%;
      height: 150%;
      transition: ease-out 0.2s;
   }
</style>