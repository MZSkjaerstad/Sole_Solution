import sanity from '../sanity.js'

export default {
   state() {
		return {
			loading: true,
			content: null
		}
	},

   methods: {
		async fetchSneakerSanity(query, params) {
			const result = await sanity.fetch(query);
			this.$store.state.products.productList = result.products;
			this.loading = false
			console.log(this.$store.state.products.productList)
	  }
	}
}