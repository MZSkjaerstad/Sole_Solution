export default {
   state() {
      return {
         carouselle: []
      }
   },

   getters: {
      getLandingSettings(state) {
         return state.carouselle;
      }
   }
}