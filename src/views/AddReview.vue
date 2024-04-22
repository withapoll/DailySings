<template>
  <div class="text-title">
    <i class="bi bi-arrow-left-circle" @click="$router.go(-1)"></i>
    <h3>Добавить рецензию</h3>
  </div>
  <div class="add-review">
    <AddReviewForm />
  </div>
</template>

<script setup>
import AddReviewForm from '../components/AddReviewForm.vue'
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
</style>
