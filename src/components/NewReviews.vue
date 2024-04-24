<template>
  <div class="new-reviews-cards">
    <div class="new-reviews-card" v-for="review in reviews" :key="review.id">
      <div class="card-header">
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
import { ref } from 'vue'

const reviews = ref([
  {
    id: 1,
    username: 'john@mail.ru',
    createdAt: '2024-04-24',
    title: 'Великолепный трек!',
    content:
      'Этот музыкальный трек просто великолепен! Он имеет уникальное звучание, которое сразу же привлекает внимание. Мелодия захватывающая, а ритм заставляет двигаться. Я особенно люблю использовать этот трек во время тренировок, он действительно помогает мне сосредоточиться и улучшить свои результаты. Очень рекомендую!',
    showFullReview: false
  },
  {
    id: 2,
    username: 'jane@mail.com',
    createdAt: '2024-04-23',
    title: 'Могло быть лучше',
    content:
      'Этот музыкальный трек неплох, но есть некоторые аспекты, которые, по моему мнению, могли бы быть улучшены. Например, я думаю, что мелодия могла бы быть более разнообразной, а ритм - более стабильным. Тем не менее, я ценю творческий подход и усилия, вложенные в создание этого трека',
    showFullReview: false
  },
  {
    id: 3,
    username: 'bob@mail.me',
    createdAt: '2024-04-22',
    title: 'Отличный трек!',
    content:
      'Я действительно наслаждался прослушиванием этого трека. Он имеет отличный баланс между мелодией и ритмом, что делает его идеальным для прослушивания в любое время дня. Я особенно люблю слушать его во время работы, потому что он помогает мне сосредоточиться и быть более продуктивным.',
    showFullReview: false
  },
  {
    id: 4,
    username: 'alice@mail.ru',
    createdAt: '2024-04-21',
    title: 'Могло быть лучше',
    content:
      'Этот музыкальный трек нормальный, но есть некоторые аспекты, которые, по моему мнению, могли бы быть улучшены. Например, я думаю, что мелодия могла бы быть более яркой, а ритм - более динамичным. В целом, это неплохой трек, но есть потенциал для улучшения',
    showFullReview: false
  }
])

const toggleReview = (review) => {
  review.showFullReview = !review.showFullReview
}

const truncatedContent = (content) => {
  return content.slice(0, 100) + '...'
}
</script>

<style lang="scss" scoped>
.new-reviews-cards {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 1rem;
  margin-left: 2rem;
}

.new-reviews-card {
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
