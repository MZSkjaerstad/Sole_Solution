export default {
   state() {
      return {
         highlightedList: []
      }
   },

   getters: {
      getHighlighted(state) {
         return state.highlightedList
      }
   }
}