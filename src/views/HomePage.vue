<template>
  <div>
    <div class="artist-text">
      <h2>Исполнители</h2>
    </div>
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
    <div class="new-reviews">
      <div class="new-reviews-text">
        <h2>Новые Рецензии</h2>
      </div>
      <div class="new-reviews-cards">
        <div class="cards">
          <!-- <NewReviews v-for="review in latestReviews" :key="review.id" :review="review" /> -->
          <NewReviews />
          <div class="old-reviews-cards">
            <div class="old-cards">
              <OldReviews />
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomPage />
    <router-view :artists="artists" />
  </div>
</template>

<script setup>
// import axios from 'axios'
import OldReviews from '../components/OldReviews.vue'
import NewReviews from '../components/NewReviews.vue'
import BottomPage from '../components/BottomPage.vue'
import gu1vazZ from '../assets/DailySings Stars/artists images/gu1vazZ.jpg'
import Berry_Miracle from '../assets/DailySings Stars/artists images/Berry Miracle.jpg'
import Lonewj from '../assets/DailySings Stars/artists images/Lonewj.png'
import TRYFG from '../assets/DailySings Stars/artists images/TRYFG.jpg'
import Josodo from '../assets/DailySings Stars/artists images/Josodo.jpg'
import woee33 from '../assets/DailySings Stars/artists images/woee33.jpg'
import FENDIGLOCK from '../assets/DailySings Stars/artists images/FENDIGLOCK.jpg'
// import { ref, onMounted } from 'vue'
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

// const latestReviews = ref([])
// const fetchLatestReviews = async () => {
//   try {
//     const response = await axios.get('/api/latest-reviews/')
//     latestReviews.value = response.data.reviews
//   } catch (error) {
//     console.error('Error fetching latest reviews:', error)
//   }
// }

// onMounted(fetchLatestReviews)
</script>

<style lang="scss" scoped>
.artist-text {
  text-align: left;
  margin-top: 6rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  h2 {
    color: #d9c6fe;
  }
}

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
.new-reviews-text {
  text-align: left;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  h2 {
    width: 10rem;
    color: #fec6c6;
  }
}

.new-reviews-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: auto;
}

.old-reviews-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.old-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: auto;
}
</style>
