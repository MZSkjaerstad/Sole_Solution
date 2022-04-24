<template>
   <main class="home">
      <Landing />
      <Highlighted />
      <ProductDisplay/>
   </main>
</template>

<script>
import Landing from '../components/Landing.vue'
import Highlighted from '../components/HighlightedDisplay.vue'
import ProductDisplay from '../components/ProductDisplay.vue'

export default {
   components: {
      Landing,
      Highlighted,
      ProductDisplay
   }
}
</script>

<style>
   .home {
      z-index: 10;
   }
</style>