<template>
  <div>
    <v-alert
      :value="true"
      type="success">
      This is a success alert.
    </v-alert>

    <p id="primary">categories</p>
    <v-btn class="cata" @click="setCategory(null)">Random Deals</v-btn>
    <v-btn class="cata" v-for="category in categories" :key="category" @click="setCategory(category)"> {{ category }} </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    categories () {
      return this.$store.getters.categories
    }
  },
  methods: {
    setCategory (category) {
      this.$store.commit('setSelectedCategory', category)
    }
  }
}
</script>

<style scoped>
div {
  margin-top: 130px;
  height: 100%;
  width: 150px;
  position: fixed;
  z-index: 1;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  background-color: #4183E0;
  text-align: center;
}
#primary {
  text-align: center;
  border-bottom: 1px solid black;
  color: #000;
  font-size: 1.25rem;
}

.cata {
  color: #fff;
  width: 110px;
}

.cata:hover {
  transform: scale(1.10);
}

#drawer {
  z-index: 10;
  margin-left: 125px;
}

</style>
