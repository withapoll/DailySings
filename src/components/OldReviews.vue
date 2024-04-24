<template>
  <div class="old-reviews-cards">
    <div class="old-reviews-card" v-for="review in reviews" :key="review.id">
      <div class="card-header" :style="{ backgroundColor: getHeaderColor(review.id) }">
        <div class="user">
          <i class="bi bi-person-circle"></i>
          <div class="user-info">
            <p>{{ review.username }}</p>
            <p>{{ review.createdAt }}</p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h3>{{ review.title }}</h3>
        <p v-if="review.showFullReview">{{ review.content }}</p>
        <p v-else>{{ truncatedContent(review.content) }}</p>
      </div>
      <div class="card-footer">
        <hr />
        <i class="bi bi-eye-fill" @click="toggleReview(review)"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
const getHeaderColor = (id) => {
  switch (id) {
    case 1:
      return '#9c1e6b'
    case 2:
      return '#5F43CB'
    case 3:
      return '#831E9C'
    default:
      return '#9c1e6b'
  }
}

const reviews = [
  {
    id: 1,
    username: 'denis@mail.ru',
    title: 'Лучший Исполнитель! Подпивайтесь на gu1vazZ!',
    content: 'Очень Классные Треки',
    createdAt: '2022-01-01',
    showFullReview: false
  },
  {
    id: 2,
    username: 'polina@mail.me',
    title: 'Крутой трек Bless от Lonewj',
    content: 'Крутой трек, мне очень понравился',
    createdAt: '2022-01-02',
    showFullReview: false
  },
  {
    id: 3,
    username: 'lera@mail.corp',
    title: 'Классные обложки у FENDIGLOCK',
    content: 'И Треки тоже!',
    createdAt: '2022-01-03',
    showFullReview: false
  }
]

const truncatedContent = (content) => {
  return content.slice(0, 100) + '...'
}
</script>

<style lang="scss" scoped>
.old-reviews-cards {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 1rem;
}

.old-reviews-card {
  width: 55.5rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  background-color: #191919;
  border-radius: 1rem;
}

.card-header {
  margin-top: 0.7rem;
  margin-left: 0.7rem;
  width: 54rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  background-color: #9c1e6b;
  border-radius: 1rem;
}

.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  i {
    margin-left: 1rem;
    margin-right: 1rem;
    color: #ffffff;
    font-size: 1.7rem;
  }
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
}

.user-info p {
  margin: 0;
}

.card-body {
  width: fit-content;
  height: fit-content;
  margin-left: 1rem;
  p {
    margin: 0;
    width: 52rem;
  }
  h3 {
    margin-bottom: 0.7rem;
  }
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.card-footer {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-bottom: 1rem;
  margin-left: 1rem;

  hr {
    width: 98%;
    border: 1px solid #777777;
  }

  i {
    color: #777777;
    font-size: 1.2rem;
    cursor: pointer;
  }
}
</style>
