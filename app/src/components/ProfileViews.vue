<template>
  <section class="profile-views-container">
    <div class="profile-views-left">
      <img src="../assets/view1.jpg" alt="">
      <div>
        <p>name</p>
        <span>days</span>
      </div>
    </div>
    <p>albuns</p>
  </section>
</template>

<script>
export default {
  name: 'profile-views',
  props: ['name', 'days', 'alguns', 'image'],
}
</script>

<style scoped>
.profile-views-left img {
  width: 60px;
  background-position: top;
}
</style>