<template>
   <section class="highlighted">
      <div class="highlighted__header">
         <h2>This weeks selection</h2>
      </div>

      <div class="highlighted__container">
         <div class="highlighted__thumbnail" v-for="product in productList">
            <router-link :to="`/${product.slug}`">
               
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
   .highlighted__header {
      padding: var(--spacing-medium);
      display: flex;
      justify-content: center;
   }
</style>