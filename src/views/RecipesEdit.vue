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
          <input type="text" class="form-control" v-model="title">
        </div>
        <div class="form-group">
          <label>ingredients:</label>
          <input type="text" class="form-control" v-model="ingredients">
        </div>
        <div class="form-group">
          <label>directions:</label>
          <input type="text" class="form-control" v-model="directions">
        </div>
        <div class="form-group">
          <label>prep time:</label>
          <input type="text" class="form-control" v-model="prep_time">
        </div>
        <div class="form-group">
          <label>image url:</label>
          <input type="text" class="form-control" v-model="image_url">
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
      ingredients: "",
      directions: "",
      title: "",
      prep_time: "",
      image_url: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/api/users", params)
        .then(response => {
          this.$router.push("/login");
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
      this.ingredients = response.data.ingredients
      this.directions = response.data.directions
      this.title = response.data.title
      this.prep_time = response.data.prep_time
      this.image_url = response.data.image_url
    })
  }
};
</script>

