<template>
  <div class="reg-form">
    <div class="reg-form-conteiner">
      <div class="reg-form-header">
        <div class="reg-form-logo">
          <router-link to="/">
            <i class="bi bi-arrow-left"></i>
          </router-link>
          <h3>DailySings</h3>
        </div>
      </div>
      <div class="reg">
        <form>
          <div class="form-input">
            <label for="email">Ваш Логин</label>
            <input type="email" id="email" />
            <label for="password">Ваш пароль</label>
            <input type="password" id="password" />
            <div class="buttons">
              <button>Зарегистрироваться</button>
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
import BottomPage from '../components/BottomPage.vue'
</script>

<style lang="scss" scoped>
.reg {
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 5rem;
}
.reg-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 2rem;
  }
  .reg-form-conteiner {
    background-color: #01031c;
    padding: 2rem;
    border-radius: 2rem;
    width: 807px;
    height: 370px;
  }
  .reg-form-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 1.5rem;
    }
  }
  .reg-form-logo {
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
