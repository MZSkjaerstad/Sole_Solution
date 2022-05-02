export default {
   state() {
		return {
         cartArray: []
      }
	},

   mutations: {
      addToCart(state, data) {
         state.cartArray.push(data)
         console.log('Added to cart', state.cartArray)
      },

      removeFromCart(state, data) {
         state.cartArray.splice(data, 1);
      }
   },

   actions: {
      sendToCart({commit}, data) {
         commit('addToCart', data)
      },

      removeItem({commit}, data) {
         commit('removeFromCart', data)
      }
   },

   getters: {
      getCart(state) {
         return state.cartArray;
      }
   }
}