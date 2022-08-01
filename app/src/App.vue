<template>
  <div id="app">
    <aside>
      <side-bar></side-bar>
    </aside>
    <main>
      <header>
        <the-searcher></the-searcher>
      </header>
      <section>
        <div class="featured-playlists">
          <h3>Featured Playlists</h3>
          <featured-playlists 
            v-for="playlist in featuredPlaylists"
            :key="playlist.playlistName"
            :name="playlist.playlistName"
            :tracks-amount="playlist.tracks"
            :image="playlist.image"
          ></featured-playlists>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import playlistImage1 from '@/assets/playlist1.jpg'
import playlistImage2 from '@/assets/playlist2.jpg'
import playlistImage3 from '@/assets/playlist3.jpg'
import playlistImage4 from '@/assets/playlist4.jpg'


export default {
  name: 'App',
  data() {
    return {
      featuredPlaylists: [
        {
          playlistName: 'Only STARDUST',
          tracks: '24 tracks',
          image: playlistImage1
        },
        {
          playlistName: 'Mike Vella',
          tracks: '12 tracks',
          image: playlistImage2
        },
        {
          playlistName: 'The best singles S2',
          tracks: '163 tracks',
          image: playlistImage3
        },
        {
          playlistName: 'Indie Vibe',
          tracks: '138 tracks',
          image: playlistImage4
        }
      ]
    }
  },
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

.featured-playlists h3 {
  color: #FFF;
}
</style>
