import Vue from "vue";
import App from "./App.vue";
import feather from "vue-icon";

import SideBar from "@/components/SideBar.vue";
import TheSearcher from "@/components/ui/TheSearcher.vue";
import FeaturedPlaylistsCard from "@/components/FeaturedPlaylistsCard.vue";
import ProfileViews from "@/components/ProfileViews.vue";

Vue.config.productionTip = false;

Vue.use(feather, "v-icon");
Vue.component("side-bar", SideBar);
Vue.component("the-searcher", TheSearcher);
Vue.component("featured-playlists-card", FeaturedPlaylistsCard);
Vue.component("profile-view", ProfileViews);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
