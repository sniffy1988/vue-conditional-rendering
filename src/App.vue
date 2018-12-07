<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{windowWidth}}</div>
    <c-render :render="isRender">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </c-render>
    <c-render :render="isNeedRender">Hides on screens smaller than 1000px</c-render>
    <c-render :render="!isNeedRender">Shows on screens smaller than 1000px</c-render>
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
      isRender: false,
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    window.addEventListener("resize", this.resizeSensor);
  },
  beforeDestroy() {},
  computed: {
    isNeedRender() {
      return this.windowWidth > 1000;
    }
  },
  methods: {
    resizeSensor() {
      this.windowWidth = window.innerWidth;
    },
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
