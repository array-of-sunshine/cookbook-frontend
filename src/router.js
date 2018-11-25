import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Test from './views/Test.vue'
import RecipesShow from './views/RecipesShow.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Logout from "./views/Logout.vue"
import RecipesEdit from "./views/RecipesEdit.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/recipes/:id',
      name: 'recipesShow',
      component: RecipesShow
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/recipes/:id/edit',
      name: 'recipesEdit',
      component: RecipesEdit
    }
  ]
})


// edit/update
// vue
// new component called RecipesEdit, router etc.
// user sees a form
// the form is pre-filled in with information from a particular recipe
// user hits submit after filling out/modifying the form
// use axios to communicate with the API and change the recipe in the db
