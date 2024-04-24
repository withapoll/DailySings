<template>
  <div class="artist-view">
    <div v-if="artist" class="artist-details">
      <div class="artist-image">
        <img :src="artist.imageUrl" :alt="artist.name" />
      </div>
      <div class="artist-bio">
        <h2>{{ artist.name }}</h2>
        <p>{{ artist.bio }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading artist details...</p>
    </div>
    <button @click="navigateToAddReview">Оставить рецензию</button>
  </div>
  <div class="track-list">
    <TrackList />
  </div>
  <div class="new-reviews">
    <div class="new-reviews-title">
      <h3>Рецензии</h3>
    </div>
    <div class="new-reviews-cards">
      <div class="cards">
        <NewReviews />
      </div>
    </div>
    <div class="old-reviews-cards">
      <div class="old-cards">
        <OldReviews />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import OldReviews from '../components/OldReviews.vue'
import TrackList from '../components/TrackList.vue'
import NewReviews from '@/components/NewReviews.vue'
import gu1vazZ from '../assets/DailySings Stars/artists images/gu1vazZ.jpg'
import Berry_Miracle from '../assets/DailySings Stars/artists images/Berry Miracle.jpg'
import Lonewj from '../assets/DailySings Stars/artists images/Lonewj.png'
import TRYFG from '../assets/DailySings Stars/artists images/TRYFG.jpg'
import Josodo from '../assets/DailySings Stars/artists images/Josodo.jpg'
import woee33 from '../assets/DailySings Stars/artists images/woee33.jpg'
import FENDIGLOCK from '../assets/DailySings Stars/artists images/FENDIGLOCK.jpg'

const route = useRoute()
const router = useRouter()
const artist = ref(null)

onMounted(() => {
  const artistId = route.params.id
  fetchArtistData(artistId)
})

const fetchArtistData = (artistId) => {
  const artists = [
    {
      id: '1',
      name: 'gu1vazZ',
      imageUrl: gu1vazZ,
      bio: 'Молодой артист из России, проживает в г. Москва, 19 лет. Выступал на сцене в одном из клубов г. Москва, вместе с артистами Lonewj и Berry Miracle. '
    },
    {
      id: '2',
      name: 'Lonewj',
      imageUrl: Lonewj,
      bio: 'Lonewj - музыкальный исполнитель из Ульяновска. Пишет композиции в жанре поп и гипер-поп. '
    },
    {
      id: '3',
      name: 'Berry Miracle',
      imageUrl: Berry_Miracle,
      bio: 'Berry Miracle - хип-хоп исполнитель с нетипичной подачей и сюрреалистичными строчками.'
    },
    {
      id: '4',
      name: 'TRYFG',
      imageUrl: TRYFG,
      bio: 'TRYFG - андерграунд исполнитель из Москвы. За свои 20 лет успел поработать с западными артистами в его жанре, но пока не нашел постоянных слушателей. Верит, что музыка это творчество, а не деньги.'
    },
    {
      id: '5',
      name: 'Josodo',
      imageUrl: Josodo,
      bio: 'Josodo - перспективный артист из Москвы. Набирает большие обороты в социальных сетях, тем самым обеспечивая себе хорошее будущее.'
    },
    {
      id: '6',
      name: 'woee33',
      imageUrl: woee33,
      bio: 'woee33 - начинающий поп артист, который не знает границ в музыке. Постоянно экспериментирует с жанрами и ищет свой отличительный звук, среди серых масс.'
    },
    {
      id: '7',
      name: 'FENDIGLOCK',
      imageUrl: FENDIGLOCK,
      bio: 'FENDIGLOCK - уже устоявшийся на музыкальной сцене артист, но так и не нашедший своей постоянной аудитории. Его будущее точно обречено на успех, ведь он ни раз светился в популярных музыкальных пабликах. '
    }
  ]

  const foundArtist = artists.find((artist) => artist.id === artistId)

  artist.value = foundArtist
}

const navigateToAddReview = () => {
  const artistId = route.params.id
  router.push({ name: 'AddReview', params: { artistId } })
}

const artistToExpose = artist
const navigateToAddReviewToExpose = navigateToAddReview

const reviews = ref([
  {
    id: 1,
    username: 'denis@mail.ru',
    title: 'Лучший Исполнитель! Подпивайтесь на gu1vazZ!',
    content: 'Content1',
    createdAt: '2022-01-01',
    artistId: 1
  }
])
</script>

<style scoped>
.artist-view {
  margin-top: 6rem;
  background-color: #101010;
  border-radius: 1rem;
  width: 76rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.artist-details {
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
}
.artist-bio {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-left: 2rem;
}

.artist-image {
  width: 50%;
}

h2 {
  color: #d9c6fe;
  margin-bottom: 1rem;
}

img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

p {
  color: #ffffff;
  text-align: justify;
  line-height: 1.5;
}

button {
  margin-bottom: 4rem;
  margin-left: 6rem;
  width: 25rem;
  height: 4rem;
  background-color: #191919;
  color: #fff;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #5f43cb;
    color: #fff;
  }
}
.new-reviews-title {
  color: #d9c6fe;
  margin-left: 2rem;
}

.new-reviews-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: auto;
}

.old-reviews-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.old-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: auto;
  margin-left: 2rem;
  margin-bottom: 2rem;
}
.track-list {
  margin-bottom: 2rem;
}
</style>
