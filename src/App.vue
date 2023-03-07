<template>
  <div>
    <Header @searchMovies="searchMovies" />
  </div>
</template>


<script>
import Header from './components/Header.vue'
import store from '../store'
export default {
  components: {
    Header,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    searchMovies() {
      const title = this.store.title
      console.log(title, 'title')
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=b126367f63d095daf4b25ffe558a9c02&query=ritorno', {

          params: {
            title,
          }
        })
        .then((res) => {
          console.log(this.title)
        }).catch((error) => {
          console.log(error)
        })


    }
  }
}
</script>




<style></style>
