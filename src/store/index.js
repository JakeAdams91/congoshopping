import Vue from 'vue'
import Vuex from 'Vuex'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    selectedCategory: null,
    drawer: false
  },
  getters: {
    products: state => state.products,
    shoppingCart: state => state.cart,
    // creates a list of all the category types, and prints to SideBar.
    categories: (state) => {
      return state.products.reduce((catList, product) => {
        if (catList.indexOf(product.category) === -1) {
          catList.push(product.category)
        }
        return catList
      }, [])
    },
    // deals of day, generates 4 random items to display
    dealsOfDay: (state) => {
      return state.products.sort(() => 0.5 - Math.random()).slice(0, 4).sort((a, b) => a.sku - b.sku)
    },
    // ensures each item is the correct selected category and sort that
    productsByCategory: (state) => {
      return (category) => {
        return state.products.filter(product => {
          return product.category === category
        }).sort((a, b) => a.sku - b.sku)
      }
    },
    // displays selected category
    selectedProducts: (state, getters) => {
      return getters.productsByCategory(state.selectedCategory)
    }
  },
  mutations: {
    pushProducts (state, products) {
      state.products = products
    },
    setSelectedCategory (state, category) {
      state.selectedCategory = category
    },
    // pushes selected items to Shopping Cart
    addToCart: (state, product) => {
      state.cart.push(product)
    },
    // reduce stock count
    reduceStock: (state, product) => {
      product.stock = product.stock - 1
      let tempProducts = state.products.filter(stateProduct => stateProduct.sku !== product.sku)
      tempProducts.push(product)
      state.products = tempProducts
    },
    // remove item from shopping cart
    removeCartItem: (state, product) => {
      let index = state.cart.indexOf(product)
      if (index > -1) {
        state.cart.splice(index, 1)
      }
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axios.get('http://www.json-generator.com/api/json/get/coWruhoHoy?indent=2')
        .then((response) => {
          commit('pushProducts', response.data.products)
        })
        .catch(error => alert(error))
    }
  }
})
