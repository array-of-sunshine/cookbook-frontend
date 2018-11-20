<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p v-for="recipe in recipes"> {{recipe.title}}</p>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      recipes: []
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/recipes').then(function(response) {
      console.log(response.data);
      this.recipes = response.data;
    }.bind(this))
  },
  methods: {},
  computed: {}
};
</script>

