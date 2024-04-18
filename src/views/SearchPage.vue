<template>
  <div class="search-bar">
    <input type="text" placeholder="Поиск" />
  </div>
  <div class="search-results">
    <h2>Исполнители</h2>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  margin-bottom: 2rem;
  margin-left: 2rem;

  input {
    background-color: #191919;
    color: #fff;
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    width: 807px;
  }
}
</style>
