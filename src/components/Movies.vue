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
      title: this.searchMovies
    }
  },
  methods: {
    returnFlag(language) {
      console.log(language);
      switch (language) {
        case 'en':
          return '/img/gb.png'
          break;
        case 'it':
          return '/img/it.png'
          break;
        case 'ja':
          return '/img/jp.png'
          break;
        case 'fr':
          return '/img/fr.png'
          break;
        case 'de':
          return '/img/de.png'
          break;
        default:
          return '/img/default-flag.png'
          break;
      }

    }
  }
}



</script>



<template>
  <li>
    <img :src="'https://image.tmdb.org/t/p/w154' + film.poster_path" alt="">
    <h1>{{ film.title || film.name }}</h1>
    <h2>{{ film.original_title || film.original_name }}</h2>
    <img :src="this.returnFlag(film.original_language)" alt="">
    <p>{{ film.vote_average }}</p>
  </li>
</template>



<style lang=scss scoped>
li {

  h1 {
    font-size: 20px;
  }
}
</style>
