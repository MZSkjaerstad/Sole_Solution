import sanity from '../sanity.js'

export default {
   methods: {
		async fetchSneakerSanity(query, params) {
			const sanityData = await sanity.fetch(query);
			try {
				await this.handleSanityFetch(sanityData)
			} catch(error) {
				this.error = error.message
				console.log(this.error)
			};
	  	},

		async handleSanityFetch(sanityData) {
			if (sanityData) {
				this.$store.dispatch("getData", sanityData);
			} else {
				throw new Error('Her gikk noe galt med sanity.');
			}
		}
	}
}