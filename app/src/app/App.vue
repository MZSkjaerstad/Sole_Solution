<template>
    <Header />
    <AnnouncementBar />
    <Loading v-if="isLoading.loading === true"/>
    <RouterView v-else/>
    <Footer />
</template>

<script>
    import appMixin from '../mixins/appMixin.js'
    import Header from '../components/Header.vue'
    import Loading from '../components/Loading.vue'
    import AnnouncementBar from '../components/AnnouncementBar.vue'
    import Footer from '../components/Footer.vue'
    import query from '../groq/app.groq?raw'

    export default {
        components: {
          Header,
          Loading,
          AnnouncementBar,
          Footer,
        },

        mixins: [appMixin],

        async created() {
            await this.fetchSneakerSanity(query);
        },

        computed: {
            isLoading() {
                return this.$store.getters.getLoading;
            }
        }
    }
</script>

<style>
    @import '../style/reset.css';
    @import '../style/fonts.css';
    @import '../style/variables.css';
    @import '../style/style.css';
</style>