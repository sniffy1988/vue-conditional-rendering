import Vue from "vue";
import App from "./App.vue";
import VueConditional from "./plugins/vue-conditional";

Vue.config.productionTip = false;
Vue.use(VueConditional);

new Vue({
  render: h => h(App)
}).$mount("#app");
