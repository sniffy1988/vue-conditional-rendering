<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <c-render :render="isRender">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </c-render>
    <button @click="toggleRender">Show/hide</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      isRender: true
    };
  },
  methods: {
    toggleRender() {
      this.isRender = !this.isRender;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
