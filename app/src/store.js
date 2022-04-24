import products from './modules/products'
import cart from './modules/cart';
import landingSettings from './modules/landingSettings.js'

export default {
	state() {
		return {
			loading: true
		}
	},

	modules: {
		products,
		cart,
		landingSettings
	},

	mutations: {
		installData(state, data) {
			state.products.productList = data.products;
			state.landingSettings.carouselle = data.carouselleImages;
			console.log(state.products.productList)
			console.log(state.landingSettings.carouselle )
		},
		toggleLoading(state) {
			state.loading = !state.loading;
			console.log('Is loading' ,state.loading)
		}
	},

	actions: {
		getData({commit}, data) {
			commit('installData', data)
			commit('toggleLoading')
		}
	},

	getters:{
		getLoading(state) {
			return state.loading;
		}
	}
};
