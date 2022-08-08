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
          <div class="featured-playlists-cards">
            <featured-playlists-card
              v-for="playlist in featuredPlaylists"
              :key="playlist.playlistName"
              :name="playlist.playlistName"
              :tracks-amount="playlist.tracks"
              :image="playlist.image"
            ></featured-playlists-card>
          </div>
        </div>
      </section>
      <section class="profileAndaTracks-area">
        <div class="profile-views">
          <h3>Profile Views</h3>
          <profile-views
            v-for="profile in profileViews"
            :key="profile.name"
            :image="profile.image"
          ></profile-views>
        </div>
        <div>2</div>
      </section>
    </main>
  </div>
</template>

<script>
import playlistImage1 from '@/assets/playlist1.jpg'
import playlistImage2 from '@/assets/playlist2.jpg'
import playlistImage3 from '@/assets/playlist3.jpg'
import playlistImage4 from '@/assets/playlist4.jpg'
import ProfileViews from './components/ProfileViews.vue'

import profileView1 from '@/assets/view1.jpg';
import profileView2 from '@/assets/view2.jpg';
import profileView3 from '@/assets/view3.jpg';

export default {
  components: { ProfileViews },
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
      ],
      profileViews: [
        {
          name: 'Jenny Villa',
          daysAgo: 1,
          albuns: 4,
          image: profileView1
        },
        {
          name: 'Aquila',
          daysAgo: 3,
          albuns: 2,
          image: profileView2
        },
        {
          name: 'This is War',
          daysAgo: 14,
          albuns: 5,
          image: profileView3
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
  background: #1D1632;
}
#app {
  display: flex;
  overflow: hidden;
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
.featured-playlists-cards {
  display: flex;
  width: 80%;
  overflow-x: scroll;
  gap: 20px;
  padding-bottom: 30px;
}
.featured-playlists h3 {
  color: #FFF;
  margin: 70px 0 30px 0;
}
::-webkit-scrollbar-track {
  background-color: #1F1839;
  height: 6px;
  width: 6px;
  border-radius: 50px;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  border-radius: 50px;
  background: #200F56;
}
::-webkit-scrollbar-thumb {
  background: #200F56;
  border-radius: 50px;
}

.profileAndaTracks-area {
  display: flex;
  padding-top: 30px;
}

.profile-views {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.profile-views h3{
  color: #FFF;
}
</style>
