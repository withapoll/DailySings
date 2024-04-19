<template>
  <div class="artist-text">
    <h2>Исполнители</h2>
  </div>
  <div class="artist-cards">
    <div class="artist-card">
      <img src="../../public/artist-1.jpg" alt="Artist 1" />
      <p>gu1vazZ 1</p>
    </div>
    <div class="artist-card">
      <img src="../../public/artist-2.jpg" alt="Artist 2" />
      <p>Lonewj</p>
    </div>
    <div class="artist-card">
      <img src="../../public/artist-3.jpg" alt="Artist 3" />
      <p>Berry Miracle</p>
    </div>
    <div class="artist-card">
      <img src="../../public/artist-4.jpg" alt="Artist 4" />
      <p>TRYFG</p>
    </div>
    <div class="artist-card">
      <img src="../../public/artist-5.jpg" alt="Artist 5" />
      <p>Josodo</p>
    </div>
    <div class="artist-card">
      <img src="../../public/artist-5.jpg" alt="Artist 6" />
      <p>woee33</p>
    </div>
    <div class="artist-card">
      <img src="../../public/artist-5.jpg" alt="Artist 7" />
      <p>FENDIGLOCK</p>
    </div>
  </div>
  <div class="new-reviews">
    <div class="new-reviews-text">
      <h2>Новые Рецензии</h2>
    </div>
    <div class="new-reviews-cards">
      <div class="cards">
        <NewReviews />
        <NewReviews />
      </div>
    </div>
  </div>
  <BottomPage />
</template>

<script setup>
import NewReviews from '../components/NewReviews.vue'
import BottomPage from '../components/BottomPage.vue'
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
</style>
