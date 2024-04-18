<template>
  <div class="feed-title">
    <h2>Лента Рецензий</h2>
  </div>
  <div class="feed">
    <NewReviews />
    <NewReviews />
  </div>
</template>

<script setup>
import NewReviews from '../components/NewReviews.vue'
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
