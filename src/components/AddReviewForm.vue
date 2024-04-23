<template>
  <div class="add-review-form">
    <h3>Ваша рецензия</h3>
    <p>Добавление рецензии для {{ artist.name }}</p>
    <form @submit.prevent="submitReview">
      <div class="form-input">
        <label for="title">Заголовок</label>
        <input type="text" id="title" v-model="reviewTitle" required />
        <label for="content">Текст</label>
        <textarea id="content" v-model="reviewContent" required></textarea>
        <button type="submit">Отправить рецензию</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  artist: {
    type: Object,
    required: true
  }
})

const reviewTitle = ref('')
const reviewContent = ref('')

const submitReview = async () => {
  const review = {
    title: reviewTitle.value,
    content: reviewContent.value,
    artist: props.artist
  }

  // Send the review data to your server or API
  try {
    await sendReviewToServer(review)
    // Reset form fields or show success message
    reviewTitle.value = ''
    reviewContent.value = ''
    alert('Review submitted successfully!')
  } catch (error) {
    console.error('Error submitting review:', error)
    alert('Error submitting review. Please try again.')
  }
}

// Replace this with actual function to send the review data to server or API
const sendReviewToServer = async (review) => {
  // Simulating server request
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log('Review data:', review)
}
</script>

<style lang="scss" scoped>
.add-review-form {
  margin-left: 2rem;
}
.form-input {
  display: flex;
  flex-direction: column;
  align-items: left;
  button {
    margin-top: 1rem;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem;
    width: 25rem;
    background-color: #191919;
    color: #fff;
    &:hover {
      background-color: #5f43cb;
    }
  }
  label {
    color: #d9c6fe;
  }
  input,
  textarea {
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem;
    width: 25rem;
    background-color: #191919;
    color: #d9c6fe;
    &:focus {
      outline: none;
    }
  }
}
</style>
