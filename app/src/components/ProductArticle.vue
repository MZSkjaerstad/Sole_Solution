<template>
   <section class="article">
      <div class="article__roulette">
         <img :src="currentImage">
      </div>

      <div class="article__details">
         <h2> {{ sneakerData.name }} </h2>
         <span> {{ sneakerData.price }},- </span>
         <form class="article__color-selector">
            <input id="colourSet" type="radio" v-for="colourSet in sneakerData.colours" v-model="orderDetails.colour" :value="colourSet" v-bind="colourSet">
         </form>

         <select v-model="orderDetails.size">
            <option disabled value="Select Size">Select size</option>
            <option v-for="sizeSet in sneakerData.sizes" :value="sizeSet" > {{ sizeSet.EU }} </option>
         </select>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         orderDetails: {
            product: '',
            price: 0,
            colour: {},
            size: {}
         },

         rouletteIndex: 0,
      }
   },

   mounted() {
      window.scrollTo(0, 0)
   },

   computed: {
         sneakerData() {
            return this.filterSneakerData()[0]
         },

         updateOrderDetails() {
            this.orderDetails.product = this.sneakerData.name
            this.orderDetails.price = this.sneakerData.price
            this.orderDetails.colour = this.sneakerData.colours[0];
            this.orderDetails.size = this.sneakerData.sizes[0];
         },

         currentImage() {
            return this.orderDetails.colour.imageAssets[this.rouletteIndex].image
         }
   },

   methods: {

      /***** SORT *****/

      fetchSneakerParam() {
         return this.$route.params.sneakerParam;
      },

      filterSneakerData() {
         return this.$store.getters['getProductList'].filter(sneaker => {
            return sneaker.slug === this.fetchSneakerParam()
         })
      },

      /**** ROULETTE ****/

      next() {
         if(this.selectedColour.length === this.rouletteIndex + 1) {
            this.rouletteIndex = 0;
         } else {
            this.rouletteIndex += 1;
         }
      },

      previous() {
         if(this.rouletteIndex - 1 === 0) {
            this.rouletteIndex = this.selectedColour.length;
         } else {
            this.rouletteIndex -= 1;
         }
      },

      goToIndex() {
         this.rouletteIndex = index;
      },

      /**** CART ****/

      addToCart() {

      }
   },
}
</script>

<style>
   .article {
      height: 90%;
      display: flex;
   }

   .article__roulette {
      width: 70%;
      height: 100%;
   }

   .article__details {
      width: 30%;
      height: 100%;
      background: var(--tetriary-color);
   }
</style>