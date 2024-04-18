<template>
  <div>
    <template v-if="$route.name !== 'Login'">
      <NavigationBar />
    </template>
    <RouterView />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import './assets/global.css'

const route = useRoute()
</script>

<style lang="scss" scoped></style>
