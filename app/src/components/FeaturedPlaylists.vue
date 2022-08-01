<template>
  <div>
    <p>{{name}}</p>
    <!-- <img src="../assets/playlist1.jpg" alt=""> -->
    <img :src="image" alt="">
  </div>
</template>

<script>
export default {
  name: 'featured-playlists',
  props: ['name', 'image']
}
</script>