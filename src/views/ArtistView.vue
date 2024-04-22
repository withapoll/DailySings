<template>
  <div class="artist-view">
    <div v-if="artist" class="artist-details">
      <div class="artist-image">
        <img :src="artist.imageUrl" :alt="artist.name" />
      </div>
      <div class="artist-bio">
        <h2>{{ artist.name }}</h2>
        <p>{{ artist.bio }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading artist details...</p>
    </div>
    <button @click="navigateToAddReview">Оставить рецензию</button>
  </div>
  <div class="track-list">
    <TrackList />
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import TrackList from '../components/TrackList.vue'
import gu1vazZ from '../assets/DailySings Stars/artists images/gu1vazZ.jpg'
import Berry_Miracle from '../assets/DailySings Stars/artists images/Berry Miracle.jpg'
import Lonewj from '../assets/DailySings Stars/artists images/Lonewj.png'
import TRYFG from '../assets/DailySings Stars/artists images/TRYFG.jpg'
import Josodo from '../assets/DailySings Stars/artists images/Josodo.jpg'
import woee33 from '../assets/DailySings Stars/artists images/woee33.jpg'
import FENDIGLOCK from '../assets/DailySings Stars/artists images/FENDIGLOCK.jpg'

const route = useRoute()
const router = useRouter()
const artist = ref(null)

onMounted(() => {
  const artistId = route.params.id
  fetchArtistData(artistId)
})

const fetchArtistData = (artistId) => {
  const artists = [
    {
      id: '1',
      name: 'gu1vazZ',
      imageUrl: gu1vazZ,
      bio: 'Молодой артист из России, проживает в г. Москва, 19 лет. Выступал на сцене в одном из клубов г. Москва, вместе с артистами Lonewj и Berry Miracle. '
    },
    { id: '2', name: 'Lonewj', imageUrl: Lonewj, bio: 'Bio for Lonewj' },
    { id: '3', name: 'Berry Miracle', imageUrl: Berry_Miracle, bio: 'Bio for Berry Miracle' },
    { id: '4', name: 'TRYFG', imageUrl: TRYFG, bio: 'Bio for TRYFG' },
    { id: '5', name: 'Josodo', imageUrl: Josodo, bio: 'Bio for Josodo' },
    { id: '6', name: 'woee33', imageUrl: woee33, bio: 'Bio for woee33' },
    { id: '7', name: 'FENDIGLOCK', imageUrl: FENDIGLOCK, bio: 'Bio for FENDIGLOCK' }
  ]

  const foundArtist = artists.find((artist) => artist.id === artistId)

  artist.value = foundArtist
}

const navigateToAddReview = () => {
  const artistId = route.params.id
  router.push({ name: 'AddReview', params: { artistId } })
}

const artistToExpose = artist
const navigateToAddReviewToExpose = navigateToAddReview
</script>

<style scoped>
.artist-view {
  margin-top: 6rem;
  background-color: #101010;
  border-radius: 1rem;
  width: 76rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.artist-details {
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
}

.artist-image {
  width: 50%;
}

h2 {
  color: #d9c6fe;
  margin-bottom: 1rem;
}

img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

p {
  color: #ffffff;
  text-align: justify;
  line-height: 1.5;
}

button {
  margin-bottom: 4rem;
  margin-left: 6rem;
  width: 20rem;
  height: 3rem;
  background-color: #191919;
  color: #fff;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #5f43cb;
    color: #fff;
  }
}
</style>
