import products from './modules/products';
import cart from './modules/cart';
import landingSettings from './modules/landingSettings.js';
import highlighted from './modules/highlighted.js';
import subscribers from './modules/subscribers.js';

export default {
	state() {
		return {
			loading: true
		}
	},

	modules: {
		products,
		cart,
		landingSettings,
		highlighted,
		subscribers
	},

	mutations: {
		installData(state, data) {
			state.products.productList = data.products;
			state.landingSettings.carouselle = data.carouselleImages;
			state.highlighted.highlightedList = data.highlighted;
			console.log('Product installed', state.products.productList)
			console.log('Highlighted installed', state.highlighted.highlightedList)
			console.log('Landing installed', state.landingSettings.carouselle)
		},
		toggleLoading(state) {
			state.loading = !state.loading;
			console.log('Loading' ,state.loading)
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
