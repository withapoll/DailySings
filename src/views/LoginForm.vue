<template>
  <div class="login-form">
    <div class="login-form-conteiner">
      <div class="login-form-header">
        <div class="login-form-logo">
          <router-link to="/">
            <i class="bi bi-arrow-left"></i>
          </router-link>
          <p>DailySings</p>
        </div>
      </div>
      <form>
        <div class="form-input">
          <label for="email">Ваш Логин</label>
          <input type="email" id="email" />
          <label for="password">Ваш пароль</label>
          <input type="password" id="password" />
          <button>Войти</button>
          <button>Зарегистрироваться</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  p {
    font-size: 2rem;
  }
  .login-form-conteiner {
    background-color: #01031c;
    padding: 2rem;
    border-radius: 2rem;
    width: 807px;
    height: 350px;
  }
  .login-form-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 1.5rem;
    }
    .login-form-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        margin-right: 1rem;
      }
    }
  }
  .form-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input {
      margin-bottom: 1rem;
    }
  }
  button {
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 1.5rem;
    }
  }
}
</style>
