<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <a class="navbar-brand" href="#">
        <img src="../../public/app-logo.svg" alt="Logo" />
      </a>
      <div class="nav-content d-flex align-items-center">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/" exact-active-class="active" class="nav-link">
              <i class="bi bi-house-fill"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/feed" active-class="active" class="nav-link">
              <i class="bi bi-bookmark-fill"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/search" active-class="active" class="nav-link">
              <i class="bi bi-search"></i>
            </router-link>
          </li>
        </ul>
        <div class="user-icon dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-person-circle"></i>
          </a>
          <ul class="dropdown-menu">
            <li v-if="!isLoggedIn">
              <router-link class="dropdown-item" to="/login" replace>Войти</router-link>
            </li>
            <li v-else>
              <a class="dropdown-item">{{ username }}</a>
              <a class="dropdown-item" @click="handleLogout">Выйти</a>
            </li>
          </ul>
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav"></div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import 'bootstrap-icons/font/bootstrap-icons.css'

const username = ref('')
const isLoggedIn = ref(false)

onMounted(() => {
  const storedUsername = localStorage.getItem('username')
  if (storedUsername) {
    username.value = storedUsername
    isLoggedIn.value = true
  }
})

const handleLogout = () => {
  localStorage.removeItem('username')
  username.value = ''
  isLoggedIn.value = false
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  img {
    width: 3.125rem;
  }
}

.navbar {
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  .nav-content {
    width: 100%;
  }

  .nav-link {
    color: #424242;
    margin-right: 2rem;

    i {
      color: #424242;
    }

    &:hover {
      color: #fff;

      i {
        color: #fff;
      }
    }

    &.active {
      color: #fff;

      i {
        color: #fff;
      }
    }
  }

  .nav-item:last-child .nav-link {
    margin-right: 0;
  }

  .bi-person-circle,
  .bi-house-fill,
  .bi-bookmark-fill,
  .bi-search {
    font-size: 1.7rem;
  }
}

.bg-dark {
  background-color: #131313 !important;
}

.dropdown-menu {
  background-color: #131313;
  border: none;

  .dropdown-item {
    color: #fff;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #5f43cb;
    }
  }
}
</style>
