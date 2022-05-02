<template>
   <ProductArticle :sneakerData="sneakerData" v-if="sneakerData"/>
   <Highlighted />
</template>

<script>
import ProductArticle from '../components/ProductArticle.vue'
import Highlighted from '../components/HighlightedDisplay.vue'


export default {
   components: {
      ProductArticle,
      Highlighted
   },

   computed: {
      sneakerData() {
         return this.$store.getters['getProductList'].find(sneaker => {
            return sneaker.slug === this.sneakerParam;
         })
      },

      sneakerParam() {
         return this.$route.params.sneakerParam;
      }
   }
}
</script>


