<template>
  <div class="bottom-page">
    <div class="bottom-page-conteiner">
      <div class="bottom-page-logo">
        <img src="../../public/app-logo.svg" alt="App Logo" />
      </div>
      <div class="bottom-page-links">
        <!-- <div class="bottom-page-links-item">
          <p>Политика конфиденциальности</p>
        </div>
        <div class="bottom-page-links-item">
          <p>Правила использования</p>
        </div>
        <div class="bottom-page-links-item">
          <p>Контакты</p>
        </div> -->
        <div class="copyright">
          <p>© 2023 DailySings. Все права защищены.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bottom-page {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #101010;
  height: 4rem;
  .bottom-page-conteiner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .bottom-page-logo {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    img {
      width: 3rem;
    }
    p {
      margin-left: 1rem;
      color: #ffffff;
    }
  }
  .bottom-page-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .copyright {
    margin-right: 2rem;
    p {
      color: #ffffff;
    }
  }
}
</style>
