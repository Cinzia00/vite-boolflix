<template>
  <Header @searchMovies="searchMovies" />
    <Movies v-for="movie in store.movies" :key="movie.id" :film="movie"/>
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
    searchMovies() {
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=b126367f63d095daf4b25ffe558a9c02', {

          params: {
            query: this.store.searchMovies,
            language: 'it-IT'
          }
        })
        .then((res) => {
          this.store.movies = res.data.results
          console.log(this.store.searchMovies)
          console.log(res)
        }).catch((error) => {
          console.log(error)
          this.store.movies= []
        })


    }
  }
}
</script>




<style></style>
