<template>
  <section class="profile-container">
    <img src="./../assets/profile.jpg" :alt="userName">
    <div>
      <h3>{{ userName }}</h3>
      <div class="actions-area">
        <span>Edit profile</span>
        <v-icon name="settings" class="settings-icon"></v-icon>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['userName']
}
</script>

<style scoped>
.profile-container {
  display: flex;
  gap: 12px;
  align-items: center;
}
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
}
h3 {
  font-size: 24px;
  color: #FFF;
}

.actions-area {
  display: flex;
  gap: 9px;
  margin-top: 12px;
}
.settings-icon {
  width: 20px;
}
</style>