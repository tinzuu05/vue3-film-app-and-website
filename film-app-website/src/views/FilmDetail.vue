<template>
  <h2>{{ film.Title }}</h2>
  <div class="film-detail">
    <div>
      <p>{{ film.Year }}</p>
      <img :src="film.Poster" alt="film.Title" class="featured-img">
      <p>{{ film.Country }} <span>{{ film.Runtime}}</span></p>
      <p>Ratings- {{ film.Ratings[0].Value }}</p>
      <p>Actors list- {{ film.Actors }}</p>
    </div>
    <div>
      <p>Plot-</p>
      <p>{{ film.Plot }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import env from '@/env.js'

export default {
  setup () {
    const film = ref('')
    const route = useRoute()

    onBeforeMount(async () => {
      try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
        const data = await res.json()
        film.value = data
        console.log(film.value)
        return data
      } catch (err) {
        console.log(err.message)
      }
    })
    return { film }
    // https://colorhunt.co/palette/106550
  }
}
</script>

<style lang="scss">
  h2 {
    margin-bottom: 16px;
    margin-left: 16px;
    font-size: 26px;
    font-weight: 600;
  }

  .film-detail {
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
    @media (max-width: 576px) {
      grid-template-columns: none;
      gap: 0;
    }

    .featured-img {
      display: block;
      margin-bottom: 16px;
      max-width: 200px;
    }

    p {
      font-size: 18px;
      line-height: 1.4;

      span {
        background-color: #537791;
        color: #fff;
      }
    }
  }
</style>
