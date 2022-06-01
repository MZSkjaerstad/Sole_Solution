<template>
   <section class="article">
      <div class="article__roulette">
         <img class="article__image" :src="sneakerData.colours[colourSetIndex].imageAssets[rouletteIndex].image" alt="Sneaker display image">

         <div class="article__roulette-navigators">
            <button @click="previousImage" class="landing__nav-button">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="button-path" d="M0 0H27C34.1797 0 40 5.8203 40 13V40H13C5.8203 40 0 34.1797 0 27V0Z" fill="#F5F5F5" fill-opacity="0.5"/>
                  <path d="M12.5925 20L11.1783 18.5858L9.7641 20L11.1783 21.4142L12.5925 20ZM19.0067 23.5858L14.0067 18.5858L11.1783 21.4142L16.1783 26.4142L19.0067 23.5858ZM14.0067 21.4142L19.0067 16.4142L16.1783 13.5858L11.1783 18.5858L14.0067 21.4142Z" fill="#444444"/>
                  <path d="M22.5925 20L21.1783 18.5858L19.7641 20L21.1783 21.4142L22.5925 20ZM29.0067 23.5858L24.0067 18.5858L21.1783 21.4142L26.1783 26.4142L29.0067 23.5858ZM24.0067 21.4142L29.0067 16.4142L26.1783 13.5858L21.1783 18.5858L24.0067 21.4142Z" fill="#444444"/>
               </svg>
            </button>

            <div >
               <button @click="goToImage(index)" v-for="(image, index) in this.sneakerData.colours[this.colourSetIndex].imageAssets" :class="this.rouletteIndex === index ? 'landing__dot--active' : 'landing__dot--inactive'"></button>
            </div>

            <button @click="nextImage" class="landing__nav-button">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="button-path" d="M40 40L13 40C5.82031 40 8.13822e-06 34.1797 8.76589e-06 27L1.11263e-05 -3.49691e-06L27 -1.1365e-06C34.1797 -5.08827e-07 40 5.8203 40 13L40 40Z" fill="#F5F5F5" fill-opacity="0.5"/>
                  <path d="M27.4073 20L28.8216 21.4142L30.2358 20L28.8216 18.5858L27.4073 20ZM20.9931 16.4142L25.9931 21.4142L28.8216 18.5858L23.8216 13.5858L20.9931 16.4142ZM25.9931 18.5858L20.9931 23.5858L23.8216 26.4142L28.8216 21.4142L25.9931 18.5858Z" fill="#444444"/>
                  <path d="M17.4073 20L18.8216 21.4142L20.2358 20L18.8216 18.5858L17.4073 20ZM10.9931 16.4142L15.9931 21.4142L18.8216 18.5858L13.8216 13.5858L10.9931 16.4142ZM15.9931 18.5858L10.9931 23.5858L13.8216 26.4142L18.8216 21.4142L15.9931 18.5858Z" fill="#444444"/>
               </svg>
            </button>
         </div>
      </div>

      <div class="article__details">
         <div class="article__key-data">
            <img class="article__logo" :src="sneakerData.brand.brandLogo" :alt="sneakerData.brand.brandName">

            <h2 class="article__title"> {{ sneakerData.name }} </h2>

            <span class="article__price"> {{ sneakerData.price }},- </span>
         </div>

         <span> {{sneakerData.description}} </span>

         <div class="article__customizers"> 
            <form class="article__colour-selector">
               <label v-for="(colourSet, index) in sneakerData.colours" class="article__colourset">
                  <input id="colourSet" type="radio" v-model="orderDetails.colour" :value="colourSet" v-bind="colourSet" @click="goToColourSet(index)">

                  <span class="article__checkmark" :style="`background:${colourSet.colourPicker}`"></span>
               </label>
            </form>

            <select class="article__size-selector" v-model="orderDetails.size">
               <option disabled value="Select Size">Size</option>
               
               <option v-for="sizeSet in sneakerData.sizes" :value="sizeSet" > {{ sizeSet.EU }} </option>
            </select>
         </div>

         <button class="article__add-button" @click="addToCart"><h3>ADD TO CART</h3></button>
      </div>
   </section>
</template>

<script>
   export default {
      data() {
         return {
            orderDetails: {
               name: this.sneakerData.name,
               price: this.sneakerData.price,
               colour: this.sneakerData.colours[0],
               size: this.sneakerData.sizes[0],
            },
            colourSetIndex: 0,
            rouletteIndex: 0,
         }
      },

      props: {
         sneakerData: Object,
      },

      mounted() {
         window.scrollTo(0, 0)
      },

      methods: {

         /**** COLOURPICKER ****/

         goToColourSet(index) {
            this.colourSetIndex = index
         },

         /**** ROULETTE ****/

         nextImage() {
            this.rouletteIndex = (this.rouletteIndex === this.sneakerData.colours[this.colourSetIndex].imageAssets.length - 1) ? 0 : this.rouletteIndex + 1;
         },

         previousImage() {
            this.rouletteIndex = (this.rouletteIndex === 0) ? this.sneakerData.colours[this.colourSetIndex].imageAssets.length - 1 : this.rouletteIndex - 1;
         },

         goToImage(index) {
            this.rouletteIndex = index
         },

         /**** CART ****/

         addToCart() {
            this.$store.dispatch("sendToCart", {...this.orderDetails});
         }
      },
   }
</script>

<style>
   .article {
      height: 85%;
      display: flex;
   }

   .article__roulette {
      position: relative;
      width: 70%;
      height: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
   }

   .article__image {
      width: 110%;
      height: 110%;
      object-fit: cover;
   }

   .article__roulette-navigators {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: var(--spacing-medium);
      z-index: 14;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .article__details {
      width: 30%;
      height: 100%;
      background: var(--tetriary-color);
      padding: var(--spacing-medium);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
   }

   .article__logo{
      width: auto;
      height: 2rem;
   }

   .article__title {
      font-size: 2.4rem;
      margin: var(--spacing-small) 0;
   }

   /* Customizers */

   .article__customizers {
      height: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   /* Colour selector */

   .article__colour-selector {
      height: 5%;
      display: flex;
      align-items: center;
   }

   .article__colourset {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 var(--spacing-medium) 0 var(--spacing-padding);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: pointer;
   }

   .article__colourset input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
   }

   .article__checkmark {
      position: absolute;
      height: 18px;
      width: 18px;
      border-radius: 50%;
      filter: drop-shadow(0px 0px 1.4px);
   }

   .article__colourset:hover input ~ .article__checkmark {
      height: 24px;
      width: 24px;
      animation-name: highlightedColourBorder;
      animation-duration: 8s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }

   .article__colourset input:checked ~ .article__checkmark {
      height: 24px;
      width: 24px;
      border: solid var(--primary-color) 1.5px;
   }

   /* Size selector */

   .article__size-selector {
      border: solid var(--primary-color) 1.5px;
      filter: drop-shadow(0px 0px 1.4px);
      background: var(--tetriary-color);
   }

   /* Add to cart */

   .article__add-button {
      color: var(--secondary-color);
      text-decoration: none;
      background: var(--secondary-color-tr);
      padding: var(--spacing-padding);
      border: none;
      border-radius: 10px 0 10px 0;
   }

   .article__add-button:hover {
      animation-name: highlightedColour;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-direction: linear;
   }

</style>