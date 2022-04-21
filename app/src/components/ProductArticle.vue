<template>
   <section class="article">
      {{ sneakerData.name }}
   </section>
</template>

<script>
export default {
   computed: {
         sneakerData() {
            return this.filterSneakerData()[0]
         }
   },

   methods: {
      fetchSneakerParam() {
         return this.$route.params.sneakerParam;
      },

      filterSneakerData() {
         return this.$store.getters['getProductList'].filter(sneaker => {
            return sneaker.slug === this.fetchSneakerParam()
         })
      }
   },
}
</script>