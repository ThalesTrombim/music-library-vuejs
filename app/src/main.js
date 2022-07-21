import Vue from "vue";
import App from "./App.vue";
import feather from "vue-icon";

import SideBar from "@/components/SideBar.vue";

Vue.config.productionTip = false;

Vue.use(feather, "v-icon");
Vue.component("side-bar", SideBar);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
