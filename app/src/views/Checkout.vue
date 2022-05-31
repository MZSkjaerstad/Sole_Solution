<template>
   <main class="checkout">
      <OrderDetails />
      <CheckoutList :cartData="checkout" />
   </main>
</template>

<script>
   import OrderDetails from'../components/OrderDetails.vue'
   import CheckoutList from '../components/CheckoutList.vue'

   export default {
      components: {
         OrderDetails,
         CheckoutList
      },

      computed: {
         checkout() {
            return this.$store.getters.getCart;
         }
      }
   }
</script>

<style >
   .checkout {
      display: flex;
   }
</style>
