<template>
 <div id="flexy">
   <product-box v-if="selectedProducts.length === 0" v-for="product in dealsOfDay" :key="product.sku" :product="product" />
   <product-box v-for="product in selectedProducts" :key="product.sku" :product="product"/>
   <router-link to="/shopping-cart"><v-btn
    id="cartsie"
    @click="show = !show"
    top
    right
    fab
    ripple
    fixed
    >
     <v-icon>shopping_cart</v-icon>
     </v-btn>
   </router-link>
 </div>
</template>

<script>
import ProductBox from './ProductBox'
import ShoppingCart from './ShoppingCart'
// populates the list.
export default {
  name: 'Main',
  components: {
    'product-box': ProductBox,
    'shopping-cart': ShoppingCart
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    dealsOfDay () {
      return this.$store.getters.dealsOfDay
    },
    selectedProducts () {
      return this.$store.getters.selectedProducts
    }
  },
  methods: {
  }
}
</script>

<style scoped>
h1 p {
  color: #4183E0;
  position: center center;
}

#flexy {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: space-around;
  padding-top: 150px;
  margin-left: 150px;
  width: 100%;
  height: 100%;
}

.boxes {
  overflow-wrap: normal;
  text-align: center;
  background-color: lightgray;
  border-radius: 15px;
  max-width: 200px;
  margin: 10px;
  margin: auto;
  list-style-type: none;
  color: #4183E0;
}

#cartsie {
  padding-top: 15px;
  margin-right: 25px;
  margin-bottom: 35px;
}

#cartsie:hover {
  transform: scale(1.10);
  -webkit-filter: drop-shadow(4px 4px 1px #222);
    filter:       drop-shadow(4px 4px 1px #222);
}
</style>
