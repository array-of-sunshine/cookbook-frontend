<template>
  <div class="recipes-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit the recipe</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Title:</label>
          <input type="text" class="form-control" v-model="recipe.title">
        </div>
        <div class="form-group">
          <label>ingredients:</label>
          <input type="text" class="form-control" v-model="recipe.ingredients">
        </div>
        <div class="form-group">
          <label>directions:</label>
          <input type="text" class="form-control" v-model="recipe.directions">
        </div>
        <div class="form-group">
          <label>prep time:</label>
          <input type="text" class="form-control" v-model="recipe.prep_time">
        </div>
        <div class="form-group">
          <label>image url:</label>
          <input type="text" class="form-control" v-model="recipe.image_url">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      recipe: {},
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        input_ingredients: this.recipe.ingredients,
        input_directions: this.recipe.directions,
        input_title: this.recipe.title,
        input_prep_time: this.recipe.prep_time,
        input_image_url: this.recipe.image_url
      };
      axios
        .patch("http://localhost:3000/api/recipes/" + this.$route.params.id, params)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  created: function() {
    console.log('in created');
    // get information about a particular recipe
    axios.get('http://localhost:3000/api/recipes/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.recipe = response.data;
    })
  }
};
</script>

