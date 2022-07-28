<template>
  <section class="container">
    <div>
      <profile-card user-name="Dany Schudler"></profile-card>
    </div>
    <div class="links-area">
      <div class="divider"></div>
      <ul>
        <li>
          <v-icon name="aperture" class="v-icons"></v-icon>
          <span>Overview</span>
        </li>
        <li>
          <v-icon name="trello" class="v-icons"></v-icon>
          <span>News</span>
        </li>
        <li>
          <v-icon name="music" class="v-icons"></v-icon>
          <span>Playlists</span>
        </li>
        <li>
          <v-icon name="radio" class="v-icons"></v-icon>
          <span>Discovery</span>
        </li>

      </ul>
      <div class="divider"></div>
      <ul>
        <li>
          <v-icon name="sliders" class="v-icons"></v-icon>
          <span>Dashboard</span>
        </li>
        <li>
          <v-icon name="message-square" class="v-icons"></v-icon>
          <span>Messages</span>
        </li>
        <li>
          <v-icon name="bell" class="v-icons"></v-icon>
          <span>Notifications</span>
        </li>
        <li>
          <v-icon name="user" class="v-icons"></v-icon>
          <span>Account</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ProfileCard from './ProfileCard.vue'

export default {
  components: {
    ProfileCard
  }
}
</script>

<style scoped>
.container {
  background: #040517;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 64px 24px;
}
.v-icons {
  width: 20px;
}

.links-area ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-left: 25%
}
.links-area ul li{
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 12px 0px;
  cursor: pointer;
}
.links-area ul li :hover {
  color: #FFF;
}
.divider {
  background: #585A69;
  width: 60%;
  height: 1px;
  margin: 12px auto;
  opacity: .2;
}
</style>