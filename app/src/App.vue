<template>
  <div id="app">
    <aside>
      <side-bar></side-bar>
    </aside>
    <main>
      <header>
        <the-searcher></the-searcher>
      </header>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  color: #585A69;
}
body {
  background: rgb(32, 15, 86);
}
#app {
  display: flex;
}
aside {
  width: 30%;
  max-width: 350px;
}

main {
  width: 100%;
  padding-left: 80px;
  padding-top: 30px;
}
</style>
