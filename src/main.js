import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "flowbite";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createRouter, createWebHashHistory } from "vue-router";
import loginPage from "./components/loginPage.vue";
import homePage from "./components/homePage.vue";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify);
const routes = [
  { path: "/homePage", component: homePage },
  { path: "/login", component: loginPage },
  { path: "/", component: loginPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
app.use(router);
app.mount("#app");
