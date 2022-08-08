<template>
  <section class="profile-views-container">
    <div class="profile-views-left">
      <!-- <img src="../assets/view1.jpg" alt=""> -->
      <div 
        class="profile-image"
        :style="{'background-image': `url(${image})`}"
      ></div>
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
.profile-views-container {
  display: flex;
  width: 280px;
}
.profile-views-left img {
  width: 60px;
  background-position: top;
}
.profile-image {
  width: 60px;
  height: 60px;
  background-position: -30px -9px;
  background-size: 200%;
  background-repeat: no-repeat;
  border-radius: 10px;
}
</style>