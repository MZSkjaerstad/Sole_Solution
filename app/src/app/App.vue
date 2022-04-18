<template>
    <Header />
    <RouterView />
    <Footer />
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import sanityClient from '@sanity/client';

    const sanity = sanityClient({
        projectId: 'vvmgs3k5',
        dataset: 'production',
        apiVersion: '2022-04-15',
        useCdn: false
    });

    export default {
        components: {
          Header,
          Footer
        },

        async mounted() {
            this.fetchSneakerSanity()
        },

        methods: {
            async fetchSneakerSanity() {
                const query = `{
                        "products": *[_type == "products"]| order(name asc){
                            name,
                            price,
                            description,
                            "brand": brand-> {
                                brandName,
                                "brandLogo": brandLogo.asset->.url
                            },
                            "slug": slug.current,
                            "colours": colours[]{
                                colourName,
                                colourPicker,
                                "thumbnail": thumbnail.asset->.url,
                                "imageAssets": images[] {
                                    "image": asset->.url
                                }
                            },
                            "sizes": sizes[]-> {
                                inches,
                                US,
                                EU,
                                UK,
                            },
                            highlighted,
                            inStock,
                        },

                        "brands": *[_type == "brands"]| order(name asc) {
                            brandName,
                            "brandLogo": brandLogo.asset->.url,
                            
                        }
                    }`;
                
                const result = await sanity.fetch(query);
                this.$store.state.products.productList = result;
                console.log(this.$store.state.products.productList)
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