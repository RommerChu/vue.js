<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Content></Content>
    <Todo></Todo>

  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/
import Content from './components/Content.vue'
import Todo from "./components/Todo";

export default {
  name: 'app',
  components: {
    /*HelloWorld,*/ Content, Todo
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
