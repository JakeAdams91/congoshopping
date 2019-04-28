<template>
  <div class="boxes">
    <img :src="product.imgUrl" width="200px" height="200px">
    <br>
    {{product.item}} - {{product.price | currencyFmt}}
    <span v-show="showDescription"><br>{{product.description}}</span>
    <br>
    <v-btn @click="showDescription = !showDescription"><v-icon>description</v-icon></v-btn>
    <v-btn @click="addToCart(product)"><v-icon>add_shopping_cart</v-icon></v-btn>
    <v-alert v-show="outOfStock" color="red" type="error">
      We're sorry, but this item is currently out of stock.
    </v-alert>
   </div>
</template>
<script>
export default {
  name: 'ProductBox',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showDescription: false,
      outOfStock: false
    }
  },
  computed: {
  },
  methods: {
    addToCart (product) {
      if (product.stock <= 0) {
        this.outOfStock = !this.outOfStock
        // alert('That item is currently out of stock.')
      } else {
        this.$store.commit('reduceStock', product)
        this.$store.commit('addToCart', product)
      }
    }
  }
}
</script>
<style scoped>
#haha {
  display: none;
  width: 350px;
  height: 350px;
  background-color: red;
  color: white;
}
</style>
