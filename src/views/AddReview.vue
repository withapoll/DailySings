<template>
  <div class="text-title">
    <i class="bi bi-arrow-left-circle" @click="$router.go(-1)"></i>
    <h3>Добавить рецензию</h3>
  </div>
  <div class="add-review">
    <h2 v-if="artist">{{ artist.name }}</h2>
    <p v-else>Loading artist details...</p>
    <AddReviewForm v-if="artist" :artist="artist" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import AddReviewForm from '../components/AddReviewForm.vue'

const route = useRoute()
const artist = ref(null)

onMounted(() => {
  const artistId = route.params.artistId
  fetchArtistData(artistId)
})

const fetchArtistData = async (artistId) => {
  const fetchedArtist = await fetchArtistDataFromAPI(artistId)
  artist.value = fetchedArtist
}

const fetchArtistDataFromAPI = async (artistId) => {
  // Simulating data fetching delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // actual list of artists
  const artists = [
    { id: '1', name: 'gu1vazZ' },
    { id: '2', name: 'Lonewj' },
    { id: '3', name: 'Berry Miracle' },
    { id: '4', name: 'TRYFG' },
    { id: '5', name: 'Josodo' },
    { id: '6', name: 'woee33' },
    { id: '7', name: 'FENDIGLOCK' }
  ]

  // Find the artist with the matching ID
  const artist = artists.find((artist) => artist.id === artistId)

  return artist
}
</script>

<style lang="scss" scoped>
.text-title {
  display: flex;
  flex-direction: row;
  text-align: left;
  margin-top: 6rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  h3 {
    color: #d9c6fe;
  }
  i {
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: #d9c6fe;
  }
}
.add-review {
  margin-left: 2rem;
  margin-bottom: 2rem;
}
</style>
