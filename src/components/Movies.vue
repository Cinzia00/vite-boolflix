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
        case 'it':
          return '/img/it.png'
        case 'ja':
          return '/img/jp.png'
        case 'fr':
          return '/img/fr.png'
        case 'de':
          return '/img/de.png'
        default:
          return '/img/default-flag.png'
      }
    },
    calcolaStelle(voto) {
      const stelle = Math.round(voto / 2)
      return stelle;
    }
  }
}



</script>



<template>
  <li>
    <div class="cover">
      <div class="box-cover" v-if="film.poster_path !== null" >
        <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path">
      </div>
      <div class="box-cover" v-else>
        <img class="image-null" src="/img/netflix.png" alt="">
      </div>
    </div>
    <div class="info-movies">
      <h1>{{ film.title || film.name }}</h1>
      <h2>{{ film.original_title || film.original_name }}</h2>
      <img :src="returnFlag(film.original_language)" alt="">
      <div class="flex">
        <div v-for="el in 5" :key="el">
          <p v-if="el < calcolaStelle(film.vote_average)">
            <font-awesome-icon icon="fa-solid fa-star" />
          </p>
          <p v-else>
            <font-awesome-icon icon="fa-regular fa-star" />
          </p>
        </div>
      </div>
      <p>{{ film.overview }}</p>
    </div>
  </li>
</template>





<style lang=scss scoped>
.flex{
  display: flex;
  margin-top: 8px;
}
.box-cover{
  width: 342px;
  height:513px;
  object-fit: cover;
  object-position: center;

}
.image-null {
  max-width: 100%;
}

li {
  position: relative;

  h1 {
    font-size: 20px;
  }
}

.bg-yellow {
  color: yellow;
}

.info-movies {
  display: none;
}

li:hover .info-movies{
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  line-height: 20px;
}

// .cover:hover {
//   display: none;
// }
</style>
