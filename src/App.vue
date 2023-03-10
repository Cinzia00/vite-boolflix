<template>
  <Header @searchMovies="fetchResults" />
  <main>
    <div class="container">
      <ul class="card_movies">
        <Movies v-for="movie in store.movies" :key="movie.id" :film="movie" />
        
        <Movies v-for="serietv in store.tv" :key="serietv.id" :film="serietv" />
      </ul>
    </div>
  </main>
</template>


<script>
import Header from './components/Header.vue'
import store from '../store'
import axios from 'axios'
import Movies from './components/Movies.vue'

export default {
  components: {
    Header,
    Movies,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    fetchMovies() {
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=b126367f63d095daf4b25ffe558a9c02', {

          params: {
            query: this.store.searchMovies,
            language: 'it-IT',
          }
        })
        .then((res) => {
          this.store.movies = res.data.results
          console.log(this.store.searchMovies)
          console.log(res)

        }).catch((error) => {
          console.log(error)
          this.store.movies = []
        })
    },
    fetchTv() {
      axios.get('https://api.themoviedb.org/3/search/tv?api_key=b126367f63d095daf4b25ffe558a9c02', {

        params: {
          query: this.store.searchMovies,
        }
      })
        .then((res) => {
          this.store.tv = res.data.results
          console.log(res)
        }).catch((error) => {
        
          console.log(error)
        })
    },
    fetchResults() {
      this.fetchMovies();
      this.fetchTv();
    }
  }
}
</script>




<style lang="scss">
@use '../reset.scss' as *;
@use './style.css' as *;


.container {
  margin-top: 50px;
}

.card_movies {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  gap: 35px;
}
</style>
