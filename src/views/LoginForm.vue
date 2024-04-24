<template>
  <div class="login-form">
    <div class="login-form-conteiner">
      <div class="login-form-header">
        <div class="login-form-logo">
          <router-link to="/">
            <i class="bi bi-arrow-left"></i>
          </router-link>
          <h3>DailySings</h3>
        </div>
      </div>
      <div class="login">
        <form @submit.prevent="handleLogin">
          <div class="form-input">
            <label for="email">Ваш Логин</label>
            <input type="email" id="email" v-model="email" />
            <label for="password">Ваш пароль</label>
            <input type="password" id="password" v-model="password" />
            <div class="buttons">
              <button type="submit" :disabled="isLoading">
                <span v-if="isLoading">Loading...</span>
                <span v-else>Войти</span>
              </button>
              <button @click="$router.push('/registration')">Зарегистрироваться</button>
            </div>
          </div>
        </form>
        <img src="../../public/app-logo.svg" alt="App Logo" />
      </div>
    </div>
  </div>
  <BottomPage />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BottomPage from '../components/BottomPage.vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const isLoading = ref(false)

const handleLogin = () => {
  isLoading.value = true

  const demoEmail = 'polunin.me@gmail.com'
  const demoPassword = 'password'

  setTimeout(() => {
    // Simulate network delay
    if (email.value === demoEmail && password.value === demoPassword) {
      localStorage.setItem('username', email.value)

      router.push('/')
    } else {
      alert('Invalid credentials')
    }

    isLoading.value = false
  }, 2000)
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 5rem;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 2rem;
  }
  .login-form-conteiner {
    background-color: #01031c;
    padding: 2rem;
    border-radius: 2rem;
    width: 807px;
    height: 370px;
  }
  .login-form-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 1.5rem;
    }
  }
  .login-form-logo {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    margin-right: 12rem;
    gap: 10rem;
    p {
      margin-left: 1rem;
    }
    i {
      cursor: pointer;
      color: #ffffff;
      font-size: 1.5rem;
      margin-right: 1rem;
    }
  }
  .form-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input {
      margin-bottom: 1rem;
      width: 25rem;
      height: 0;
      padding: 1rem;
      border: none;
      outline: none;
      background-color: #010219;
      color: #fff;
      box-shadow: inset 0 -1px 0 #fff;
      &::placeholder {
        color: #fff;
      }
    }
  }
  button {
    margin-top: 1rem;
    width: 12rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #010219;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #5f43cb;
    }
    &:active {
      background-color: #5f43cb;
    }
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1.5rem;
    }
  }
}
</style>
