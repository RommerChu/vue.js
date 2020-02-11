<template>
  <div id="app">
    <!---STEP 3: USE THE REGISTERED TAG BY CREATING TAG HERE--->
    <list-user></list-user>
    <UsersDetail></UsersDetail>
  </div>
</template>

<script>

/***STEP 1: IMPORT THE VUE CREATED HERE***/
import ListUser from "./components/ListUser";
import UsersDetail from "./components/UsersDetail";

/***STEP 2: REGISTER THE VUE CONTENT CREATED***/
export default {
  name: 'app',
  components: {
  ListUser, UsersDetail
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
