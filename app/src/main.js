import Vue from "vue";
import App from "./App.vue";

import SideBar from "@/components/SideBar.vue";

Vue.config.productionTip = false;

Vue.component("side-bar", SideBar);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
