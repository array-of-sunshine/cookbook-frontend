<template>
  <div class="home">
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Title: {{ recipe.title }}</h5>
          <p class="card-text">ingredients: {{ recipe.ingredients }}</p>
          <img v-bind:src="recipe.image_url" width="100px">
          <p class="card-text">directions: {{recipe.directions}}</p>
          <a href="/show.html" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js from the show componenentt",
      recipe: {}
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/recipes/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.recipe = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>

