<script>
import store from '../../store'

export default {
    props: {
        film: {
            type: Object,
            required: true
        }
    },
    data() {
      return {
        store,
        title: this.searchMovies,
      }
    }
}
</script>



<template>
  <div>
    <img :src="'https://image.tmdb.org/t/p/w342'+film.poster_path" alt="">
    <h1>{{ film.title }}</h1>
    <h2>{{ film.original_title }}</h2>
    <p>{{ film.original_language }}</p>
    <p>{{ film.vote_average }}</p>
  </div>

</template>



<style scoped>

</style>
