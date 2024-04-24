<template>
  <div class="feed-title">
    <h2>Лента Рецензий</h2>
  </div>
  <div class="feed">
    <!-- <NewReviews v-for="review in latestReviews" :key="review.id" :review="review" /> -->
    <NewReviews />
    <NewReviews />
  </div>
</template>

<script setup>
import axios from 'axios'
import NewReviews from '../components/NewReviews.vue'
import { ref, onMounted } from 'vue'

const latestReviews = ref([])

const fetchLatestReviews = async () => {
  try {
    const response = await axios.get('/api/latest-reviews/')
    latestReviews.value = response.data.reviews
  } catch (error) {
    console.error('Error fetching latest reviews:', error)
  }
}

onMounted(fetchLatestReviews)
</script>

<style lang="scss" scoped>
.feed-title {
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
  h2 {
    color: #fec6c6;
  }
}
.feed {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
