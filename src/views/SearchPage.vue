<template>
  <div class="search-bar">
    <input type="text" v-model="searchTerm" placeholder="Поиск" />
  </div>
  <div class="search-results" v-if="filteredArtists.length > 0">
    <h2>Исполнители</h2>
    <ul>
      <li v-for="artist in filteredArtists" :key="artist.id">{{ artist.name }}</li>
    </ul>
  </div>
  <div class="no-results" v-else>
    <h3>Ничего не найдено</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      artists: [
        { id: 1, name: 'gu1vazZ' },
        { id: 2, name: 'Lonewj' },
        { id: 3, name: 'Berry Miracle' },
        { id: 4, name: 'TRYFG' },
        { id: 5, name: 'Josodo' },
        { id: 6, name: 'woee33' },
        { id: 7, name: 'sdf' }
      ]
    }
  },
  computed: {
    filteredArtists() {
      return this.artists.filter((artist) => {
        return artist.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    }
  }
}
</script>

<style lang="scss" scoped>
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

  ul {
    display: flex;
    flex-direction: row;
    align-items: left;
    list-style: none;
    margin: 1rem;
    gap: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
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
