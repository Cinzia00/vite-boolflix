<script>

</script>



<template>
  <div>
    <h1>BOOLFLIX</h1>
    <input type="text" placeholder="Ricerca film">
    <button @keyup.enter="$emit('searchMovies')">Cerca</button>
  </div>

</template>



<style scoped>

</style>
