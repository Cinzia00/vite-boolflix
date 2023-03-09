<script>
import store from '../../store'

export default {

  data() {
    return {
      store,
    }
  }
}

</script>



<template>
  <header>
    <div class="container">
      <h1 class="title-boolflix">BOOLFLIX</h1>
      <div class="searchbar">
        <input type="text" placeholder="Ricerca film" @keyup.enter="$emit('searchMovies')" v-model="store.searchMovies">
        <button @click="$emit('searchMovies')">Cerca</button>
      </div>
    </div>
  </header>

</template>



<style lang="scss" scoped>
@use '../../reset.scss' as *;
@use '../style.css' as *;

header {
  background-color: black;  
}

.container{
  display: flex;
  justify-content: space-between;
  padding: 30px;

  .searchbar {
    display: flex;
    gap: 15px;
  }

  button {
    padding: 5px 10px;
    border-radius: 5px;
  }
}

.title-boolflix {
  color: red;
}
</style>
