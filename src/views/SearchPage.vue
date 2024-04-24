<template>
  <div>
    <div class="search-bar">
      <input type="text" v-model="searchTerm" placeholder="Искать Исполнителя" />
    </div>
    <div class="search-results" v-if="filteredArtists.length > 0">
      <h2>Исполнители</h2>
      <ArtistCards :artists="filteredArtists" />
    </div>
    <div class="no-results" v-else>
      <h3>Ничего не найдено</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArtistCards from '../components/ArtistsCards.vue'

let searchTerm = ref('')
let artists = [
  { id: 1, name: 'gu1vazZ' },
  { id: 2, name: 'Lonewj' },
  { id: 3, name: 'Berry Miracle' },
  { id: 4, name: 'TRYFG' },
  { id: 5, name: 'Josodo' },
  { id: 6, name: 'woee33' },
  { id: 7, name: 'FENDIGLOCK' }
]

let filteredArtists = computed(() => {
  return artists.filter((artist) => {
    return artist.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  })
})
</script>

<style scoped>
.search-bar {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 6rem;
  margin-bottom: 2rem;
  margin-left: 2rem;

  input {
    background-color: #191919;
    color: #fff;
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    width: 807px;
    outline: none;
  }
}

.search-results {
  h2 {
    color: #d9c6fe;
    margin-left: 2rem;
  }

  .artists-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .artist-card {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  }
}

.no-results {
  text-align: left;
  margin-top: 2rem;
  margin-left: 2rem;

  p {
    color: #d9c6fe;
  }
}
</style>
