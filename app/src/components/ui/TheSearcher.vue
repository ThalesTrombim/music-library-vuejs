<template>
  <div class="search-container">
    <button @click="doSearch">
      <v-icon name="search" class="v-icon" ></v-icon>
    </button>
    <input v-model="search" type="text" placeholder="Search artists, playlist or tracks">
  </div>
</template>

<script>
export default {
  name: 'the-searcher',
  emits: ['key-word'],
  data() {
    return {
      search: ''
    }
  },
  methods: {
    doSearch() {
      if(this.search !== '') {
        this.$emit('key-word', this.search);
      }
    }
  }
}
</script>

<style scoped>
.search-container {
  display: flex;
  width: 100%;
  gap: 10px;
}
.v-icon {
  width: 24px;
  cursor: pointer;
}
input {
  font-size: 16px;
  width: 70%;
  background: transparent;
  border: none;
}
button {
  background: transparent;
  border: none;
}
input:focus {
  outline: 0;
  color: #FFF;
}
</style>