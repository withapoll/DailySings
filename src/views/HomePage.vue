<template>
  <div class="artist-text">
    <h2>Исполнители</h2>
  </div>
  <div class="artist-cards">
    <div class="artist-card">
      <img src="../../public/artist-1.jpg" alt="Artist 1" />
      <p>Artist 1</p>
    </div>
    <div class="artist-card">
      <img src="../../public/artist-2.jpg" alt="Artist 2" />
      <p>Artist 2</p>
    </div>
    <div class="artist-card">
      <img src="../../public/artist-3.jpg" alt="Artist 3" />
      <p>Artist 3</p>
    </div>
    <div class="artist-card">
      <img src="../../public/artist-4.jpg" alt="Artist 4" />
      <p>Artist 4</p>
    </div>
    <div class="artist-card">
      <img src="../../public/artist-5.jpg" alt="Artist 5" />
      <p>Artist 5</p>
    </div>
    <div class="artist-card">
      <img src="../../public/artist-5.jpg" alt="Artist 6" />
      <p>Artist 6</p>
    </div>
    <div class="artist-card">
      <img src="../../public/artist-5.jpg" alt="Artist 7" />
      <p>Artist 7</p>
    </div>
  </div>
  <div class="new-reviews-text">
    <h2>Новые Рецензии</h2>
  </div>
  <div class="new-reviews-cards">
    <div class="new-reviews-card">
      <img src="../../public/review-1.jpg" alt="Review 1" />
      <p>Review 1</p>
    </div>
    <div class="new-reviews-card">
      <img src="../../public/review-1.jpg" alt="Review 1" />
      <p>Review 1</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.artist-text {
  text-align: left;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.artist-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.new-reviews-text {
  text-align: left;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.new-reviews-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
