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
import { useStore } from 'vuex'

const props = defineProps({
  artist: {
    type: Object,
    required: true
  }
})

const store = useStore()
const reviewTitle = ref('')
const reviewContent = ref('')

const submitReview = async () => {
  const review = {
    title: reviewTitle.value,
    content: reviewContent.value,
    artist: props.artist,
    username: localStorage.getItem('username'),
    createdAt: new Date().toLocaleDateString()
  }

  store.commit('addReview', review)

  reviewTitle.value = ''
  reviewContent.value = ''
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
