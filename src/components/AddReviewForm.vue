<template>
  <div class="add-review-form">
    <h3>Ваша рецензия</h3>
    <form>
      <div class="form-input">
        <label for="title">Заголовок</label>
        <input type="text" id="title" />
        <label for="content">Текст</label>
        <textarea id="content"></textarea>
        <button>Отправить рецензию</button>
      </div>
    </form>
  </div>
</template>

<script setup></script>

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
