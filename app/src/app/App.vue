<template>
    <Header />
    <RouterView />
    <Footer />
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import query from '../groq/app.groq?raw'
    import appMixin from '../mixins/appMixing.js'

    export default {
        components: {
          Header,
          Footer
        },

        mixins: [appMixin],

        async created() {
            await this.fetchSneakerSanity(query)
        },
    }
</script>

<style>
    @import '../style/reset.css';
    @import '../style/fonts.css';
    @import '../style/variables.css';
    @import '../style/style.css';
</style>