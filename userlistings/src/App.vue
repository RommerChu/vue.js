<template>
  <div id="app">
    <font-awesome-icon icon="user-secret" />
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/create">Create</a>
          </li>
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="/#/details">Listing</a>-->
<!--          </li>-->
        </ul>
      </div>
    </nav>
    <header-component></header-component>
    <!--router should be placed here if to keep header-->
    <router-view></router-view>
      <b-container>
        <!--<userlistings></userlistings>
        <b-row class="box">
          <b-col>
            <userform></userform>
          </b-col>
          <b-col>
            <userdetails></userdetails>
          </b-col>
        </b-row>-->
      </b-container>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import headerComponent from "./components/header"
  import footerComponent from "./components/footer"
  //import userlistings from "./components/userlistings"
  //import userform from "./components/userform"
  //import userdetails from "./components/userdetails"


export default {
  name: 'app',
  components: {
    //userlistings
    // userdetails
    //userform
    //userlistings
    footerComponent, headerComponent,
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
  margin-top: 0px;
  max-width: 100%;
}
.box {
  border: 1px solid lightgray;
  padding: 3rem;
  margin: 1.5rem 0rem;

}
.box1 {
  margin-left:20%;
  margin-right:20%;
}
  .spacer{
    margin-top:50px;
    margin-bottom:50px;
  }
</style>
