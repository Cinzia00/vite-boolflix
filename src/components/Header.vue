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
  <div class="header">
    <h1 class="title-boolflix">BOOLFLIX</h1>
    <div class="searchbar">
      <input type="text" placeholder="Ricerca film" v-model="store.searchMovies">
      <button @click="$emit('searchMovies')">Cerca</button>
    </div>
  </div>

</template>



<style lang="scss" scoped>
@use '../../reset.scss' as *;

.header{
  display: flex;
  justify-content: space-between;
  background-color: black;  
  padding: 30px;

  .searchbar {
    display: flex;
    gap: 15px;
  }
}

.title-boolflix {
  color: red;
}
</style>
