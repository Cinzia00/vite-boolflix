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
      <div class="flex">
        <h1 class="title-boolflix">BOOLFLIX</h1>
        <ul class="list-menu">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Serie TV</a>
          </li>
          <li>
            <a href="">Film</a>
          </li>
          <li>
            <a href="">Originali</a>
          </li>
          <li>
            <a href="">Aggiunti di recente</a>
          </li>
          <li>
            <a href="">La mia lista</a>
          </li>
        </ul>
      </div>
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
  color: white;

  .flex {
    display: flex;
    gap: 50px;
  }

  .list-menu{
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .list-menu li:hover {
    color: red;
  }
}

.container{
  display: flex;
  justify-content: space-between;
  padding: 30px;

  .searchbar {
    display: flex;
    gap: 15px;
  }

  button, input {
    padding: 5px 10px;
    border-radius: 3px;
  }
}

.title-boolflix {
  color: red;
}
</style>
