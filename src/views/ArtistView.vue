<template>
  <div class="artist-view">
    <div v-if="artist" class="artist-details">
      <h2>{{ artist.name }}</h2>
      <img :src="artist.imageUrl" :alt="artist.name" />
      <p>{{ artist.bio }}</p>
    </div>
    <div v-else>
      <p>Loading artist details...</p>
    </div>
  </div>
  <button @click="$router.push('/add-review')">Добавить рецензию</button> //configure that button
  will redirect me to add review page with artist id and his data
</template>

<script>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

export default {
  name: 'ArtistView',
  props: {
    artists: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const artist = ref(null)

    onMounted(() => {
      const artistId = route.params.id
      fetchArtistData(artistId)
    })

    const fetchArtistData = (artistId) => {
      if (props.artists && props.artists.length > 0) {
        const foundArtist = props.artists.find((artist) => artist.id === parseInt(artistId))
        artist.value = foundArtist
      }
    }

    return {
      artist
    }
  }
}
</script>

<style scoped>
.artist-view {
  margin-top: 6rem;
  background-color: #191919;
  border-radius: 1rem;
  max-width: 800px;
}

.artist-details {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  background-color: #5f43cb;
  color: #fff;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
