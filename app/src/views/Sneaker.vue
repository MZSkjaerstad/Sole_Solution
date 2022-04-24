<template>
   <ProductArticle/>
</template>

<script>
import ProductArticle from '../components/ProductArticle.vue'
import appMixin from '../mixins/appMixin.js'


export default {
   components: {
      ProductArticle,
   },

   mixins: [appMixin],
}
</script>


