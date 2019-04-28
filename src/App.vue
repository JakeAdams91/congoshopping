<template>
   <div id="app">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <router-view/>
    <!-- <div></div> -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Sidebar from './components/sidebar.vue'
// import Main from './components/main.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-sidebar': Sidebar,
    // 'app-main': Main,
    'app-footer': Footer
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
#app{
  width: 80%;
}
</style>
