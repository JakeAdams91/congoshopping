<template>
<div id="cart">
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
  <div id="cart-box" v-for="(product, index) in shoppingCart" :key="index">
    <img :src="product.imgUrl" width="200px" height="200px"><br>
    {{product.item}} - {{product.price | currencyFmt}}
    <v-btn id="remove" @click="removeItem(product)"><v-icon>remove_shopping_cart</v-icon></v-btn>
  </div>
  <router-link to="/">
    <v-btn
    id="continue"
    color="blue"
    bottom
    right
    fixed
    >
    Keep Shopping
    </v-btn>
  </router-link>
  <table>
    <tr>
      <th>Tax Rate: </th>
      <td> {{ taxes | percentFmt }} </td>
    </tr>
    <tr>
      <th>Taxes Total: </th>
      <td> {{ totalTaxes | currencyFmt }} </td>
    </tr>
    <tr>
      <th>Grand Total: </th>
      <td> {{ grandTotal | currencyFmt }} </td>
    </tr>
  </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      taxes: 0.075
    }
  },
  computed: {
    shoppingCart () {
      return this.$store.getters.shoppingCart
    },
    subTotal () {
      return this.$store.getters.shoppingCart.reduce((total, product) => {
        return total + product.price
      }, 0)
    },
    totalTaxes () {
      return this.subTotal * this.taxes
    },
    grandTotal () {
      return this.subTotal + this.totalTaxes
    }
  },
  methods: {
    removeItem (product) {
      console.log(product)
      this.$store.commit('removeCartItem', product)
    }
  },
  filters: {
    percentFmt (number) {
      let percent = number * 100
      let percentStr = `${percent}%`
      return percentStr
    }
  }
}
</script>

<style scoped>
#continue {
  margin-right: 25px;
  margin-bottom: 45px;
}
#cart {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: space-around;
  padding-top: 150px;
  margin-left: 150px;
  width: 100%;
  height: 100%;
}
#cart-box{
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
.text {
  position: fixed;
  bottom: 15;
  right: 15;
}
.total {
  background-color: #000;
  position: fixed;
  bottom: 8;
  right: 8;
  color: #4183E0;
}
table {
  color: #4183E0;;
}

#remove {
  width: 15px;
  height: 25px;
}
</style>
