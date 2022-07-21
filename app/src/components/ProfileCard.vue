<template>
  <section class="container">
    <img src="./../assets/profile.jpg" :alt="userName">
    <div>
      <h3>{{ userName }}</h3>
      <v-icon name="settings"></v-icon>
    </div>
  </section>
</template>

<script>
export default {
  props: ['userName']
}
</script>

<style scoped>
.container {
  display: flex;
  gap: 12px;
}
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
}
h3 {
  color: #FFF;
}
</style>