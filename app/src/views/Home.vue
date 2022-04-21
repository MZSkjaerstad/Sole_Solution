<template>
   <main class="home">
      <Landing />
      <ProductDisplay/>
   </main>
</template>

<script>
import Landing from '../components/Landing.vue'
import ProductDisplay from '../components/ProductDisplay.vue'

export default {
   components: {
      Landing,
      ProductDisplay
   }
}
</script>

<style>
   .home {
      z-index: 10;
   }
</style>