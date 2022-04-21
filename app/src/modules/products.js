export default {
   state() {
		return {
			productList: []
		}
	},
	
	getters: {
		getProductList(state) {
			return state.productList
		}
	}
}