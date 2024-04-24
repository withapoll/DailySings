<template>
  <div class="track-list-container">
    <div class="track-list-header">
      <h3>Track List</h3>
    </div>
    <div class="track-list">
      <div class="track" v-for="track in filteredTracks" :key="track.id">
        <img :src="track.imageUrl" :alt="track.name" />
        <div class="track-info">
          <h4>{{ track.name }}</h4>
          <p>{{ track.artistName }}</p>
        </div>
        <audio controls>
          <source :src="track.src" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import PUNKLOVE from '../assets/DailySings Stars/gu1vazZ/1.jpg'
import no_trust from '../assets/DailySings Stars/gu1vazZ/2.jpg'
import cannot_see from '../assets/DailySings Stars/gu1vazZ/3.jpg'
import heart_dropped from '../assets/DailySings Stars/gu1vazZ/4.jpg'
import over from '../assets/DailySings Stars/gu1vazZ/5.jpg'
import red from '../assets/DailySings Stars/gu1vazZ/6.jpg'
import obormot from '../assets/DailySings Stars/gu1vazZ/8.jpg'
import bless from '../assets/DailySings Stars/Lonewj/1.jpg'
import too from '../assets/DailySings Stars/Lonewj/2.jpg'
import blitch from '../assets/DailySings Stars/Lonewj/3.jpg'
import loose from '../assets/DailySings Stars/Lonewj/4.jpg'
import astral from '../assets/DailySings Stars/Lonewj/5.jpg'
import veins from '../assets/DailySings Stars/Lonewj/6.jpg'
import time from '../assets/DailySings Stars/Lonewj/7.jpg'
import gbs from '../assets/DailySings Stars/berry miracle/1.jpg'
import star from '../assets/DailySings Stars/berry miracle/2.jpg'
import you from '../assets/DailySings Stars/berry miracle/3.jpg'
import red_code from '../assets/DailySings Stars/berry miracle/4.jpg'
import mcd from '../assets/DailySings Stars/berry miracle/5.jpg'
import sp00ky from '../assets/DailySings Stars/woee33/7.jpg'

import think from '../assets/DailySings Stars/josodo/2.jpg'
import megan from '../assets/DailySings Stars/josodo/3.jpg'
import thought from '../assets/DailySings Stars/josodo/4.jpg'
import callme from '../assets/DailySings Stars/woee33/1.jpg'
import blade from '../assets/DailySings Stars/woee33/2.jpg'
import halloween from '../assets/DailySings Stars/woee33/4.jpg'

import dep from '../assets/DailySings Stars/fendi/1.jpg'
import bye from '../assets/DailySings Stars/fendi/4.jpg'
import numbers from '../assets/DailySings Stars/fendi/3.jpg'

const route = useRoute()

const artists = ref([
  { id: 1, name: 'gu1vazZ' },
  { id: 2, name: 'Lonewj' },
  { id: 3, name: 'Berry Miracle' },
  { id: 4, name: 'TRYFG' },
  { id: 5, name: 'Josodo' },
  { id: 6, name: 'woee33' },
  { id: 7, name: 'FENDIGLOCK' }
])

