<template>
  <section class="container">
    <div>
      <profile-card userName="Dany Schudler"></profile-card>
    </div>
    <div>Links Area</div>
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
}
</style>