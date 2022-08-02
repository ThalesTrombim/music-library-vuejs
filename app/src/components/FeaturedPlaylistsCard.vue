<template>
  <div class="feat-playlist-container">
    <img :src="image" :alt="name">
    <p>{{name}}</p>
    <span>{{ tracksAmount }}</span>
  </div>
</template>

<script>
export default {
  name: 'featured-playlists-card',
  props: ['name', 'image', 'tracksAmount']
}
</script>

<style scoped>
.feat-playlist-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.feat-playlist-container p {
  color: #FFF;
  font-size: 19px;
  font-weight: 600;
  margin-bottom: -10px;
}
.feat-playlist-container img {
  width: 350px;
  max-height: 233px;
  border-radius: 20px;
  object-fit: cover;
}
</style>