const tracks = ref([
  {
    id: 1,
    name: 'PUNKLOVE',
    artistName: 'gu1vazZ feat. Berry Miracle',
    artistId: 1,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20feat.%20Berry%20Miracle%20-%20PANKLOVE.mp3',
    imageUrl: PUNKLOVE
  },
  {
    id: 2,
    name: 'Не доверяю',
    artistName: 'gu1vazZ',
    artistId: 1,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20-%20%D0%9D%D0%B5%20%D0%B4%D0%BE%D0%B2%D0%B5%D1%80%D1%8F%D1%8E.mp3',
    imageUrl: no_trust
  },
  {
    id: 3,
    name: 'Не замечаю',
    artistName: 'gu1vazZ feat. Lonewj',
    artistId: 1,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20feat.%20Lonewj%20-%20%D0%9D%D0%B5%20%D0%B7%D0%B0%D0%BC%D0%B5%D1%87%D0%B0%D1%8E.mp3',
    imageUrl: cannot_see
  },
  {
    id: 4,
    name: 'Сердце замерло',
    artistName: 'gu1vazZ',
    artistId: 1,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20-%20%D0%A1%D0%B5%D1%80%D0%B4%D1%86%D0%B5%20%D0%B7%D0%B0%D0%BC%D0%B5%D1%80%D0%BB%D0%BE.mp3',
    imageUrl: heart_dropped
  },
  {
    id: 5,
    name: 'all over',
    artistName: 'gu1vazZ',
    artistId: 1,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20-%20%D0%9D%D0%B5%20%D0%B4%D0%BE%D0%B2%D0%B5%D1%80%D1%8F%D1%8E.mp3',
    imageUrl: over
  },
  {
    id: 6,
    name: 'red color',
    artistName: 'gu1vazZ feat. Lonewj',
    artistId: 1,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj,%20gu1vazZ%20-%20red%20color.mp3',
    imageUrl: red
  },
  {
    id: 7,
    name: 'Обормот',
    artistName: 'gu1vazZ, Berry Miracle',
    artistId: 1,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/gu1vazZ%20feat.%20Berry%20Miracle%20-%20%D0%9E%D0%B1%D0%BE%D1%80%D0%BC%D0%BE%D1%82.mp3',
    imageUrl: obormot
  },
  {
    id: 8,
    name: 'Bless',
    artistName: 'Lonewj',
    artistId: 2,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20-%20Bless.mp3',
    imageUrl: bless
  },
  {
    id: 9,
    name: 'way too much',
    artistName: 'Lonewj',
    artistId: 2,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20-%20Way%20too%20much.mp3',
    imageUrl: too
  },
  {
    id: 10,
    name: 'Hoes blitch',
    artistName: 'Lonewj',
    artistId: 2,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20-%20Hoes%20blitch.mp3',
    imageUrl: blitch
  },
  {
    id: 11,
    name: 'Не теряй',
    artistName: 'Lonewj',
    artistId: 2,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20-%20%D0%9D%D0%B5%20%D1%82%D0%B5%D1%80%D1%8F%D0%B8%CC%86.mp3',
    imageUrl: loose
  },
  {
    id: 12,
    name: 'астрал',
    artistName: 'Lonewj',
    artistId: 2,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20-%20%D0%B0%D1%81%D1%82%D1%80%D0%B0%D0%BB%20-%20prod.%20by%20forzen.mp3',
    imageUrl: astral
  },
  {
    id: 13,
    name: 'по венам',
    artistName: 'Lonewj',
    artistId: 2,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20-%20%D0%BF%D0%BE%20%D0%B2%D0%B5%D0%BD%D0%B0%D0%BC.mp3',
    imageUrl: veins
  },
  {
    id: 14,
    name: 'пришло время',
    artistName: 'Lonewj',
    artistId: 2,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Lonewj%20-%20%D0%9F%D1%80%D0%B8%D1%88%D0%BB%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F.mp3',
    imageUrl: time
  },
  {
    id: 15,
    name: 'GBS',
    artistName: 'Berry Miracle',
    artistId: 3,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Berry%20Miracle%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Berry%20Miracle%20-%20GBS.mp3',
    imageUrl: gbs
  },
  {
    id: 16,
    name: 'Midnight Star',
    artistName: 'Berry Miracle, THREEMUS',
    artistId: 3,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Berry%20Miracle%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Berry%20Miracle,%20THREEMUS%20%20-%20Midnight%20Star.mp3',
    imageUrl: star
  },
  {
    id: 17,
    name: 'Для тебя',
    artistName: 'Berry Miracle',
    artistId: 3,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Berry%20Miracle%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Berry%20Miracle%20-%20%D0%94%D0%BB%D1%8F%20%D1%82%D0%B5%D0%B1%D1%8F.mp3',
    imageUrl: you
  },
  {
    id: 18,
    name: 'код красный',
    artistName: 'TRYFG',
    artistId: 4,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/TRYFG%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/TRYFG%20-%20%D0%BA%D0%BE%D0%B4%20%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B8%CC%86.mp3',
    imageUrl: red_code
  },
  {
    id: 19,
    name: 'МЦД',
    artistName: 'TRYFG',
    artistId: 4,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/TRYFG%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/TRYFG%20-%20%D0%9C%D0%A6%D0%94.mp3',
    imageUrl: mcd
  },
  {
    id: 20,
    name: 'sp00ky',
    artistName: 'TRYFG',
    artistId: 4,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/TRYFG%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/TRYFG%20-%20sp00ky.mp3',
    imageUrl: sp00ky
  },
  {
    id: 21,
    name: 'Думай о большем',
    artistName: 'Josodo',
    artistId: 5,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/josodo%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Josodo%20-%20%D0%94%D1%83%D0%BC%D0%B0%D0%B8%CC%86%20%D0%BE%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B5%D0%BC.mp3',
    imageUrl: think
  },
  {
    id: 22,
    name: 'Megan',
    artistName: 'Josodo',
    artistId: 5,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/josodo%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Josodo%20-%20Megan.mp3',
    imageUrl: megan
  },
  {
    id: 23,
    name: 'Думала',
    artistName: 'Josodo',
    artistId: 5,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/josodo%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/Josodo%20-%20%D0%94%D1%83%D0%BC%D0%B0%D0%BB%D0%B0.mp3',
    imageUrl: thought
  },
  {
    id: 24,
    name: 'CALL ME',
    artistName: 'woee33',
    artistId: 6,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/woee33%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/woee33%20-%20CALL%20ME.mp3',
    imageUrl: callme
  },
  {
    id: 25,
    name: 'Bladerunner',
    artistName: 'woee33',
    artistId: 6,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/woee33%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/woee33%20-%20Bladerunner.mp3',
    imageUrl: blade
  },
  {
    id: 26,
    name: 'Halloween',
    artistName: 'woee33',
    artistId: 6,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/woee33%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/woee33%20-%20Halloween.mp3',
    imageUrl: halloween
  },
  {
    id: 27,
    name: 'Влияние',
    artistName: 'FENDIGLOCK',
    artistId: 7,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/fendiglock%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/FENDIGLOCK%20-%20%D0%92%D0%BB%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5.mp3',
    imageUrl: dep
  },
  {
    id: 28,
    name: 'ПОКА!',
    artistName: 'FENDIGLOCK',
    artistId: 7,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/fendiglock%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/FENDIGLOCK%20-%20%D0%9F%D0%9E%D0%9A%D0%90!.mp3',
    imageUrl: bye
  },
  {
    id: 29,
    name: 'Легкие числа',
    artistName: 'FENDIGLOCK',
    artistId: 7,
    src: 'https://github.com/withapoll/songs/raw/main/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8-20240424T203557Z-001/%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/fendiglock%20%D0%BF%D0%B5%D1%81%D0%BD%D0%B8/FENDIGLOCK%20-%20%D0%9B%D0%B5%CC%88%D0%B3%D0%BA%D0%B8%D0%B5%20%D1%87%D0%B8%D1%81%D0%BB%D0%B0.mp3',
    imageUrl: numbers
  }
])

const getArtistName = (artistId) => {
  const artist = artists.value.find((artist) => artist.id === artistId)
  return artist ? artist.name : 'Unknown Artist'
}

const filteredTracks = computed(() => {
  const artistId = Number(route.params.id) // convert to number
  return tracks.value.filter((track) => track.artistId === artistId)
})
</script>

<style lang="scss" scoped>
.track-list-container {
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
.track-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.track {
  width: 100%;
  background-color: #191919;
  padding: 1rem;
  border-radius: 0.5rem;
  color: #fff;
  display: flex;
  align-items: center;

  img {
    width: 10%;
    margin-right: 1rem;
  }

  .track-info {
    margin-right: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }
}
audio {
  width: 17rem;
  border-radius: 0.1rem;
  padding: 10px;
  background-color: #191919;
  color: #fff;
  margin-left: 2rem;
}

audio::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background: #007bff;
  cursor: pointer;
}

audio::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  background: #ddd;
  border-radius: 2.5px;
}
</style>
