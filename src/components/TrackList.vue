<template>
  <div class="track-list-container">
    <div class="track-list-header">
      <h3>Track List</h3>
    </div>
    <div class="track-list">
      <div class="track" v-for="track in filteredTracks" :key="track.id">
        <h4>{{ track.name }}</h4>
        <p>{{ track.bio }}</p>
        <p><strong>Artist:</strong> {{ getArtistName(track.artist) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

const route = useRoute()

const artists = ref([
  { id: 1, name: 'gu1vazZ' },
  { id: 2, name: 'Lonewj' },
  { id: 3, name: 'Berry Miracle' },
  { id: 4, name: 'TRYFG' },
  { id: 5, name: 'Josodo' },
  { id: 6, name: 'woee33' },
  { id: 7, name: 'FENDIGLOCK' }
])

const tracks = ref([
  { id: 1, name: 'Track 1', bio: 'Bio for Track 1', artist: 1 },
  { id: 2, name: 'Track 2', bio: 'Bio for Track 2', artist: 2 },
  { id: 3, name: 'Track 3', bio: 'Bio for Track 3', artist: 3 },
  { id: 4, name: 'Track 4', bio: 'Bio for Track 4', artist: 4 },
  { id: 5, name: 'Track 5', bio: 'Bio for Track 5', artist: 5 },
  { id: 6, name: 'Track 6', bio: 'Bio for Track 6', artist: 6 },
  { id: 7, name: 'Track 7', bio: 'Bio for Track 7', artist: 7 }
])

const getArtistName = (artistId) => {
  const artist = artists.value.find((artist) => artist.id === artistId)
  return artist ? artist.name : 'Unknown Artist'
}

const filteredTracks = computed(() => {
  const artistId = Number(route.params.id) // convert to number
  return tracks.value.filter((track) => track.artistId === artistId)
})
</script>

<style lang="scss" scoped>
.track-list-container {
  margin-top: 2rem;
  margin-left: 2rem;
}
.track-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.track {
  background-color: #191919;
  padding: 1rem;
  border-radius: 0.5rem;
  color: #fff;

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }
}
</style>
