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
      // let stars = ''
      // for(let i = 0; i < voto; i++) {
      //   stars += 
      // }

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
        <div v-for="el in calcolaStelle(film.vote_average)" :key="el">
          <p class="bg-yellow" v-if="film.vote_average <= film.calcolaStelle"> 
            <font-awesome-icon icon="fa-regular fa-star" />
          </p>
          <p v-else>
            <font-awesome-icon icon="fa-solid fa-star" />
          </p>
        </div>
      </div>
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

  h1 {
    font-size: 20px;
  }
}

.bg-yellow {
  color: yellow;
}

// .info-movies {
//   display: none;
// }

// .info-movies:hover {
//   display: block;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%);
// }

// .cover:hover {
//   display: none;
// }
</style>
