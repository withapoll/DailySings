<script setup>
import HomePage from '../src/views/HomePage.vue'
import NavigationBar from '../src/components/NavigationBar.vue'
</script>

<template>
  <NavigationBar />
  <HomePage />
  <!-- <router-view /> -->

  <!-- rewrite code in App.vueto fix router bag will look like this
  <template>
  <div id="app">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default {
  components: {
    NavigationBar,
  },
};
</script> -->
</template>

<style scoped></style>
