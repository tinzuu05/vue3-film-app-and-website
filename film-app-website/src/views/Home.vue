<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/film/tt2948372">
        <img src="https://media1.popsugar-assets.com/files/thumbor/mhDqG_OZFgRphfInplZrHwI-9vU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/12/29/177/n/1922283/tmp_kZnLdv_4d6a62bc52fce621_MCDSOUL_G5004.jpg" alt="film" class="featured-img">
        <div class="detail">
          <h3><span>Latest</span>Soul</h3>
          <p>After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.</p>
        </div>
      </router-link>
    </div>

    <form @submit.prevent="searchFilms()" class="search-box">
      <input type="text" placeholder="What are you looking for?" v-model="search">
      <input type="submit" value="Search">
    </form>
    <div class="films-list">
      <div class="film" v-for="film in films" :key="film.imdbID">
        <router-link :to="{name: 'FilmDetail', params: {id: film.imdbID}}" class="film-link">
          <div class="film-image">
            <img :src="film.Poster" :alt="film.Title">
            <div class="type">{{ film.Type }}</div>
          </div>
          <div class="detail">
            <p class="year">{{ film.Year }}</p>
            <h3>{{ film.Title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import env from '@/env.js'

export default {
  setup () {
    const search = ref('')
    const films = ref([])

    const searchFilms = async () => {
      if (search.value !== '') {
        try {
          // http://www.omdbapi.com/
          const res = await fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          const data = await res.json()
          films.value = data.Search
          search.value = ''
          console.log(films.value)
          return data
        } catch (err) {
          console.log(err.message)
        }
      }
    }

    return { search, films, searchFilms }
  }
}
</script>

<style lang="scss">
  .home {
    .feature-card {
      position: relative;

      .featured-img {
        position: relative;
        z-index: 0;
        display: block;
        width: 100%;
        height: 350px;
        object-fit: cover;
      }

      .detail {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        padding: 16px;
        background-color: rgba(0, 0, 0, .6);

        h3 {
          margin-bottom: 16px;
          color: #fff;

          span {
            margin: 0 16px 0 0;
            padding: 8px 16px;
            background-color: #ec4646;
            border-radius: 10px;
          }
        }

        p {
          color: #fff;
        }
      }
    }

    .search-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px;

      input {
        display: block;
        // remove default style from browers
        appearance: none;
        border: none;
        outline: none;
        background: none;

        &[type="text"] {
          margin-bottom: 16px;
          padding: 10px 16px;
          width: 60%;
          color: #fff;
          background-color: #537791;
          font-size: 20px;
          border-radius: 10px;
          transition: .4s;
          @media (max-width: 576px) {
            width: 100%;
          }

          &::placeholder {
            color: #f3f3f3;
          }

          &:focus {
            box-shadow: 0px 3px 6px rgba (0, 0, 0, .2);
          }
        }

        &[type="submit"] {
          padding: 16px;
          width: 100%;
          max-width: 300px;
          background-color: #75cfb8;
          border-radius: 10px;
          color: #fff;
          font-size: 20px;
          text-transform: uppercase;
          transition: .4s;
          cursor:pointer;

          &:active {
            background-color: #537791;
          }
        }
      }
    }

    .films-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      margin: 0px auto;

      .film {
        display: flex;
        // flex-grow, flex-shrink, flex-basis
        flex: 0 1 25%;
        padding: 16px 8px;
        @media (max-width:768px) {
          flex: 0 1 50%;
        }

        .film-link {
          display: flex;
          flex-direction: column;
          height: 100%;

          .film-image {
            position: relative;
            display: block;

            img {
              display: block;
              width: 100%;
              height: 275px;
              object-fit: cover;
            }

            .type {
              position: absolute;
              left: 0;
              bottom: 16px;
              z-index: 1;
              padding: 8px 16px;
              background-color: #75cfb8;
              color: #fff;
              text-transform: capitalize;
            }
          }

          .detail {
            flex: 1 1 100%;
            padding: 16px 8px;
            background-color: #537791;
            border-radius: 0 0 8px 8px;

            .year {
              color: #f7f6e7;
              font-size: 14px;
            }

            h3 {
              color: #fff;
              font-weight: 600;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
</style>
