<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="recipe in recipes">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">id: {{ recipe.id }}</h5>
              <h5 class="card-title">Title: {{ recipe.title }}</h5>
              <p class="card-text">ingredients: {{ recipe.ingredients }}</p>
              <img v-bind:src="recipe.image_url" width="100px">
              <p class="card-text">directions: {{recipe.directions}}</p>
              <!-- go to the show page -->
              <a v-bind:href="'/#/recipes/' + recipe.id" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
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

