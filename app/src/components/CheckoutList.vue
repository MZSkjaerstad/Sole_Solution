<template>
   <section class="checklist">
      <h1 class="checkout__header">checkout</h1>

      <div class="checkout__item-container"></div>

      <div class="checkout__data"></div>
   </section>
</template>

<script>
   export default {
      props: {
         cartData: Array,
      }
   }
</script>


<style>
   .checklist {
      width: 55%;
      height: 85vh;
      padding: var(--spacing-medium);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .checkout__header {
      color: var(--tetriary-color);
   }
</style>