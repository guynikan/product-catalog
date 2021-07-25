import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { makeServer } from "./server";

Vue.config.productionTip = false;

if (process.env.NODE_ENV === "development") {
  makeServer();
}

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
