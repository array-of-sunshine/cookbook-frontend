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
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" v-on:click="setCurrentRecipe(recipe)">
                Launch demo modal
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ currentRecipe.title }}</p>
            <p>{{ currentRecipe.ingredients }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
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
      recipes: [],
      currentRecipe: {title: "", ingredients: ""}
    };
  },
  created: function() {
    axios.get('http://localhost:3000/api/recipes').then(function(response) {
      console.log(response.data);
      this.recipes = response.data;
    }.bind(this))
  },
  methods: {
    setCurrentRecipe: function(inputRecipe) {
      console.log(inputRecipe);
      this.currentRecipe = inputRecipe;
    }
  },
  computed: {}
};
</script>

