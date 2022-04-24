import sanity from '../sanity.js'

export default {
   methods: {
		async fetchSneakerSanity(query, params) {
			const sanityData = await sanity.fetch(query);
			this.$store.dispatch("getData", sanityData);
	  	}
	}
}