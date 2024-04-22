<template>
  <div class="artist-cards">
    <div
      class="artist-card"
      v-for="artist in artists"
      :key="artist.id"
      @click="navigateToArtist(artist.id)"
    >
      <img :src="artist.imageUrl" :alt="artist.name" />
      <p>{{ artist.name }}</p>
    </div>
  </div>
</template>

<script setup>
import gu1vazZ from '../assets/DailySings Stars/artists images/gu1vazZ.jpg'
import Berry_Miracle from '../assets/DailySings Stars/artists images/Berry Miracle.jpg'
import Lonewj from '../assets/DailySings Stars/artists images/Lonewj.png'
import TRYFG from '../assets/DailySings Stars/artists images/TRYFG.jpg'
import Josodo from '../assets/DailySings Stars/artists images/Josodo.jpg'
import woee33 from '../assets/DailySings Stars/artists images/woee33.jpg'
import FENDIGLOCK from '../assets/DailySings Stars/artists images/FENDIGLOCK.jpg'

import { useRouter } from 'vue-router'

const router = useRouter()
const artists = [
  { id: 1, name: 'gu1vazZ', imageUrl: gu1vazZ, bio: 'Bio for gu1vazZ 1' },
  { id: 2, name: 'Lonewj', imageUrl: Lonewj, bio: 'Bio for gu1vazZ 3' },
  { id: 3, name: 'Berry Miracle', imageUrl: Berry_Miracle, bio: 'Bio for gu1vazZ 2' },
  { id: 4, name: 'TRYFG', imageUrl: TRYFG },
  { id: 5, name: 'Josodo', imageUrl: Josodo, bio: 'Bio for gu1vazZ 5' },
  { id: 6, name: 'woee33', imageUrl: woee33, bio: 'Bio for gu1vazZ 6' },
  { id: 7, name: 'FENDIGLOCK', imageUrl: FENDIGLOCK, bio: 'Bio for gu1vazZ 7' }
]

const navigateToArtist = (artistId) => {
  router.push({ name: 'Artist', params: { id: artistId } })
}
</script>

<style lang="scss" scoped>
.artist-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 2rem;
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }
}

.artist-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>
