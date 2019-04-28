<template>
 <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
      >
        {{ link }}
      </v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>Congo</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 100px;
  bottom: 0;
  position: fixed;
  background-color: gray;
}

p {
  text-align: center;
  color: #4183E0;
  text-shadow: 1px 1px black;
}
</style>
